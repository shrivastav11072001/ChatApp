(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},9428:e=>{"use strict";e.exports=require("buffer")},9646:e=>{"use strict";e.exports=require("child_process")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},2654:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>u});var s=r(260),n=r(8203),a=r(5155),l=r.n(a),o=r(7292),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9337)),"D:\\Techstack\\chatApp\\frontend\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2804)),"D:\\Techstack\\chatApp\\frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Techstack\\chatApp\\frontend\\src\\app\\page.js"],c={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},9243:(e,t,r)=>{Promise.resolve().then(r.bind(r,9337))},9859:(e,t,r)=>{Promise.resolve().then(r.bind(r,9125))},5670:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var s=r(6256),n=r.n(s)},6256:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let s=r(5488)._(r(568));function n(e,t){var r;let n={};"function"==typeof e&&(n.loader=e);let a={...n,...t};return(0,s.default)({...a,modules:null==(r=a.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3400:(e,t)=>{"use strict";function r(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return r}})},5771:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=r(4639);function n(e){let{reason:t,children:r}=e;throw new s.BailoutToCSRError(t)}},568:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let s=r(5512),n=r(8009),a=r(5771),l=r(6054);function o(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},r=(0,n.lazy)(()=>t.loader().then(o)),u=t.loading;function d(e){let o=u?(0,s.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,d=i?n.Suspense:n.Fragment,c=t.ssr?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.PreloadChunks,{moduleIds:t.modules}),(0,s.jsx)(r,{...e})]}):(0,s.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(r,{...e})});return(0,s.jsx)(d,{...i?{fallback:o}:{},children:c})}return d.displayName="LoadableComponent",d}},6054:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return o}});let s=r(5512),n=r(5740),a=r(9294),l=r(3400);function o(e){let{moduleIds:t}=e,r=a.workAsyncStorage.getStore();if(void 0===r)return null;let o=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;o.push(...t)}}return 0===o.length?null:(0,s.jsx)(s.Fragment,{children:o.map(e=>{let t=r.assetPrefix+"/_next/"+(0,l.encodeURIPath)(e);return e.endsWith(".css")?(0,s.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,n.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},1266:(e,t,r)=>{"use strict";r(5512);var s=r(8009);let n=e=>{let t;let r=new Set,s=(e,s)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=s?s:"object"!=typeof n||null===n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,a={setState:s,getState:n,getInitialState:()=>l,subscribe:e=>(r.add(e),()=>r.delete(e))},l=t=e(s,n,a);return a},a=e=>e?n(e):n,l=e=>e,o=e=>{let t=a(e),r=e=>(function(e,t=l){let r=s.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return s.useDebugValue(r),r})(t,e);return Object.assign(r,t),r};(e=>e?o(e):o)(e=>({selectedConversation:null,setSelectedConversation:t=>e({selectedConversation:t}),messages:[],setMessages:t=>e({messages:t})})),r(2403),r(3047),r(3385),r(9148),(0,r(5670).default)(async()=>{},{loadableGenerated:{modules:["app\\components\\sidebar\\Conversations.jsx -> ./Conversation"]},ssr:!1}),r(9334)},3847:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var s=r(5512);r(8531);var n=r(9334),a=r(8009),l=r(3047),o=r(3385),i=r(2403);let u=()=>{let[e,t]=(0,a.useState)(!1),{dispatch:r}=(0,a.useContext)(o.c),s=(0,n.useRouter)();return{loading:e,login:async({username:e,password:n})=>{if(function({username:e,password:t}){return!!e&&!!t||(i.Ay.error("Please fill in all the fields"),!1)}({username:e,password:n})){t(!0);try{let t=await l.p.post("http://localhost:5000/auth/login",{username:e,password:n}),a=await t.data;if(r({type:"LOGIN",payload:a}),s.push("/"),a.error)throw Error(a.error)}catch(e){i.Ay.error(e.message)}finally{t(!1)}}}}},d=()=>{let[e,t]=(0,a.useState)(""),[r,l]=(0,a.useState)(""),{loading:o,login:i}=u();async function d(t){t.preventDefault(),await i({username:e,password:r})}let c=(0,n.useRouter)();return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center min-w-96 mx-auto",children:(0,s.jsxs)("div",{className:"h-full w-full p-6 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100",children:[(0,s.jsxs)("h1",{className:"text-3xl font-semibold text-center text-gray-300",children:["Login",(0,s.jsx)("span",{className:"text-blue-400",children:" ChatApp"})]}),(0,s.jsxs)("form",{onSubmit:d,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"label p-2",children:(0,s.jsx)("span",{className:"text-white label-text",children:"Username"})}),(0,s.jsx)("input",{type:"text",placeholder:"Enter Username",className:"w-full input input-bordered h-10",value:e,onChange:e=>t(e.target.value)})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"label p-2",children:(0,s.jsx)("span",{className:"text-white label-text",children:"Password"})}),(0,s.jsx)("input",{type:"password",placeholder:"Enter Password",className:"w-full input input-bordered h-10",value:r,onChange:e=>l(e.target.value)})]}),(0,s.jsxs)("a",{className:"text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white",onClick:()=>{c.push("/signup")},children:["Don't"," have an account?"]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"btn btn-block btn-sm mt-2",disabled:o,children:o?(0,s.jsx)("span",{className:"loading loading-spinner"}):"Login"})})]})]})})}},9125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(5512),n=r(5670);r(1266),r(3622);var a=r(8009),l=r(3385),o=r(3847);let i=(0,n.default)(async()=>{},{loadableGenerated:{modules:["app\\page.js -> ./home/Home"]},ssr:!1});function u(){let{AuthData:e}=(0,a.useContext)(l.c);return(0,s.jsx)("div",{className:"p-4 h-screen flex items-center justify-center",children:e?(0,s.jsx)(i,{}):(0,s.jsx)(o.A,{})})}},9337:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Techstack\\\\chatApp\\\\frontend\\\\src\\\\app\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Techstack\\chatApp\\frontend\\src\\app\\page.js","default")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,144,199,531,669],()=>r(2654));module.exports=s})();