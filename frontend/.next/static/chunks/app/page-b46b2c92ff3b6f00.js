(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3418:(e,t,s)=>{Promise.resolve().then(s.bind(s,9319))},5299:(e,t,s)=>{"use strict";s.d(t,{n:()=>l,p:()=>a.A});var a=s(2651);let l=a.A.create({baseURL:"http://localhost:5000"})},7601:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>c,c:()=>n});var a=s(5155),l=s(2115);let r={};r=window?JSON.parse(localStorage.getItem("chat-user")):{};let n=(0,l.createContext)();function o(e,t){switch(t.type){case"SIGN_UP":let s={...t.payload};return localStorage.setItem("chat-user",JSON.stringify(s)),s;case"LOGOUT":return localStorage.removeItem("chat-user"),{};case"LOGIN":let a={...t.payload};return localStorage.setItem("chat-user",JSON.stringify(a)),a;default:return e}}let c=e=>{let{children:t}=e,[s,c]=(0,l.useReducer)(o,r);return(0,a.jsx)(n.Provider,{value:{AuthData:s,dispatch:c},children:t})}},7668:(e,t,s)=>{"use strict";s.d(t,{SocketContextProvider:()=>d,d:()=>c});var a=s(5155),l=s(2115),r=s(7601),n=s(1319);let o={socket:null,onlineUser:[]},c=(0,l.createContext)();function i(e,t){switch(t.type){case"SET_SOCKET":return{...e,socket:t.payload};case"SET_ONLINE_USERS":return{...e,onlineUsers:t.payload};case"CLEAR_SOCKET":return{...e,socket:null,onlineUsers:[]};default:return e}}let d=e=>{let{children:t}=e,[s,d]=(0,l.useReducer)(i,o),{AuthData:u}=(0,l.useContext)(r.c);return(0,l.useEffect)(()=>{if(u){let e=(0,n.io)("http://localhost:5000",{query:{userId:u._id}});return d({type:"SET_SOCKET",payload:e}),e.on("connect",()=>{console.log("Connected:",e.id)}),e.on("getOnlineUsers",e=>{d({type:"SET_ONLINE_USERS",payload:e})}),()=>{e.close(),d({type:"CLEAR_SOCKET"})}}s.socket&&(s.socket.close(),d({type:"CLEAR_SOCKET"}))},[u]),(0,a.jsx)(c.Provider,{value:{socket:s.socket,onlineUsers:s.onlineUsers},children:t})}},2440:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>I});var a=s(5155),l=s(2115),r=s(5044),n=s(5037),o=s(5299),c=s(7601);let i=function(){let{AuthData:e}=(0,l.useContext)(c.c),[t,s]=(0,l.useState)(!1),{setMessages:a,messages:i,selectedConversation:d,setSelectedConversation:u}=(0,r.A)();return{sendMessage:async t=>{s(!0);try{o.n.interceptors.request.use(t=>(e&&e.token?t.headers.Authorization="Bearer ".concat(e.token):console.log("Authorization token is missing"),t));let s=(await o.n.post("/messages/send/".concat(d._id),{message:t})).data;if(console.log(s),s.error)throw Error(s.error);a([...i,s])}catch(e){console.log(e),n.Ay.error(e.message)}finally{s(!1)}},loading:t}};var d=s(2734);let u=()=>{let[e,t]=(0,l.useState)(""),{loading:s,sendMessage:r}=i();async function n(s){s.preventDefault(),e&&(await r(e),t(""))}return(0,a.jsx)("form",{className:"px-4 my-3",onSubmit:n,children:(0,a.jsxs)("div",{className:"w-full relative",children:[(0,a.jsx)("input",{type:"text",className:"border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white",placeholder:"Send a message",value:e,onChange:e=>t(e.target.value)}),(0,a.jsx)("button",{type:"submit",className:"absolute inset-y-0 end-0 flex items-center pe-3",children:s?(0,a.jsx)("div",{className:"loading loading-spinner"}):(0,a.jsx)(d.B07,{className:"text-white"})})]})})};function h(e){return e.toString().padStart(2,"0")}let x=e=>{let{message:t}=e,{AuthData:s}=(0,l.useContext)(c.c),{selectedConversation:n}=(0,r.A)(),o=t.senderId===s._id,i=function(e){let t=new Date(e),s=h(t.getHours()),a=h(t.getMinutes());return"".concat(s,":").concat(a)}(t.createdAt),d=o?s.profilePic:null==n?void 0:n.profilePic,u=t.shouldShake?"shake":"";return(0,a.jsxs)("div",{className:"chat ".concat(o?"chat-end":"chat-start"),children:[(0,a.jsx)("div",{className:"chat-image avatar",children:(0,a.jsx)("div",{className:"w-10 rounded-full",children:(0,a.jsx)("img",{src:d,alt:"Tailwind CSS chat bubble component"})})}),(0,a.jsx)("div",{className:"chat-bubble text-white ".concat(o?"bg-blue-500":""," ").concat(u," pb-2"),children:t.message}),(0,a.jsx)("div",{className:"chat-footer text-xs text-white flex gap-1 items-center ",children:i})]})},m=function(){let[e,t]=(0,l.useState)(!1),{messages:s,setMessages:a,selectedConversation:i}=(0,r.A)(),{AuthData:d}=(0,l.useContext)(c.c);return(0,l.useEffect)(()=>{let e=async()=>{t(!0);try{o.n.interceptors.request.use(e=>(d&&d.token?e.headers.Authorization="Bearer ".concat(d.token):console.log("Authorization token is missing"),e));let e=(await o.n.get("/messages/".concat(i._id))).data;if(e.error)throw Error(e.error);a(e)}catch(e){n.Ay.error(e.message)}finally{t(!1)}};(null==i?void 0:i._id)&&e()},[null==i?void 0:i._id,a]),{loading:e,messages:s}},p=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,a.jsx)("div",{className:"skeleton w-10 h-10 rounded-full shrink-0"}),(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("div",{className:"skeleton h-4 w-40"}),(0,a.jsx)("div",{className:"skeleton h-4 w-40"})]})]}),(0,a.jsxs)("div",{className:"flex gap-3 items-center justify-end",children:[(0,a.jsx)("div",{className:"flex flex-col gap-1",children:(0,a.jsx)("div",{className:"skeleton h-4 w-40"})}),(0,a.jsx)("div",{className:"skeleton w-10 h-10 rounded-full shrink-0"})]})]});var f=s(7668);let g=()=>{let{socket:e}=(0,l.useContext)(f.d),{messages:t,setMessages:s}=(0,r.A)();(0,l.useEffect)(()=>(null==e||e.on("newMessage",e=>{e.shouldShake=!0,s([...t,e])}),()=>null==e?void 0:e.off("newMessage")),[e,t,s])},j=()=>{let{loading:e,messages:t}=m();g();let s=(0,l.useRef)();return(0,l.useEffect)(()=>{setTimeout(()=>{var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},100)},[t]),(0,a.jsxs)("div",{className:"px-4 flex-1 overflow-auto",children:[!e&&t.length>0&&t.map(e=>(0,a.jsx)("div",{ref:s,children:(0,a.jsx)(x,{message:e})},e._id)),e&&[void 0,void 0,void 0].map((e,t)=>(0,a.jsx)(p,{},t)),!e&&0===t.length&&(0,a.jsx)("p",{className:"text-center",children:"Send a message to start the conversation"})]})};var b=s(2578);let v=()=>{let{selectedConversation:e,setSelectedConversation:t}=(0,r.A)();return(0,l.useEffect)(()=>{t(null)},[]),(0,a.jsx)("div",{className:"md:min-w-[450px] flex flex-col",children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"bg-slate-500 px-4 py-2 mb-2",children:[(0,a.jsx)("span",{className:"label-text",children:"To:"})," ",(0,a.jsx)("span",{className:"text-white font-bold",children:e.fullName})]}),(0,a.jsx)(j,{}),(0,a.jsx)(u,{})]}):(0,a.jsx)(N,{})})},N=()=>{let{AuthData:e}=(0,l.useContext)(c.c);return(0,a.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:(0,a.jsxs)("div",{className:"px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2",children:[(0,a.jsxs)("p",{children:["Welcome\uD83D\uDC4B ",e.fullName]}),(0,a.jsx)("p",{children:"Select a chat to start messaging"}),(0,a.jsx)(b.gml,{className:"text-3xl md:text-6xl text-center"})]})})},w=()=>{let{AuthData:e}=(0,l.useContext)(c.c),[t,s]=(0,l.useState)(!1),[a,r]=(0,l.useState)([]);return(0,l.useEffect)(()=>{(async()=>{s(!0),console.log(o.n);try{o.n.interceptors.request.use(t=>(e&&e.token?t.headers.Authorization="Bearer ".concat(e.token):console.log("Authorization token is missing"),t));let t=(await o.n.get("/users")).data;if(r(t),t.error)throw Error(t.error);r(t)}catch(e){console.log(e),n.Ay.error(e.message)}finally{s(!1)}})()},[]),{loading:t,conversations:a}};var y=s(4367);let k=function(){let[e,t]=(0,l.useState)(""),{setSelectedConversation:s}=(0,r.A)(),{conversations:o}=w();return(0,a.jsxs)("form",{onSubmit:function(a){if(a.preventDefault(),!e)return;if(e.length<3)return n.Ay.error("Search term must be at least 3 characters long");let l=o.find(t=>t.fullName.toLowerCase().includes(e.toLowerCase()));l?(s(l),t("")):n.Ay.error("No such user found")},className:"flex mt-2 ms-2 item-center gap-2",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search...",className:"input input-bordered rounded-full",value:e,onChange:e=>t(e.target.value)}),(0,a.jsx)("button",{type:"submit",className:"btn btn-circle bg-sky-500 text-white",children:(0,a.jsx)(y.Mmj,{className:"w-6 h-6 outline-none"})})]})},S=["\uD83D\uDC4B","\uD83D\uDE0A","\uD83D\uDE02","\uD83D\uDE18","\uD83D\uDE12","\uD83E\uDD26‍♂️","\uD83E\uDD37‍♀️","✌️","\uD83D\uDC4D","\uD83D\uDE0E","\uD83D\uDE09","\uD83E\uDD1E","\uD83E\uDD70","\uD83D\uDE05","\uD83E\uDD29","\uD83E\uDD14","\uD83D\uDE2E","\uD83D\uDE36‍\uD83C\uDF2B️","\uD83D\uDE24","\uD83E\uDD2F","\uD83E\uDD20","\uD83E\uDD78","\uD83D\uDE35‍\uD83D\uDCAB","\uD83E\uDD73","\uD83E\uDD15","\uD83E\uDD12","\uD83D\uDE42‍↕️","\uD83D\uDE42‍↔️","\uD83E\uDD25","\uD83D\uDC7D","\uD83D\uDE08","\uD83E\uDD81","\uD83E\uDDA7","\uD83D\uDC12","\uD83D\uDC2C","\uD83E\uDDAD","\uD83D\uDC33","\uD83D\uDC19","\uD83E\uDD91","\uD83E\uDEBC","\uD83D\uDC27","\uD83D\uDC0C","\uD83D\uDC69","\uD83D\uDC69‍\uD83E\uDDB1","\uD83D\uDD75️‍♂️","\uD83E\uDDD1‍\uD83C\uDF93","\uD83E\uDD77","\uD83E\uDDD1‍\uD83C\uDFEB","\uD83E\uDDD1‍\uD83C\uDFED"],C=()=>S[Math.floor(Math.random()*S.length)],A=(0,s(7711).default)(()=>s.e(127).then(s.bind(s,1127)),{loadableGenerated:{webpack:()=>[1127]},ssr:!1}),E=function(){let{loading:e,conversations:t}=w();return(0,a.jsxs)("div",{className:"py-2 h-2/3 flex flex-col overflow-auto",children:[t.map((e,s)=>(0,a.jsx)(A,{conversation:e,emoji:C(),lastIdx:s===t.length-1},e._id)),e?(0,a.jsx)("span",{className:"loading loading-spinner mx-auto"}):null]})};var _=s(6046);let P=()=>{let[e,t]=(0,l.useState)(!1),{dispatch:s}=(0,l.useContext)(c.c),a=(0,_.useRouter)();return{loading:e,logout:async()=>{t(!0);try{let e=(await o.p.post("http://localhost:5000/auth/logout")).data;if(e.error)throw Error(e.error);s({type:"LOGOUT"}),a.push("login")}catch(e){n.Ay.error(e.message)}finally{t(!1)}}}};var O=s(6084);let U=()=>{let{loading:e,logout:t}=P();return(0,a.jsx)("div",{className:"mt-3",children:e?(0,a.jsx)("span",{className:"loading loading-spinner"}):(0,a.jsx)(O.AMx,{className:"w-6 h-6 text-white cursor-pointer",onClick:t})})},R=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(k,{}),(0,a.jsx)("div",{className:"divider px-3"}),(0,a.jsx)(E,{}),(0,a.jsx)(U,{})]})},I=()=>(0,a.jsxs)("div",{className:"flex sm:h-[450px] md:h-[550px rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0]",children:[(0,a.jsx)(R,{}),(0,a.jsx)(v,{})]})},222:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(5155);s(8173);var l=s(6046),r=s(2115),n=s(5299),o=s(7601),c=s(5037);let i=()=>{let[e,t]=(0,r.useState)(!1),{dispatch:s}=(0,r.useContext)(o.c),a=(0,l.useRouter)();return{loading:e,login:async e=>{let{username:l,password:r}=e;if(function(e){let{username:t,password:s}=e;return!!t&&!!s||(c.Ay.error("Please fill in all the fields"),!1)}({username:l,password:r})){t(!0);try{let e=await n.p.post("http://localhost:5000/auth/login",{username:l,password:r}),t=await e.data;if(s({type:"LOGIN",payload:t}),a.push("/"),t.error)throw Error(t.error)}catch(e){c.Ay.error(e.message)}finally{t(!1)}}}}},d=()=>{let[e,t]=(0,r.useState)(""),[s,n]=(0,r.useState)(""),{loading:o,login:c}=i();async function d(t){t.preventDefault(),await c({username:e,password:s})}let u=(0,l.useRouter)();return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center min-w-96 mx-auto",children:(0,a.jsxs)("div",{className:"h-full w-full p-6 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100",children:[(0,a.jsxs)("h1",{className:"text-3xl font-semibold text-center text-gray-300",children:["Login",(0,a.jsx)("span",{className:"text-blue-400",children:" ChatApp"})]}),(0,a.jsxs)("form",{onSubmit:d,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"label p-2",children:(0,a.jsx)("span",{className:"text-white label-text",children:"Username"})}),(0,a.jsx)("input",{type:"text",placeholder:"Enter Username",className:"w-full input input-bordered h-10",value:e,onChange:e=>t(e.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"label p-2",children:(0,a.jsx)("span",{className:"text-white label-text",children:"Password"})}),(0,a.jsx)("input",{type:"password",placeholder:"Enter Password",className:"w-full input input-bordered h-10",value:s,onChange:e=>n(e.target.value)})]}),(0,a.jsxs)("a",{className:"text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white",onClick:()=>{u.push("/signup")},children:["Don't"," have an account?"]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"btn btn-block btn-sm mt-2",disabled:o,children:o?(0,a.jsx)("span",{className:"loading loading-spinner"}):"Login"})})]})]})})}},9319:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(5155),l=s(7711);s(2440),s(9440);var r=s(2115),n=s(7601),o=s(222);let c=(0,l.default)(()=>Promise.resolve().then(s.bind(s,2440)),{loadableGenerated:{webpack:()=>[2440]},ssr:!1});function i(){let{AuthData:e}=(0,r.useContext)(n.c);return(0,a.jsx)("div",{className:"p-4 h-screen flex items-center justify-center",children:e?(0,a.jsx)(c,{}):(0,a.jsx)(o.A,{})})}},9440:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var a=s(5155),l=s(2115);let r=function(e){let{onCheckboxChange:t,selectedGender:s}=e;return(0,a.jsxs)("div",{className:"flex mt-2",children:[(0,a.jsx)("div",{className:"form-control",children:(0,a.jsxs)("label",{className:"label gap-2 cursor-pointer ".concat("male"===s?"selected":""),children:[(0,a.jsx)("span",{className:"label-text text-white",children:"Male"}),(0,a.jsx)("input",{type:"checkbox",className:"checkbox border-slate-900",checked:"male"===s,onChange:()=>{t("male")}})]})}),(0,a.jsx)("div",{className:"form-control",children:(0,a.jsxs)("label",{className:"label gap-2 cursor-pointer ".concat("male"===s?"selected":""),children:[(0,a.jsx)("span",{className:"label-text text-white",children:"Female"}),(0,a.jsx)("input",{type:"checkbox",className:"checkbox border-slate-900",checked:"female"===s,onChange:()=>{t("female")}})]})})]})};var n=s(6046),o=s(5037),c=s(5299),i=s(7601);let d=()=>{let[e,t]=(0,l.useState)(!1),{dispatch:s}=(0,l.useContext)(i.c);return{loading:e,signup:async e=>{let{fullName:a,username:l,password:r,confirmPassword:n,gender:i}=e;if(function(e){let{fullName:t,username:s,password:a,confirmPassword:l,gender:r}=e;return t&&s&&a&&l&&r?a!==l?(o.Ay.error("Passwords do not match"),!1):!(a.length<6)||(o.Ay.error("Password should be at least 6 characters long"),!1):(o.Ay.error("Please fill in all the fields"),!1)}({fullName:a,username:l,password:r,confirmPassword:n,gender:i})){t(!0);try{let e=await c.p.post("http://localhost:5000/auth/signup",{fullName:a,username:l,password:r,confirmPassword:n,gender:i}),t=await e.data;if(t.error)throw Error(t.error);s({type:"SIGN_UP",payload:t})}catch(e){o.Ay.error(e.message)}finally{t(!1)}}}}},u=function(){let e=(0,n.useRouter)(),[t,s]=(0,l.useState)({fullName:"",username:"",password:"",confirmPassword:"",gender:""}),{loading:o,signup:c}=d();async function i(e){e.preventDefault(),await c(t)}return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center min-w-96 mx-auto",children:(0,a.jsxs)("div",{className:"w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0",children:[(0,a.jsxs)("h1",{className:"text-3xl font-semibold text-center text-gray-300",children:["SingUp",(0,a.jsx)("span",{className:"text-blue-400",children:" ChatApp"})]}),(0,a.jsxs)("form",{onSubmit:i,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"label p-2",children:(0,a.jsx)("span",{className:"text-white label-text",children:"Full Name"})}),(0,a.jsx)("input",{type:"text",placeholder:"Rahul Shrivastav",className:"w-full input input-bordered h-10",value:t.fullName,onChange:e=>s({...t,fullName:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"label p-2",children:(0,a.jsx)("span",{className:"text-white label-text",children:"UserName"})}),(0,a.jsx)("input",{type:"text",placeholder:"RahulShrivastav",className:"w-full input input-bordered h-10",value:t.username,onChange:e=>s({...t,username:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"label p-2",children:(0,a.jsx)("span",{className:"text-white label-text",children:"Password"})}),(0,a.jsx)("input",{type:"password",placeholder:"Enter Password",className:"w-full input input-bordered h-10",value:t.password,onChange:e=>s({...t,password:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"label p-2",children:(0,a.jsx)("span",{className:"text-white label-text",children:" Confirm Password"})}),(0,a.jsx)("input",{type:"password",placeholder:"Confirm Password",className:"w-full input input-bordered h-10",value:t.confirmPassword,onChange:e=>s({...t,confirmPassword:e.target.value})})]}),(0,a.jsx)(r,{onCheckboxChange:function(e){s({...t,gender:e})},selectedGender:t.gender}),(0,a.jsxs)("a",{onClick:()=>{e.push("/login")},className:"text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white",children:["Already"," have an account?"]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"btn btn-block btn-sm mt-2",disabled:o,children:o?(0,a.jsx)("span",{className:"loading loading-spinner"}):"Sign Up"})})]})]})})}},5044:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(2208).v)(e=>({selectedConversation:null,setSelectedConversation:t=>e({selectedConversation:t}),messages:[],setMessages:t=>e({messages:t})}))}},e=>{var t=t=>e(e.s=t);e.O(0,[128,206,87,873,37,238,319,173,899,441,517,358],()=>t(3418)),_N_E=e.O()}]);