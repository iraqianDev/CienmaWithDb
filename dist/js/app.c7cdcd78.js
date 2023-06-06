(function(){"use strict";var e={1653:function(e,t,a){var o=a(9242),i=a(3396),l=a(4870),n=a(7139),r=a(4161);const s={class:"container mx-auto max-w-[95%]"},u={class:"py-5 block text-center md:text-right md:flex items-center gap-2"},c={class:"flex-1 relative"},d=["onKeyup"],v={key:0,class:"hideScroll md:w-1/2 absolute top-[110%] right-0 w-full bg-gray-800 rounded p-3 text-white overflow-y-scroll max-h-[80vh]"},h={key:0,class:""},p={key:1,class:"rounded grid gap-2"},m={class:"",key:"movie"},f={class:"aspect-square w-[80px] h-[80px] relative"},w=["src"],g={class:"text-left w-full"},b={class:"text-sm sm:text-base"},y={class:"w-[30ch] break-words truncate text-xs"};var x={__name:"App",setup(e){const t=a(3738),x=(0,l.iH)(!1),_=async()=>{let e=await r.Z.get("https://api.themoviedb.org/3/search/movie",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"},params:{query:N.value}}),t=await e.data.results;k.value=[...t]},I=t(_,300),N=(0,l.iH)(""),k=(0,l.iH)([]);return(e,t)=>{const a=(0,i.up)("router-link"),r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("nav",u,[(0,i.Wm)(a,{to:"/"},{default:(0,i.w5)((()=>[(0,i._)("h1",{class:"text-3xl font-bold text-red-600 flex-1 pb-2 mb-3 md:mb-0",onClick:t[0]||(t[0]=e=>x.value=!1)},"Cinema")])),_:1}),(0,i._)("div",c,[(0,i.wy)((0,i._)("input",{type:"text",class:"w-full md:w-1/2 p-2 outline-none rounded relative",onKeyup:(0,o.D2)(_,["enter"]),"onUpdate:modelValue":t[1]||(t[1]=e=>N.value=e),onInput:t[2]||(t[2]=(...e)=>(0,l.SU)(I)&&(0,l.SU)(I)(...e)),onClick:t[3]||(t[3]=e=>x.value=!0),placeholder:"Search for movie!"},null,40,d),[[o.nr,N.value]]),N.value.length>0&&x.value?((0,i.wg)(),(0,i.iD)("div",v,[0===k.value.length?((0,i.wg)(),(0,i.iD)("div",h," Loading... ")):((0,i.wg)(),(0,i.iD)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.value,(e=>((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(a,{to:{name:"Movie Details",params:{id:e.id}},onClick:t[4]||(t[4]=e=>x.value=!1),class:"hover:bg-gray-700 duration-300 grid colsSpan gap-4 items-center p-2 rounded grid-flow-col"},{default:(0,i.w5)((()=>[(0,i._)("div",f,[(0,i._)("img",{src:`https://image.tmdb.org/t/p/w500${e.backdrop_path}`,class:"w-full h-full rounded"},null,8,w)]),(0,i._)("div",g,[(0,i._)("h3",b,(0,n.zw)(e.title),1),(0,i._)("p",y,(0,n.zw)(e.overview),1)])])),_:2},1032,["to"])])))),128))]))])):(0,i.kq)("",!0)])]),(0,i._)("div",{onClick:t[5]||(t[5]=e=>x.value=!1)},[((0,i.wg)(),(0,i.j4)(r,{key:e.$route.fullPath}))])])}}};const _=x;var I=_,N=a(2483);const k=(0,i._)("div",null,null,-1),j={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden"},J={class:"relative overflow-hidden"},D=["src"],M={class:"text-white absolute bg-red-600 bottom-[-120%] duration-300 group-hover:bottom-0 left-0 style w-full p-4"},Y={class:"relative z-10"},z={class:"text-4xl font-bold mb-8"},G={class:"h-14 truncate text-lg"};var Z={__name:"HomeView",setup(e){(0,i.bv)((async()=>{let e=await r.Z.get("https://api.themoviedb.org/3/trending/movie/day",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"}}),a=await e.data.results;console.log(a),t.value=a}));const t=(0,l.iH)([]);return(e,a)=>{const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[k,(0,i._)("div",j,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.value,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"group"},[(0,i.Wm)(o,{to:{name:"Movie Details",params:{id:e.id}}},{default:(0,i.w5)((()=>[(0,i._)("div",J,[(0,i._)("img",{src:`https://image.tmdb.org/t/p/w500${e.backdrop_path}`,alt:"",class:"w-full h-full group-hover:blur-sm duration-200"},null,8,D),(0,i._)("div",M,[(0,i._)("div",Y,[(0,i._)("h3",z,(0,n.zw)(e.title),1),(0,i._)("p",G,(0,n.zw)(e.overview),1)])])])])),_:2},1032,["to"])])))),128))])],64)}}};const O=Z;var W=O;const U={class:"text-white text-center mt-5"},C=(0,i._)("h1",{class:"text-3xl font-bold"},"404 this page is not found",-1);function Q(e,t){const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",U,[C,(0,i._)("h2",null,[(0,i.Uk)(" Go back to the "),(0,i.Wm)(a,{to:{name:"home"},class:"text-blue-500"},{default:(0,i.w5)((()=>[(0,i.Uk)("Home Page")])),_:1})])])}var S=a(89);const H={},T=(0,S.Z)(H,[["render",Q]]);var E=T;const P={key:0,class:"text-center text-white"},B={key:1,class:"text-white md:flex gap-5"},A={class:"w-[50vh] max-w-[100%] mx-auto md:mx-0"},F=["src"],L={class:"flex-1"},V={class:"text-3xl font-bold my-5"},$={class:"mt-3 font-bold"},K=["href"];var q={__name:"Movieinfo",setup(e){const t=(0,N.yj)(),a=t.params.id;(0,i.bv)((async()=>{let e=await r.Z.get(`https://api.themoviedb.org/3/movie/${a}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"}});console.log(e.data),o.value=e.data}));const o=(0,l.iH)("");return(e,t)=>o.value.length>0?((0,i.wg)(),(0,i.iD)("div",P,"Loading...")):((0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("div",A,[(0,i._)("img",{src:`https://image.tmdb.org/t/p/w500${o.value.backdrop_path}`,alt:"",class:"w-full h-full rounded"},null,8,F)]),(0,i._)("div",L,[(0,i._)("h1",V,(0,n.zw)(o.value.title),1),(0,i._)("p",null,(0,n.zw)(o.value.overview),1),(0,i._)("p",$,[(0,i.Uk)("Want to See ? Check it out on "),(0,i._)("a",{href:o.value.homepage,target:"_blank",class:"text-blue-500"},"Website",8,K)])])]))}};const R=q;var X=R,ee={__name:"MovieDetails",setup(e){return(e,t)=>((0,i.wg)(),(0,i.j4)(X))}};const te=ee;var ae=te;const oe=[{path:"/",name:"Home page",component:W},{path:"/movie/:id",name:"Movie Details",component:ae},{path:"/home",redirect:"/"},{path:"/:catchAll(.*)",name:"Not Found",component:E}],ie=(0,N.p7)({history:(0,N.PO)("/"),routes:oe});ie.beforeEach(((e,t,a)=>{document.title=e.name,a()}));var le=ie;(0,o.ri)(I).use(le).mount("#app")}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,o,i,l){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],l=e[c][2];for(var r=!0,s=0;s<o.length;s++)(!1&l||n>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[s])}))?o.splice(s--,1):(r=!1,l<n&&(n=l));if(r){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,n=o[0],r=o[1],s=o[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(s)var c=s(a)}for(t&&t(o);u<n.length;u++)l=n[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},o=self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1653)}));o=a.O(o)})();
//# sourceMappingURL=app.c7cdcd78.js.map