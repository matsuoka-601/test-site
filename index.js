(()=>{"use strict";var e={763:(e,t,n)=>{n.r(t),n.d(t,{Simulation:()=>A,default:()=>M,initSync:()=>I,initThreadPool:()=>P,sum:()=>w,wbg_rayon_PoolBuilder:()=>R,wbg_rayon_start_worker:()=>x});var r=n(673);let o;const i=new Array(128).fill(void 0);function a(e){return i[e]}i.push(void 0,null,!0,!1);let c=i.length;function _(e){const t=a(e);return function(e){e<132||(i[e]=c,c=e)}(e),t}const s="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&s.decode();let u=null;function b(){return null!==u&&u.buffer===o.memory.buffer||(u=new Uint8Array(o.memory.buffer)),u}function f(e,t){return e>>>=0,s.decode(b().slice(e,e+t))}function l(e){c===i.length&&i.push(i.length+1);const t=c;return c=i[t],i[t]=e,t}let g=null,d=0;function w(e){const t=function(e,t){const n=t(4*e.length,4)>>>0;return(null!==g&&g.buffer===o.memory.buffer||(g=new Uint32Array(o.memory.buffer)),g).set(e,n/4),d=e.length,n}(e,o.__wbindgen_malloc),n=d;return o.sum(t,n)}let m=128,h=null;function p(){return null!==h&&h.buffer===o.memory.buffer||(h=new DataView(o.memory.buffer)),h}function y(e){return null==e}const v="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},S=function(e,t){const n=v.encode(e);return t.set(n),{read:e.length,written:n.length}};function T(e,t){try{return e.apply(this,t)}catch(e){o.__wbindgen_exn_store(l(e))}}function P(e){return _(o.initThreadPool(e))}function x(e){o.wbg_rayon_start_worker(e)}const j="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>o.__wbg_simulation_free(e>>>0,1)));class A{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,j.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_simulation_free(e,0)}constructor(e){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.simulation_new(r,function(e){if(1==m)throw new Error("out of js stack");return i[--m]=e,m}(e));var t=p().getInt32(r+0,!0),n=p().getInt32(r+4,!0);if(p().getInt32(r+8,!0))throw _(n);return this.__wbg_ptr=t>>>0,j.register(this,this.__wbg_ptr,this),this}finally{o.__wbindgen_add_to_stack_pointer(16),i[m++]=void 0}}}const W="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>o.__wbg_wbg_rayon_poolbuilder_free(e>>>0,1)));class R{static __wrap(e){e>>>=0;const t=Object.create(R.prototype);return t.__wbg_ptr=e,W.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,W.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e,0)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){o.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function k(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(e){_(e)},e.wbg.__wbindgen_boolean_get=function(e){const t=a(e);return"boolean"==typeof t?t?1:0:2},e.wbg.__wbindgen_string_new=function(e,t){return l(f(e,t))},e.wbg.__wbg_instanceof_WebGl2RenderingContext_62ccef896d9204fa=function(e){let t;try{t=a(e)instanceof WebGL2RenderingContext}catch(e){t=!1}return t},e.wbg.__wbg_attachShader_396d529f1d7c9abc=function(e,t,n){a(e).attachShader(a(t),a(n))},e.wbg.__wbg_clear_7a2a7ca897047e8d=function(e,t){a(e).clear(t>>>0)},e.wbg.__wbg_clearColor_837d30f5bf4f982b=function(e,t,n,r,o){a(e).clearColor(t,n,r,o)},e.wbg.__wbg_compileShader_77ef81728b1c03f6=function(e,t){a(e).compileShader(a(t))},e.wbg.__wbg_createProgram_73611dc7a72c4ee2=function(e){const t=a(e).createProgram();return y(t)?0:l(t)},e.wbg.__wbg_createShader_f10ffabbfd8e2c8c=function(e,t){const n=a(e).createShader(t>>>0);return y(n)?0:l(n)},e.wbg.__wbg_getShaderInfoLog_a7ca51b89a4dafab=function(e,t,n){const r=a(t).getShaderInfoLog(a(n));var i=y(r)?0:function(e,t,n){if(void 0===n){const n=v.encode(e),r=t(n.length,1)>>>0;return b().subarray(r,r+n.length).set(n),d=n.length,r}let r=e.length,o=t(r,1)>>>0;const i=b();let a=0;for(;a<r;a++){const t=e.charCodeAt(a);if(t>127)break;i[o+a]=t}if(a!==r){0!==a&&(e=e.slice(a)),o=n(o,r,r=a+3*e.length,1)>>>0;const t=b().subarray(o+a,o+r);a+=S(e,t).written,o=n(o,r,a,1)>>>0}return d=a,o}(r,o.__wbindgen_malloc,o.__wbindgen_realloc),c=d;p().setInt32(e+4,c,!0),p().setInt32(e+0,i,!0)},e.wbg.__wbg_getShaderParameter_806970126d526c29=function(e,t,n){return l(a(e).getShaderParameter(a(t),n>>>0))},e.wbg.__wbg_linkProgram_56a5d97f63b1f56d=function(e,t){a(e).linkProgram(a(t))},e.wbg.__wbg_shaderSource_b92b2b5c29126344=function(e,t,n,r){a(e).shaderSource(a(t),f(n,r))},e.wbg.__wbg_useProgram_001c6b9208b683d3=function(e,t){a(e).useProgram(a(t))},e.wbg.__wbg_instanceof_Window_5012736c80a01584=function(e){let t;try{t=a(e)instanceof Window}catch(e){t=!1}return t},e.wbg.__wbg_setwidth_c20f1f8fcd5d93b4=function(e,t){a(e).width=t>>>0},e.wbg.__wbg_setheight_a5e39c9d97429299=function(e,t){a(e).height=t>>>0},e.wbg.__wbg_getContext_bd2ece8a59fd4732=function(){return T((function(e,t,n){const r=a(e).getContext(f(t,n));return y(r)?0:l(r)}),arguments)},e.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(e,t){return l(new Function(f(e,t)))},e.wbg.__wbg_call_1084a111329e68ce=function(){return T((function(e,t){return l(a(e).call(a(t)))}),arguments)},e.wbg.__wbg_self_3093d5d1f7bcb682=function(){return T((function(){return l(self.self)}),arguments)},e.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return T((function(){return l(window.window)}),arguments)},e.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return T((function(){return l(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_e5a3fe56f8be9485=function(){return T((function(){return l(n.g.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(e){return void 0===a(e)},e.wbg.__wbindgen_object_clone_ref=function(e){return l(a(e))},e.wbg.__wbindgen_throw=function(e,t){throw new Error(f(e,t))},e.wbg.__wbindgen_module=function(){return l(C.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return l(o.memory)},e.wbg.__wbg_startWorkers_d587c7d659590d3c=function(e,t,n){return l((0,r.G)(_(e),_(t),R.__wrap(n)))},e}function O(e,t){e.wbg.memory=t||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function E(e,t,n){if(o=e.exports,C.__wbindgen_wasm_module=t,h=null,g=null,u=null,void 0!==n&&("number"!=typeof n||0===n||n%65536!=0))throw"invalid stack size";return o.__wbindgen_start(n),o}function I(e,t){if(void 0!==o)return o;let n;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module:e,memory:t,thread_stack_size:n}=e):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const r=k();return O(r,t),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),E(new WebAssembly.Instance(e,r),e,n)}async function C(e,t){if(void 0!==o)return o;let r;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e,memory:t,thread_stack_size:r}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(n(279),n.b));const i=k();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),O(i,t);const{instance:a,module:c}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,i);return E(a,c,r)}const M=C},673:(e,t,n)=>{let r;async function o(e,t,o){if(0===o.numThreads())throw new Error("num_threads must be > 0.");const i={module:e,memory:t,receiver:o.receiver()};r=await Promise.all(Array.from({length:o.numThreads()},(async()=>{const e=new Worker(new URL(n.p+n.u(61),n.b),{type:void 0});return e.postMessage(i),await new Promise((t=>e.addEventListener("message",t,{once:!0}))),e}))),o.build()}n.d(t,{G:()=>o})},279:(e,t,n)=>{e.exports=n.p+"d198b6c13b5ec97deac9.wasm"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.u=e=>e+".index.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href;var r=n(763);!async function(){console.log("hello");const e=await Promise.resolve().then(n.bind(n,763));await e.default(),await e.initThreadPool(12);const t=document.getElementById("canvas");new r.Simulation(t)}()})();