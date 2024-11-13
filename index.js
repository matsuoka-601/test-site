(()=>{"use strict";var e={763:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M,initSync:()=>C,initThreadPool:()=>j,start:()=>P,wbg_rayon_PoolBuilder:()=>R,wbg_rayon_start_worker:()=>E});var r=t(673);let o;const i=new Array(128).fill(void 0);function _(e){return i[e]}i.push(void 0,null,!0,!1);let a=i.length;function c(e){const n=_(e);return function(e){e<132||(i[e]=a,a=e)}(e),n}const b="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&b.decode();let u=null;function f(){return null!==u&&u.buffer===o.memory.buffer||(u=new Uint8Array(o.memory.buffer)),u}function s(e,n){return e>>>=0,b.decode(f().slice(e,e+n))}function g(e){a===i.length&&i.push(i.length+1);const n=a;return a=i[n],i[n]=e,n}function w(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return`${e}`;if("string"==n)return`"${e}"`;if("symbol"==n){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==n){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const n=e.length;let t="[";n>0&&(t+=w(e[0]));for(let r=1;r<n;r++)t+=", "+w(e[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(t.length>1))return toString.call(e);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}let d=0;const l="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},m=function(e,n){const t=l.encode(e);return n.set(t),{read:e.length,written:t.length}};function y(e,n,t){if(void 0===t){const t=l.encode(e),r=n(t.length,1)>>>0;return f().subarray(r,r+t.length).set(t),d=t.length,r}let r=e.length,o=n(r,1)>>>0;const i=f();let _=0;for(;_<r;_++){const n=e.charCodeAt(_);if(n>127)break;i[o+_]=n}if(_!==r){0!==_&&(e=e.slice(_)),o=t(o,r,r=_+3*e.length,1)>>>0;const n=f().subarray(o+_,o+r);_+=m(e,n).written,o=t(o,r,_,1)>>>0}return d=_,o}let p=null;function h(){return null!==p&&p.buffer===o.memory.buffer||(p=new DataView(o.memory.buffer)),p}const v="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>{o.__wbindgen_export_3.get(e.dtor)(e.a,e.b)}));function A(e,n,t,r){const i={a:e,b:n,cnt:1,dtor:t},_=(...e)=>{i.cnt++;const n=i.a;i.a=0;try{return r(n,i.b,...e)}finally{0==--i.cnt?(o.__wbindgen_export_3.get(i.dtor)(n,i.b),v.unregister(i)):i.a=n}};return _.original=i,v.register(_,i,i),_}function S(e,n){o._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9d7d1265bd07be16(e,n)}function x(e,n,t){o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h95f98ebac4e9914d(e,n,g(t))}function P(){try{const n=o.__wbindgen_add_to_stack_pointer(-16);o.start(n);var e=h().getInt32(n+0,!0);if(h().getInt32(n+4,!0))throw c(e)}finally{o.__wbindgen_add_to_stack_pointer(16)}}function T(e){return null==e}function O(e,n){try{return e.apply(this,n)}catch(e){o.__wbindgen_exn_store(g(e))}}function j(e){return c(o.initThreadPool(e))}function E(e){o.wbg_rayon_start_worker(e)}const W="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>o.__wbg_wbg_rayon_poolbuilder_free(e>>>0,1)));class R{static __wrap(e){e>>>=0;const n=Object.create(R.prototype);return n.__wbg_ptr=e,W.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,W.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e,0)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){o.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function k(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(e){c(e)},e.wbg.__wbindgen_string_new=function(e,n){return g(s(e,n))},e.wbg.__wbindgen_boolean_get=function(e){const n=_(e);return"boolean"==typeof n?n?1:0:2},e.wbg.__wbindgen_cb_drop=function(e){const n=c(e).original;return 1==n.cnt--&&(n.a=0,!0)},e.wbg.__wbg_instanceof_WebGl2RenderingContext_62ccef896d9204fa=function(e){let n;try{n=_(e)instanceof WebGL2RenderingContext}catch(e){n=!1}return n},e.wbg.__wbg_bufferData_94ce174a81b32961=function(e,n,t,r){_(e).bufferData(n>>>0,_(t),r>>>0)},e.wbg.__wbg_attachShader_396d529f1d7c9abc=function(e,n,t){_(e).attachShader(_(n),_(t))},e.wbg.__wbg_bindBuffer_d6b05e0a99a752d4=function(e,n,t){_(e).bindBuffer(n>>>0,_(t))},e.wbg.__wbg_clear_7a2a7ca897047e8d=function(e,n){_(e).clear(n>>>0)},e.wbg.__wbg_clearColor_837d30f5bf4f982b=function(e,n,t,r,o){_(e).clearColor(n,t,r,o)},e.wbg.__wbg_compileShader_77ef81728b1c03f6=function(e,n){_(e).compileShader(_(n))},e.wbg.__wbg_createBuffer_7b18852edffb3ab4=function(e){const n=_(e).createBuffer();return T(n)?0:g(n)},e.wbg.__wbg_createProgram_73611dc7a72c4ee2=function(e){const n=_(e).createProgram();return T(n)?0:g(n)},e.wbg.__wbg_createShader_f10ffabbfd8e2c8c=function(e,n){const t=_(e).createShader(n>>>0);return T(t)?0:g(t)},e.wbg.__wbg_drawArrays_7a8f5031b1fe80ff=function(e,n,t,r){_(e).drawArrays(n>>>0,t,r)},e.wbg.__wbg_enableVertexAttribArray_06043f51b716ed9d=function(e,n){_(e).enableVertexAttribArray(n>>>0)},e.wbg.__wbg_getAttribLocation_df9c48b51cdad438=function(e,n,t,r){return _(e).getAttribLocation(_(n),s(t,r))},e.wbg.__wbg_getShaderInfoLog_a7ca51b89a4dafab=function(e,n,t){const r=_(n).getShaderInfoLog(_(t));var i=T(r)?0:y(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=d;h().setInt32(e+4,a,!0),h().setInt32(e+0,i,!0)},e.wbg.__wbg_getShaderParameter_806970126d526c29=function(e,n,t){return g(_(e).getShaderParameter(_(n),t>>>0))},e.wbg.__wbg_getUniformLocation_6a59ad54df3bba8e=function(e,n,t,r){const o=_(e).getUniformLocation(_(n),s(t,r));return T(o)?0:g(o)},e.wbg.__wbg_linkProgram_56a5d97f63b1f56d=function(e,n){_(e).linkProgram(_(n))},e.wbg.__wbg_shaderSource_b92b2b5c29126344=function(e,n,t,r){_(e).shaderSource(_(n),s(t,r))},e.wbg.__wbg_uniform2f_3cd8a4d77e78c85d=function(e,n,t,r){_(e).uniform2f(_(n),t,r)},e.wbg.__wbg_useProgram_001c6b9208b683d3=function(e,n){_(e).useProgram(_(n))},e.wbg.__wbg_vertexAttribPointer_b435a034ff758637=function(e,n,t,r,o,i,a){_(e).vertexAttribPointer(n>>>0,t,r>>>0,0!==o,i,a)},e.wbg.__wbg_instanceof_Window_5012736c80a01584=function(e){let n;try{n=_(e)instanceof Window}catch(e){n=!1}return n},e.wbg.__wbg_document_8554450897a855b9=function(e){const n=_(e).document;return T(n)?0:g(n)},e.wbg.__wbg_requestAnimationFrame_b4b782250b9c2c88=function(){return O((function(e,n){return _(e).requestAnimationFrame(_(n))}),arguments)},e.wbg.__wbg_getElementById_f56c8e6a15a6926d=function(e,n,t){const r=_(e).getElementById(s(n,t));return T(r)?0:g(r)},e.wbg.__wbg_instanceof_MouseEvent_465e429c6fab5cee=function(e){let n;try{n=_(e)instanceof MouseEvent}catch(e){n=!1}return n},e.wbg.__wbg_offsetX_e7047852d4b4b482=function(e){return _(e).offsetX},e.wbg.__wbg_offsetY_76fc66e0e449645e=function(e){return _(e).offsetY},e.wbg.__wbg_addEventListener_e167f012cbedfa4e=function(){return O((function(e,n,t,r){_(e).addEventListener(s(n,t),_(r))}),arguments)},e.wbg.__wbg_instanceof_HtmlCanvasElement_1a96a01603ec2d8b=function(e){let n;try{n=_(e)instanceof HTMLCanvasElement}catch(e){n=!1}return n},e.wbg.__wbg_width_53a5bd0268e99485=function(e){return _(e).width},e.wbg.__wbg_setwidth_e371a8d6b16ebe84=function(e,n){_(e).width=n>>>0},e.wbg.__wbg_height_6fb32e51e54037ae=function(e){return _(e).height},e.wbg.__wbg_setheight_ba99ad2df4295e89=function(e,n){_(e).height=n>>>0},e.wbg.__wbg_getContext_69ec873410cbba3c=function(){return O((function(e,n,t){const r=_(e).getContext(s(n,t));return T(r)?0:g(r)}),arguments)},e.wbg.__wbg_performance_a1b8bde2ee512264=function(e){return g(_(e).performance)},e.wbg.__wbindgen_is_undefined=function(e){return void 0===_(e)},e.wbg.__wbg_now_abd80e969af37148=function(e){return _(e).now()},e.wbg.__wbg_timeOrigin_5c8b9e35719de799=function(e){return _(e).timeOrigin},e.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(e,n){return g(new Function(s(e,n)))},e.wbg.__wbg_call_1084a111329e68ce=function(){return O((function(e,n){return g(_(e).call(_(n)))}),arguments)},e.wbg.__wbg_self_3093d5d1f7bcb682=function(){return O((function(){return g(self.self)}),arguments)},e.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return O((function(){return g(window.window)}),arguments)},e.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return O((function(){return g(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_e5a3fe56f8be9485=function(){return O((function(){return g(t.g.global)}),arguments)},e.wbg.__wbg_buffer_b7b08af79b0b0974=function(e){return g(_(e).buffer)},e.wbg.__wbg_newwithbyteoffsetandlength_a69c63d7671a5dbf=function(e,n,t){return g(new Float32Array(_(e),n>>>0,t>>>0))},e.wbg.__wbindgen_object_clone_ref=function(e){return g(_(e))},e.wbg.__wbindgen_debug_string=function(e,n){const t=y(w(_(n)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=d;h().setInt32(e+4,r,!0),h().setInt32(e+0,t,!0)},e.wbg.__wbindgen_throw=function(e,n){throw new Error(s(e,n))},e.wbg.__wbindgen_module=function(){return g(F.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return g(o.memory)},e.wbg.__wbg_startWorkers_d587c7d659590d3c=function(e,n,t){return g((0,r.G)(c(e),c(n),R.__wrap(t)))},e.wbg.__wbindgen_closure_wrapper153=function(e,n,t){return g(A(e,n,21,S))},e.wbg.__wbindgen_closure_wrapper155=function(e,n,t){return g(A(e,n,21,x))},e}function I(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function L(e,n,t){if(o=e.exports,F.__wbindgen_wasm_module=n,p=null,u=null,void 0!==t&&("number"!=typeof t||0===t||t%65536!=0))throw"invalid stack size";return o.__wbindgen_start(t),o}function C(e,n){if(void 0!==o)return o;let t;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module:e,memory:n,thread_stack_size:t}=e):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const r=k();return I(r,n),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),L(new WebAssembly.Instance(e,r),e,t)}async function F(e,n){if(void 0!==o)return o;let r;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e,memory:n,thread_stack_size:r}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(t(279),t.b));const i=k();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),I(i,n);const{instance:_,module:a}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,i);return L(_,a,r)}const M=F},673:(e,n,t)=>{let r;async function o(e,n,o){if(0===o.numThreads())throw new Error("num_threads must be > 0.");const i={module:e,memory:n,receiver:o.receiver()};r=await Promise.all(Array.from({length:o.numThreads()},(async()=>{const e=new Worker(new URL(t.p+t.u(61),t.b),{type:void 0});return e.postMessage(i),await new Promise((n=>e.addEventListener("message",n,{once:!0}))),e}))),o.build()}t.d(n,{G:()=>o})},279:(e,n,t)=>{e.exports=t.p+"f35225311e566719a51b.wasm"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.u=e=>e+".index.js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;var r=t(763);!async function(){const e=await Promise.resolve().then(t.bind(t,763));await e.default(),await e.initThreadPool(12),(0,r.start)()}()})();