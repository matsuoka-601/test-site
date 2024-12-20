use core::num;

use glam::Vec2;
// use rand::Rng;
use rand::rngs::StdRng;
use rand::{SeedableRng, Rng};
use web_time::Instant;
use std::sync::atomic::{AtomicU32, Ordering};
use crate::MouseInfo;

use rayon::prelude::*;
use wasm_bindgen::prelude::*;
use std::f32::consts::PI;


pub struct State {
    pub particles: Vec<Particle>, 
    neighbors: Vec<Vec<Neighbor>>, 
    pub field: Field, 
    cells: Cells, 
}

#[derive(Clone)]
struct Neighbor{
    r: f32, 
    j: u32
}

#[derive(Clone)]
pub struct Particle {
    pub position: Vec2, 
    pub velocity: Vec2, 
    force: Vec2, 
    pressure: f32, 
    density: f32, 
    near_pressure: f32, 
    near_density: f32,
    pub size: f32, 
}

pub struct Field {
    pub height: f32, 
    pub width: f32,
}

pub struct Cells {
    pub cells: Vec<Vec<u32>>, 
    pub nx: usize, 
    pub ny: usize, 
}

const DT: f32 = 0.0010;
pub const PARTICLE_SIZE: f32 = 0.005;
const KERNEL_RADIUS: f32 = 2.0 * PARTICLE_SIZE;
const MOUSE_FORCE_STRENGTH: f32 = 200.0;
const KERNEL_RADIUS_SQ: f32 = KERNEL_RADIUS * KERNEL_RADIUS;
const KERNEL_RADIUS_POW4: f32 = KERNEL_RADIUS_SQ * KERNEL_RADIUS_SQ;
const KERNEL_RADIUS_POW5: f32 = KERNEL_RADIUS_POW4 * KERNEL_RADIUS;
const KERNEL_RADIUS_POW8: f32 = KERNEL_RADIUS_POW4 * KERNEL_RADIUS_POW4;
const TARGET_DENSITY: f32 = 9.0;
const STIFFNESS: f32 = 0.008;
const NEAR_STIFFNESS: f32 = 8e-5;
const MASS: f32 = 1.0;
const SPIKY_POW2: f32 = 6.0 / (PI * KERNEL_RADIUS_POW4); 
const SPIKY_POW3: f32 = 10.0 / (PI * KERNEL_RADIUS_POW5);
const SPIKY_POW2_GRAD: f32 = 12.0 / (PI * KERNEL_RADIUS_POW4); 
const SPIKY_POW3_GRAD: f32 = 30.0 / (PI * KERNEL_RADIUS_POW5); 
const VISC_LAP: f32 = 4.0 / (PI * KERNEL_RADIUS_POW8); 
const VISCOSITY: f32 = 0.3;
const EPS: f32 = 1e-30;
const GRV: Vec2 = Vec2::new(0.0, -9.8);
const SOLVER_STEPS: u32 = 10;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

macro_rules! benchmark {
    ($code:block) => {{
        let start = Instant::now(); 
        $code
        start.elapsed().as_micros()
    }};
}

impl State {
    pub fn new(num_particles: u32, aspect_ratio: f32) -> Self {
        let neighbors = Vec::new();
        let particles = Vec::new();
        let height = Self::height_from_num_particles(num_particles);
        let width = height * aspect_ratio;
        let cells = Cells::new(height, width, KERNEL_RADIUS);
        let field = Field { height, width };

        let mut state = Self { particles, neighbors, field, cells };

        state.init_particles(num_particles, aspect_ratio);

        state
    }

    pub fn update(&mut self, mouse_position: Vec2, mouse_dragging: bool) {
        for _ in 0..SOLVER_STEPS {
            let t1 = benchmark!({self.cells.register_cells(&self.particles)});
            let t2 = benchmark!({self.compute_density_pressure()});
            let t3 = benchmark!({self.compute_force()});
            let t4 = if mouse_dragging { benchmark!({self.mouse_force(mouse_position)}) } else { 0 };
            let t5 = benchmark!({self.handle_boundary()});
            let s = format!("{}us, {}us, {}us, {}us, {}us", t1, t2, t3, t4, t5);
            // log(&s);
        }
        // log(&s);
        // println!("{}", s);
        // self.cells.register_cells(&self.particles);
        // self.compute_density_pressure();
        // self.compute_force();
        // self.handle_boundary();
    }

    fn get_mouse_radius(&self) -> f32 {
        // 0.08 + (self.particles.len() as f32 - 3000.0) / 200000.0
        self.field.height / 5.0
    }

    fn mouse_force(&mut self, mouse_vec: Vec2) {
        let mouse_radius = self.get_mouse_radius();
        self.particles.par_iter_mut().for_each(|particle|{
            let dx = mouse_vec - particle.position;
            if dx.length() < mouse_radius {
                let dir = dx.normalize_or_zero();
                particle.force += MOUSE_FORCE_STRENGTH * dir;
            }
        });
    }

    fn handle_boundary(&mut self) {
        let field_height = self.field.height;
        let field_width = self.field.width;

        self.particles.par_iter_mut().for_each(|particle|{
            particle.velocity += (particle.force / particle.density) * DT;
            particle.position += particle.velocity * DT;

            if particle.position.y - KERNEL_RADIUS < 0.0 {
                particle.velocity.y = (KERNEL_RADIUS - particle.position.y) / DT;
            }
            if particle.position.y + KERNEL_RADIUS > field_height { 
                particle.position.y = field_height - KERNEL_RADIUS;
                particle.velocity.y = -0.3;
            }
            if particle.position.x - KERNEL_RADIUS < 0.0 {
                particle.position.x = KERNEL_RADIUS;
                particle.velocity.x *= -0.3;
            }
            if particle.position.x + KERNEL_RADIUS > field_width {
                particle.position.x = field_width - KERNEL_RADIUS;
                particle.velocity.x *= -0.3;
            }
        });
    }

    fn compute_density_pressure(&mut self) {
        let particles_copy = self.particles.clone();
        let cells = &self.cells;

        self.particles
            .par_iter_mut()
            .zip_eq(self.neighbors.par_iter_mut())
            .enumerate()
            .for_each(|(i, (particle, neighbors))| {
                neighbors.clear();
                let pi = &particles_copy[i];
                particle.density = 0.0;

                let grid_x = (pi.position.x / KERNEL_RADIUS) as i32;
                let grid_y = (pi.position.y / KERNEL_RADIUS) as i32;

                let xrange = std::cmp::max(grid_x - 1, 0) ..= std::cmp::min(grid_x + 1, cells.nx as i32 - 1);

                for gx in xrange {
                    let yrange = std::cmp::max(grid_y - 1, 0) ..= std::cmp::min(grid_y + 1, cells.ny as i32 - 1);
                    for gy in yrange {
                        let grid_id = gy as usize * cells.nx + gx as usize;
                        for j in &cells.cells[grid_id] {
                            // counter.fetch_add(1, Ordering::SeqCst);
                            let pj = &particles_copy[*j as usize];
                            let r2 = (pj.position - pi.position).length_squared();
                            if r2 < KERNEL_RADIUS_SQ {
                                let a = KERNEL_RADIUS_SQ - r2;
                                particle.density += MASS * SPIKY_POW2 * a * a;
                                particle.near_density += MASS * SPIKY_POW3 * a * a * a;
                                if EPS * EPS < r2 {
                                    neighbors.push(Neighbor{j: *j, r: r2.sqrt()});
                                }
                            }
                        }
                    }
                }
                particle.pressure = STIFFNESS * (particle.density - TARGET_DENSITY);
                particle.near_pressure = NEAR_STIFFNESS * particle.near_density;
            });
    }

    fn compute_force(&mut self) {
        let particles_copy = self.particles.clone();

        self.particles
            .par_iter_mut()
            .zip_eq(self.neighbors.par_iter_mut())
            .enumerate()
            .for_each(|(i, (particle, neighbors))|{
                let mut fpress = Vec2::new(0.0, 0.0);
                let mut fvisc = Vec2::new(0.0, 0.0);
                let pi = &particles_copy[i];

                for Neighbor{ r, j } in neighbors {
                    let pj = &particles_copy[*j as usize];
                    let rij = pj.position - pi.position;
    
                    // Pressure
                    let a = KERNEL_RADIUS - *r;
                    let shared_pressure = (pi.pressure + pj.pressure) * 0.5;
                    let press_coeff = -MASS * shared_pressure * SPIKY_POW2_GRAD * a / pj.density;
                    let near_shared_pressure = (pi.near_pressure + pj.near_pressure) * 0.5;
                    let near_press_coeff = -MASS * near_shared_pressure * SPIKY_POW3_GRAD * a * a / pj.near_density; 
                    fpress += (press_coeff + near_press_coeff) * rij.normalize();

                    // Viscosity
                    let aa = KERNEL_RADIUS_SQ - *r * *r;
                    let visc_coeff = VISCOSITY * MASS * VISC_LAP * aa * aa * aa / pj.density;
                    let relative_speed = pj.velocity - pi.velocity;
                    fvisc += visc_coeff * relative_speed;
                }

                let fgrv = pi.density * GRV;
                particle.force = fpress + fvisc + fgrv;
            });
    }

    fn clear(&mut self) {
        self.particles.clear();
        self.neighbors.clear();
    }

    fn add_particle(&mut self, position: Vec2) {
        let velocity = Vec2::new(0.0, 0.0);
        let force = Vec2::new(0.0, 0.0);
        let pressure = 0.0;
        let near_pressure = 0.0;
        let density = 0.0;
        let near_density = 0.0;
        let size = PARTICLE_SIZE;

        self.particles.push(Particle{position, velocity, force, pressure, near_pressure, density, near_density, size});
        self.neighbors.push(Vec::new());
    }

    pub fn height_from_num_particles(num_particles: u32) -> f32 { 
        // Determined experimentally
        0.4 + (num_particles as f32 - 3000.0) / 30000.0
        // 0.7
    }

    pub fn init_particles(&mut self, num_particles: u32, aspect_ratio: f32) {
        self.clear();
        self.particles.reserve(num_particles as usize);
        let height = Self::height_from_num_particles(num_particles);
        let width = height * aspect_ratio;
        log(&height.to_string());
        log(&width.to_string());
        self.field = Field { height, width };
        self.cells = Cells::new(height, width, KERNEL_RADIUS);

        let seed = 12345; 
        let mut rng = StdRng::seed_from_u64(seed);

        let mut y = 20.0 * KERNEL_RADIUS;
        loop {
            let mut x = self.field.width * 0.1;
            loop {
                self.add_particle(Vec2::new(x, y));
                x += PARTICLE_SIZE + 0.0001 * rng.gen::<f32>();
                if x > self.field.width * 0.9 {
                    break;
                }
                if self.particles.len() == num_particles as usize {
                    break;
                }
            }
            if self.particles.len() == num_particles as usize {
                break;
            }
            y += PARTICLE_SIZE;
        }
    }
}

impl Cells {
    pub fn new(height: f32, width: f32, radius: f32) -> Self {
        let ny = (height / radius).ceil() as usize;
        let nx = (width / radius).ceil() as usize;
        let cells = vec![Vec::new(); nx * ny];
        Cells { cells, nx, ny }
    }

    fn cell_position_to_id(&self, ix: usize, iy: usize) -> usize {
        self.nx * iy + ix
    }

    pub fn register_cells(&mut self, particles: &Vec<Particle>) {
        self.cells.iter_mut().for_each(|v| v.clear());
        particles.iter().enumerate().for_each(|(i, particle)|{
            let ix = (particle.position.x / KERNEL_RADIUS) as usize;
            let iy = (particle.position.y / KERNEL_RADIUS) as usize;
            let cell_id = self.cell_position_to_id(ix, iy);
            self.cells[cell_id].push(i as u32);
        });
    }

    pub fn neighbors(&self, particle: &Particle, radius: f32) -> Vec<u32> {
        let ix = (particle.position.x / radius) as i32;
        let iy = (particle.position.y / radius) as i32;
        let dx_ = [-1, 0, 1];
        let dy_ = [-1, 0, 1];

        let mut v = Vec::new();
        for dx in dx_ {
            for dy in dy_ {
                let jx = ix + dx;
                let jy  = iy + dy;
                if 0 <= jx && jx < self.nx as i32 && 0 <= jy && jy < self.ny as i32 {
                    v.extend_from_slice(&self.cells[self.cell_position_to_id(jx as usize, jy as usize)]);
                }
            }
        }
        v
    }
}
