(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{7144:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,4735,23)),Promise.resolve().then(s.t.bind(s,9534,23)),Promise.resolve().then(s.bind(s,5037)),Promise.resolve().then(s.bind(s,7601)),Promise.resolve().then(s.bind(s,7668)),Promise.resolve().then(s.t.bind(s,347,23))},7601:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>c,c:()=>l});var r=s(5155),a=s(2115);let o={};o=window?JSON.parse(localStorage.getItem("chat-user")):{};let l=(0,a.createContext)();function n(e,t){switch(t.type){case"SIGN_UP":let s={...t.payload};return localStorage.setItem("chat-user",JSON.stringify(s)),s;case"LOGOUT":return localStorage.removeItem("chat-user"),{};case"LOGIN":let r={...t.payload};return localStorage.setItem("chat-user",JSON.stringify(r)),r;default:return e}}let c=e=>{let{children:t}=e,[s,c]=(0,a.useReducer)(n,o);return(0,r.jsx)(l.Provider,{value:{AuthData:s,dispatch:c},children:t})}},7668:(e,t,s)=>{"use strict";s.d(t,{SocketContextProvider:()=>u,d:()=>c});var r=s(5155),a=s(2115),o=s(7601),l=s(1319);let n={socket:null,onlineUser:[]},c=(0,a.createContext)();function i(e,t){switch(t.type){case"SET_SOCKET":return{...e,socket:t.payload};case"SET_ONLINE_USERS":return{...e,onlineUsers:t.payload};case"CLEAR_SOCKET":return{...e,socket:null,onlineUsers:[]};default:return e}}let u=e=>{let{children:t}=e,[s,u]=(0,a.useReducer)(i,n),{AuthData:d}=(0,a.useContext)(o.c);return(0,a.useEffect)(()=>{if(d){let e=(0,l.io)("http://localhost:5000",{query:{userId:d._id}});return u({type:"SET_SOCKET",payload:e}),e.on("connect",()=>{console.log("Connected:",e.id)}),e.on("getOnlineUsers",e=>{u({type:"SET_ONLINE_USERS",payload:e})}),()=>{e.close(),u({type:"CLEAR_SOCKET"})}}s.socket&&(s.socket.close(),u({type:"CLEAR_SOCKET"}))},[d]),(0,r.jsx)(c.Provider,{value:{socket:s.socket,onlineUsers:s.onlineUsers},children:t})}},347:()=>{},9534:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},4735:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},e=>{var t=t=>e(e.s=t);e.O(0,[953,37,319,441,517,358],()=>t(7144)),_N_E=e.O()}]);