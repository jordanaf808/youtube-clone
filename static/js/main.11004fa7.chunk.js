(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{45:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),c=t(15),r=t.n(c),o=(t(45),t(3)),s=t(9),d=t(0),l=a.a.createContext(),x=a.a.createContext();function h(){return Object(i.useContext)(l)}function p(){return Object(i.useContext)(x)}function b(e){var n=e.children,t=Object(i.useState)("75px"),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(i.useState)("closed"),h=Object(s.a)(o,2),p=h[0],b=h[1],m={expand:[c,r],mobile:[p,b]},j={toggleExpand:function(){r("250px"===c?"75px":"250px"),console.log("previous offset "+c)},toggleMobile:function(){b("closed"===p?"open":"closed"),console.log("mobile search is "+p)}};return Object(d.jsx)(l.Provider,{value:m,children:Object(d.jsx)(x.Provider,{value:j,children:n})})}var m,j=o.c.nav.withConfig({displayName:"Sidebarstyled__SidebarStyled",componentId:"sxrpm4-0"})(["display:flex;flex-direction:column;position:fixed;top:0;height:100%;background:var(--bg);z-index:99;width:75px;height:100%;margin-right:10px;.nav-open{transform:translateX(100%);}.sidebar__divider:before{content:'';background:var(--bg);height:32px;}.sidebar__divider:after{content:'';background:var(--button-bg);height:1px;width:100%;}@media only screen and (max-width:460px){display:flex;flex-direction:row;position:fixed;top:auto;bottom:0;left:0;height:65px;background:var(--bg);z-index:99;width:100%;}"]),g=Object(o.c)(j).withConfig({displayName:"Sidebarstyled__SidebarExpanded",componentId:"sxrpm4-1"})(["width:250px;left:-250px;z-index:999;background:var(--bg);transition:transform 250ms cubic-bezier(0.5,0,0.5,1);@media only screen and (max-width:460px){display:none;}"]),u=o.c.div.withConfig({displayName:"Sidebarstyled__SidebarShadow",componentId:"sxrpm4-2"})(["position:absolute;top:0;left:100%;width:",";height:100vh;z-index:900;background:var(--text);opacity:75%;transition:width 400ms ease-in-out;"],(function(e){return"75px"===e.expand?"0px":"100vw"})),f=o.c.div.withConfig({displayName:"SidebarHeaderstyled__SidebarHeader",componentId:"jlagv0-0"})(["display:flex;justify-content:flex start;align-items:center;height:65px;padding:16px 0 14px;.header__menu-btn{display:flex;justify-content:center;align-items:center;width:75px;cursor:pointer;svg{font-size:1.55rem;color:#606060;}}.header__logo{display:flex;align-items:center;justify-content:center;svg{color:red;font-size:2em;}.header__logo--title{color:black;}}@media only screen and (max-width:460px){display:none;}"]),O=t(17),w=o.c.div.withConfig({displayName:"SidebarMainstyled__SidebarMain",componentId:"sc-19w28or-0"})(["display:flex;flex-direction:column;justify-content:center;"," & > *{display:flex;flex-direction:",";align-items:center;justify-content:",";p{font-size:",";}svg{display:",";margin-right:",";margin-left:",";}}@media only screen and (max-width:460px){flex-direction:row;width:100%;justify-content:space-between;}"],(function(e){return!e.expanded&&Object(o.b)(m||(m=Object(O.a)(["\n      align-items: center;\n    "])))}),(function(e){return e.expanded?"row":"column"}),(function(e){return e.expanded?"flex-start":"center"}),(function(e){return e.expanded?"1rem":" 0.6rem"}),(function(e){return e.expanded?"block":"inline-block"}),(function(e){return e.expanded?"24px":""}),(function(e){return e.expanded?"10px":""})),y=o.c.div.withConfig({displayName:"SidebarBlockstyled__SidebarBlock",componentId:"sc-1sz3fs9-0"})(["height:100%;width:100%;padding:16px 16px 16px 14px;&:hover{background:var(--button-bg-hover);cursor:pointer;}"]),v=t(23),_=t.n(v),C=t(20),I=t.n(C),N=t(24),S=t.n(N),T=t(25),k=t.n(T),L=t(26),z=t.n(L),E=t(27),M=t.n(E),H=t(32),F=t.n(H),B=t(33),D=t.n(B),q=t(34),Y=t.n(q),X=t(35),P=t.n(X),V=function(){var e=Object(i.useRef)(),n=h(),t=Object(s.a)(n.expand,1)[0],a=p(),c=function(){console.log("menu clicked. "+t),a.toggleExpand(),e.current.classList.toggle("nav-open")};return Object(d.jsxs)(j,{children:[Object(d.jsx)(f,{children:Object(d.jsx)("div",{className:"header__menu-btn",onClick:function(){return c()},children:Object(d.jsx)(_.a,{})})}),Object(d.jsxs)(w,{children:[Object(d.jsxs)(y,{className:"home",children:[Object(d.jsx)(S.a,{}),Object(d.jsx)("p",{children:"Home"})]}),Object(d.jsxs)(y,{className:"trending",children:[Object(d.jsx)(k.a,{}),Object(d.jsx)("p",{children:"Trending"})]}),Object(d.jsxs)(y,{className:"subscriptions",children:[Object(d.jsx)(z.a,{}),Object(d.jsx)("p",{children:"Subscriptions"})]}),Object(d.jsxs)(y,{className:"library",children:[Object(d.jsx)(M.a,{}),Object(d.jsx)("p",{children:"Library"})]})]}),Object(d.jsxs)(g,{expanded:!0,ref:e,children:[Object(d.jsxs)(f,{children:[Object(d.jsx)("div",{className:"header__menu-btn",onClick:function(){return c()},children:Object(d.jsx)(_.a,{className:"sidebar__hamburger"})}),Object(d.jsxs)("div",{className:"header__logo",children:[Object(d.jsx)(I.a,{}),Object(d.jsx)("h3",{className:"header__logo--title",children:"YouTube"})]})]}),Object(d.jsxs)(w,{expanded:!0,children:[Object(d.jsxs)(y,{className:"home",children:[Object(d.jsx)(S.a,{}),Object(d.jsx)("p",{children:"Home"})]}),Object(d.jsxs)(y,{className:"trending",children:[Object(d.jsx)(k.a,{}),Object(d.jsx)("p",{children:"Trending"})]}),Object(d.jsxs)(y,{className:"subscriptions",children:[Object(d.jsx)(z.a,{}),Object(d.jsx)("p",{children:"Subscriptions"})]}),Object(d.jsx)("span",{className:"sidebar__divider"}),Object(d.jsxs)(y,{className:"library",children:[Object(d.jsx)(M.a,{}),Object(d.jsx)("p",{children:"Library"})]}),Object(d.jsxs)(y,{className:"history",children:[Object(d.jsx)(F.a,{}),Object(d.jsx)("p",{children:"History"})]}),Object(d.jsxs)(y,{className:"yourVideos",children:[Object(d.jsx)(D.a,{}),Object(d.jsx)("p",{children:"Your Videos"})]}),Object(d.jsxs)(y,{className:"watchLater",children:[Object(d.jsx)(Y.a,{}),Object(d.jsx)("p",{children:"Watch Later"})]}),Object(d.jsxs)(y,{className:"showMore",children:[Object(d.jsx)(P.a,{}),Object(d.jsx)("p",{children:"Show More"})]})]}),Object(d.jsx)(u,{expand:t,onClick:function(){return c()}})]})]})},R=t(10),A=t.n(R),J=o.c.div.withConfig({displayName:"HeaderSearchbarstyled__Searchbar",componentId:"sc-1610tg3-0"})(["width:40%;padding:4px;input{@media only screen and (max-width:650px){display:none;}padding:2px 6px;flex:1;height:100%;box-shadow:inset 0 1px 2px #eee;border:1px solid #ccc;border-radius:2px 0 0 2px;border-right:none;}.header__search--button{@media only screen and (max-width:650px){display:none;}display:flex;align-items:center;justify-content:center;width:65px !important;height:100%;background-color:var(--button-bg);color:var(--button);opacity:0.8;border:var(--border);box-shadow:inset 0 1px 2px #eee;border-radius:0 2px 2px 0;svg{width:24px;height:24px;}&:hover{opacity:1;box-shadow:inset 0 1px 2px #eee;box-shadow:0 1px 0 #00000010;}}"]),G=function(){return Object(d.jsxs)(J,{children:[Object(d.jsx)("input",{type:"text",name:"searchField",id:"headerSearchField",placeholder:"Search"}),Object(d.jsx)("a",{href:"#",className:"header__search--button",children:Object(d.jsx)(A.a,{})})]})},U=t(36),W=t.n(U),K=t(37),Q=t.n(K),Z=t(38),$=t.n(Z),ee=t(66),ne=o.c.div.withConfig({displayName:"HeaderRight__HeaderRightContainer",componentId:"sc-1vko5ot-0"})(["width:20%;min-width:200px;justify-content:space-around;@media only screen and (max-width:650px){width:40%;}& > *{color:var(--button);cursor:pointer;opacity:1;&:hover{opacity:0.85;}}& > .mobileSearch{display:none;@media only screen and (max-width:650px){display:inline-block;width:1.1em;}}@media only screen and (max-width:460px){justify-content:flex-end;& > *{margin-left:1rem;}.d-mobile-none{display:none;}}"]),te=function(){var e=p().toggleMobile;return Object(d.jsxs)(ne,{children:[Object(d.jsx)(A.a,{className:"mobileSearch",onClick:function(){return e()}}),Object(d.jsx)(W.a,{className:"d-mobile-none"}),Object(d.jsx)(Q.a,{className:"d-mobile-none"}),Object(d.jsx)($.a,{className:"d-mobile-none"}),Object(d.jsx)(ee.a,{alt:"VP of Operations Tim Johnson",src:"https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"})]})},ie=o.c.a.attrs({href:"#"}).withConfig({displayName:"HeaderLeft__HeaderLogo",componentId:"sc-111gmq7-0"})(["display:flex;align-items:center;text-decoration:none;margin-right:1em;svg{color:#fc2021;font-size:2em;}.header__logo--title{color:black;}"]),ae=function(){return Object(d.jsx)("div",{className:"header__left",children:Object(d.jsxs)(ie,{children:[Object(d.jsx)(I.a,{}),Object(d.jsx)("h3",{className:"header__logo--title",children:"YouTube"})]})})},ce=o.c.div.withConfig({displayName:"Header__HeaderContainer",componentId:"d7r4g1-0"})(["display:flex;justify-content:space-between;position:fixed;top:0;width:calc(100% - 75px);min-width:400px;height:65px;background-color:var(--bg);z-index:99;padding:0.8rem 0.8rem 0.8rem 0;box-shadow:var(--box-shadow);margin-left:75px;& > *{display:flex;align-items:center;}@media only screen and (max-width:460px){width:100%;margin-left:0;padding:1rem;}"]),re=function(){return Object(d.jsxs)(ce,{children:[Object(d.jsx)(ae,{}),Object(d.jsx)(G,{}),Object(d.jsx)(te,{})]})},oe=o.c.div.withConfig({displayName:"Bodystyled__BodyContainer",componentId:"lzh8iv-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));grid-gap:0.5rem;padding:1rem;place-items:center;width:",";height:100%;min-height:100vh;margin-top:65px;margin-left:",";background:var(--bg);border-top:var(--border);transition:width 250ms cubic-bezier(0.5,0,0.5,1);transition:margin-left 250ms cubic-bezier(0.5,0,0.5,1);z-index:1;@media only screen and (max-width:460px){margin-left:0;width:100vw;height:calc(100vh - 75px);margin-bottom:75px;}"],(function(e){return"75px"===e.expand?"calc(100vw - 75px)":"calc(100vw - 250px)"}),(function(e){return"75px"===e.expand?"75px":"250px"})),se=o.c.div.withConfig({displayName:"Cardstyled__Card",componentId:"sc-1v2lslq-0"})(["display:flex;flex-direction:column;height:100%;width:100%;padding:0.5rem;cursor:pointer;"]),de=o.c.div.withConfig({displayName:"Cardstyled__CardImgContainer",componentId:"sc-1v2lslq-1"})(["height:140px;width:100%;margin:0 auto;overflow:hidden;position:relative;padding-top:56.25%;"]),le=o.c.img.withConfig({displayName:"Cardstyled__CardImage",componentId:"sc-1v2lslq-2"})(["width:100%;position:absolute;top:0;object-fit:cover;transform:translateY(-30%);text-align:center;"]),xe=o.c.div.withConfig({displayName:"Cardstyled__CardInfo",componentId:"sc-1v2lslq-3"})(["display:flex;justify-content:flex-start;line-height:1.25rem;margin:0.8rem 0;& > *{margin-right:1rem;}h4{color:var(--text);font-size:0.95rem;}p{color:var(--button);opacity:0.9;font-size:0.9rem;&:hover{opacity:1;}}"]),he=o.c.div.withConfig({displayName:"Cardstyled__CardInfoText",componentId:"sc-1v2lslq-4"})([""]);se.Info=xe,se.InfoText=he,se.ImgContainer=de,se.Image=le;var pe,be=se,me=Object(o.c)(be).withConfig({displayName:"Card__VideoCardStyled",componentId:"sc-1bh8jvw-0"})([""]),je=function(e){var n=e.image,t=e.title,i=e.channel,a=e.views,c=e.timestamp;e.channelImage;return Object(d.jsxs)(me,{className:"videoCard",children:[Object(d.jsx)(be.ImgContainer,{children:Object(d.jsx)(be.Image,{src:n,alt:t,className:"videoCard__thumbnail"})}),Object(d.jsxs)(be.Info,{className:"videoCard__info",children:[Object(d.jsx)(ee.a,{className:"videoCard__Avatar",alt:i,src:"./images/brytny-com-C4rXIFSzEXk-unsplash.jpg"}),Object(d.jsxs)(be.InfoText,{className:"videoCard__text",children:[Object(d.jsx)("h4",{children:t}),Object(d.jsx)("p",{children:i}),Object(d.jsxs)("p",{children:[a," \u2022 ",c]})]})]})]})},ge=function(){var e=h(),n=Object(s.a)(e.expand,1)[0];console.log("body rendered. offset: "+n);var t=Date.now(),i=new Date(t).toDateString();console.log(i);var a,c,r="./images/brytny-com-C4rXIFSzEXk-unsplash.jpg",o=r,l=(a=1,c=100,Math.random()*(1+c-a)+a),x="".concat(function(){return e=l,n=2,Number(Math.round(e+"e"+n)+"e-"+n);var e,n}(),"m");return Object(d.jsxs)(oe,{expand:n,children:[Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{image:r,title:"TITLE",channel:"Channel",timestamp:i,views:x,channelImage:o}),Object(d.jsx)(je,{title:"TITLE",channel:"Channel",timestamp:i,views:x}),Object(d.jsx)(je,{title:"TITLE",channel:"Channel",timestamp:i,views:x}),Object(d.jsx)(je,{title:"TITLE",channel:"Channel",timestamp:i,views:x}),Object(d.jsx)(je,{title:"TITLE",channel:"Channel",timestamp:i,views:x}),Object(d.jsx)(je,{title:"TITLE",channel:"Channel",timestamp:i,views:x}),Object(d.jsx)(je,{title:"TITLE",channel:"Channel",timestamp:i,views:x})]})},ue=o.c.div.withConfig({displayName:"MobileSearchbarstyled__MobileSearchbarContainer",componentId:"bio9y6-0"})(["display:none;@media only screen and (max-width:650px){display:flex;flex-direction:row;position:fixed;top:0;right:0;height:65px;width:",";transition:width 250ms cubic-bezier(0.5,0,0.5,1);margin-top:65px;margin-left:",";transition:margin-left 250ms cubic-bezier(0.5,0,0.5,1);z-index:10;}@media only screen and (max-width:450px){width:100vw;}"],(function(e){return"75px"===e.expand?"calc(100vw - 77px)":"calc(100vw - 251px)"}),(function(e){return"75px"===e.expand?"75px":"200px"})),fe=o.c.input.attrs({id:"headerMobileSearchField"}).withConfig({displayName:"MobileSearchbarstyled__MobileSearchInput",componentId:"bio9y6-1"})(["width:80%;padding:2px 6px;flex:1;height:100%;box-shadow:inset 0 1px 2px #eee;border:1px solid #ccc;border-radius:2px 0 0 2px;border-right:none;"]),Oe=o.c.div.withConfig({displayName:"MobileSearchbarstyled__MobileSearchbarStyled",componentId:"bio9y6-2"})(["display:flex;align-items:center;position:relative;overflow:hidden;height:100%;width:100%;transition:width 250ms cubic-bezier(0.5,0,0.5,1);padding:0.8rem 10%;transform:",";transition:transform 250ms cubic-bezier(0.5,0,0.5,1);background:var(--bg);border:var(--border);.header__search--button{display:flex;align-items:center;justify-content:center;width:65px !important;height:100%;background-color:var(--button-bg);color:var(--button);opacity:0.8;border:var(--border);box-shadow:inset 0 1px 2px #eee;border-radius:0 2px 2px 0;@media only screen and (max-width:600px){width:50px !important;svg{width:24px;height:24px;}&:hover{opacity:1;box-shadow:inset 0 1px 2px #eee;box-shadow:0 1px 0 #00000010;}}}"],(function(e){return"closed"===e.mobileSearch?"translateY(-65px)":"translateY(0px)"})),we=function(){var e=h(),n=Object(s.a)(e.mobile,1)[0],t=Object(s.a)(e.expand,1)[0];return Object(d.jsx)(ue,{expand:t,mobileSearch:n,children:Object(d.jsxs)(Oe,{mobileSearch:n,children:[Object(d.jsx)(fe,{type:"text",name:"searchField",id:"headerSearchField",placeholder:"Search"}),Object(d.jsx)("a",{href:"#",className:"header__search--button",children:Object(d.jsx)(A.a,{})})]})})},ye=o.c.div.withConfig({displayName:"Container__ContainerStyled",componentId:"sc-1gun05n-0"})([""]),ve=function(){return Object(d.jsxs)(ye,{children:[Object(d.jsx)(re,{}),Object(d.jsx)(we,{}),Object(d.jsx)(V,{}),Object(d.jsx)(ge,{})]})},_e=Object(o.a)(pe||(pe=Object(O.a)(["\n*, *::before, *::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --bg: #fefefe;\n  --border: 1px solid #c7c7c7;\n  --box-shadow: 0 1px 0 #00000010;\n  --accent: #fe0000;\n  --text: #474747;\n  --button: #575757;\n  --button-bg: #eeeeee;\n  --button-bg-hover: #ededed;\n}\n\nbody {\n  // display: flex;\n  // flex-wrap: wrap;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"])));var Ce=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(b,{children:[Object(d.jsx)(_e,{}),Object(d.jsx)(ve,{})]})})},Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Ce,{})}),document.getElementById("root")),Ie()}},[[52,1,2]]]);
//# sourceMappingURL=main.11004fa7.chunk.js.map