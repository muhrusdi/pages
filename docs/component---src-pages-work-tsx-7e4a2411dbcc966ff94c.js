"use strict";(self.webpackChunkmuhrusdi_github_io=self.webpackChunkmuhrusdi_github_io||[]).push([[611],{9806:function(e,t,n){var r,l=n(7294),a=(r=l)&&"object"==typeof r&&"default"in r?r.default:r,c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var i,u,s=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o?o:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var l=function(e){return e&&e.Math==Math&&e},a=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof n&&n)||function(){return this}()||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},i=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,m={f:s&&!u.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:u},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},f={}.toString,p=function(e){return f.call(e).slice(8,-1)},E="".split,g=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==p(e)?E.call(e,""):Object(e)}:Object,h=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!y(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!y(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,N=function(e,t){return b.call(e,t)},w=a.document,x=y(w)&&y(w.createElement),T=function(e){return x?w.createElement(e):{}},_=!i&&!c((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,S={f:i?I:function(e,t){if(e=h(e),t=v(t,!0),_)try{return I(e,t)}catch(n){}if(N(e,t))return d(!m.f.call(e,t),e[t])}},k=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},L=Object.defineProperty,O={f:i?L:function(e,t,n){if(k(e),t=v(t,!0),k(n),_)try{return L(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},D=i?function(e,t,n){return O.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},A=function(e,t){try{D(a,e,t)}catch(n){a[e]=t}return t},j="__core-js_shared__",C=a[j]||A(j,{}),M=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(e){return M.call(e)});var P,R,G,H=C.inspectSource,z=a.WeakMap,B="function"==typeof z&&/native code/.test(H(z)),Y=r((function(e){(e.exports=function(e,t){return C[e]||(C[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),Z=0,K=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Z+K).toString(36)},W=Y("keys"),F=function(e){return W[e]||(W[e]=U(e))},V={},Q=a.WeakMap;if(B){var q=C.state||(C.state=new Q),J=q.get,$=q.has,X=q.set;P=function(e,t){return t.facade=e,X.call(q,e,t),t},R=function(e){return J.call(q,e)||{}},G=function(e){return $.call(q,e)}}else{var ee=F("state");V[ee]=!0,P=function(e,t){return t.facade=e,D(e,ee,t),t},R=function(e){return N(e,ee)?e[ee]:{}},G=function(e){return N(e,ee)}}var te={set:P,get:R,has:G,enforce:function(e){return G(e)?R(e):P(e,{})},getterFor:function(e){return function(t){var n;if(!y(t)||(n=R(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,l,c){var o,i=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,s=!!c&&!!c.noTargetGet;"function"==typeof l&&("string"!=typeof t||N(l,"name")||D(l,"name",t),(o=n(l)).source||(o.source=r.join("string"==typeof t?t:""))),e!==a?(i?!s&&e[t]&&(u=!0):delete e[t],u?e[t]=l:D(e,t,l)):u?e[t]=l:A(t,l)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||H(this)}))})),re=a,le=function(e){return"function"==typeof e?e:void 0},ae=function(e,t){return arguments.length<2?le(re[e])||le(a[e]):re[e]&&re[e][t]||a[e]&&a[e][t]},ce=Math.ceil,oe=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?oe:ce)(e)},ue=Math.min,se=Math.max,me=Math.min,de=function(e){return function(t,n,r){var l,a,c=h(t),o=(l=c.length)>0?ue(ie(l),9007199254740991):0,i=function(e,t){var n=ie(e);return n<0?se(n+t,0):me(n,t)}(r,o);if(e&&n!=n){for(;o>i;)if((a=c[i++])!=a)return!0}else for(;o>i;i++)if((e||i in c)&&c[i]===n)return e||i||0;return!e&&-1}},fe={includes:de(!0),indexOf:de(!1)},pe=fe.indexOf,Ee=function(e,t){var n,r=h(e),l=0,a=[];for(n in r)!N(V,n)&&N(r,n)&&a.push(n);for(;t.length>l;)N(r,n=t[l++])&&(~pe(a,n)||a.push(n));return a},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=ge.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return Ee(e,he)}},ve={f:Object.getOwnPropertySymbols},be=ae("Reflect","ownKeys")||function(e){var t=ye.f(k(e)),n=ve.f;return n?t.concat(n(e)):t},Ne=function(e,t){for(var n=be(t),r=O.f,l=S.f,a=0;a<n.length;a++){var c=n[a];N(e,c)||r(e,c,l(t,c))}},we=/#|\.prototype\./,xe=function(e,t){var n=_e[Te(e)];return n==Se||n!=Ie&&("function"==typeof t?c(t):!!t)},Te=xe.normalize=function(e){return String(e).replace(we,".").toLowerCase()},_e=xe.data={},Ie=xe.NATIVE="N",Se=xe.POLYFILL="P",ke=xe,Le=S.f,Oe=function(e,t){var n,r,l,c,o,i=e.target,u=e.global,s=e.stat;if(n=u?a:s?a[i]||A(i,{}):(a[i]||{}).prototype)for(r in t){if(c=t[r],l=e.noTargetGet?(o=Le(n,r))&&o.value:n[r],!ke(u?r:i+(s?".":"#")+r,e.forced)&&void 0!==l){if(typeof c==typeof l)continue;Ne(c,l)}(e.sham||l&&l.sham)&&D(c,"sham",!0),ne(n,r,c,e)}},De=Object.keys||function(e){return Ee(e,ge)},Ae=m.f,je=function(e){return function(t){for(var n,r=h(t),l=De(r),a=l.length,c=0,o=[];a>c;)n=l[c++],i&&!Ae.call(r,n)||o.push(e?[n,r[n]]:r[n]);return o}},Ce=(je(!0),je(!1));Oe({target:"Object",stat:!0},{values:function(e){return Ce(e)}}),re.Object.values;var Me,Pe,Re="process"==p(a.process),Ge=ae("navigator","userAgent")||"",He=a.process,ze=He&&He.versions,Be=ze&&ze.v8;Be?Pe=(Me=Be.split("."))[0]+Me[1]:Ge&&(!(Me=Ge.match(/Edge\/(\d+)/))||Me[1]>=74)&&(Me=Ge.match(/Chrome\/(\d+)/))&&(Pe=Me[1]);var Ye,Ze=Pe&&+Pe,Ke=!!Object.getOwnPropertySymbols&&!c((function(){return!Symbol.sham&&(Re?38===Ze:Ze>37&&Ze<41)})),Ue=Ke&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,We=Y("wks"),Fe=a.Symbol,Ve=Ue?Fe:Fe&&Fe.withoutSetter||U,Qe=i?Object.defineProperties:function(e,t){k(e);for(var n,r=De(t),l=r.length,a=0;l>a;)O.f(e,n=r[a++],t[n]);return e},qe=ae("document","documentElement"),Je=F("IE_PROTO"),$e=function(){},Xe=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ye=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ye?function(e){e.write(Xe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ye):((t=T("iframe")).style.display="none",qe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Xe("document.F=Object")),e.close(),e.F);for(var n=ge.length;n--;)delete et.prototype[ge[n]];return et()};V[Je]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?($e.prototype=k(e),n=new $e,$e.prototype=null,n[Je]=e):n=et(),void 0===t?n:Qe(n,t)},rt=(N(We,tt="unscopables")&&(Ke||"string"==typeof We[tt])||(Ke&&N(Fe,tt)?We[tt]=Fe[tt]:We[tt]=Ve("Symbol."+tt)),We[tt]),lt=Array.prototype;null==lt[rt]&&O.f(lt,rt,{configurable:!0,value:nt(null)});var at,ct=fe.includes;Oe({target:"Array",proto:!0},{includes:function(e){return ct(this,e,arguments.length>1?arguments[1]:void 0)}}),at="includes",lt[rt][at]=!0;var ot,it,ut,st=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,l){return e.call(t,n,r,l)}}return function(){return e.apply(t,arguments)}},mt=Function.call;ot="includes",st(mt,a.Array.prototype[ot],it),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ut||(ut={}));var dt,ft=ut;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(dt||(dt={}));var pt,Et=dt,gt=[ft.PARAGRAPH,ft.HEADING_1,ft.HEADING_2,ft.HEADING_3,ft.HEADING_4,ft.HEADING_5,ft.HEADING_6,ft.OL_LIST,ft.UL_LIST,ft.HR,ft.QUOTE,ft.EMBEDDED_ENTRY,ft.EMBEDDED_ASSET],ht=[ft.HR,ft.EMBEDDED_ENTRY,ft.EMBEDDED_ASSET],yt=((pt={})[ft.OL_LIST]=[ft.LIST_ITEM],pt[ft.UL_LIST]=[ft.LIST_ITEM],pt[ft.LIST_ITEM]=gt.slice(),pt[ft.QUOTE]=[ft.PARAGRAPH],pt),vt={nodeType:ft.DOCUMENT,data:{},content:[{nodeType:ft.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},bt=Object.freeze({isInline:function(e){return Object.values(Et).includes(e.nodeType)},isBlock:function(e){return Object.values(ft).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=ft,t.CONTAINERS=yt,t.EMPTY_DOCUMENT=vt,t.INLINES=Et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=gt,t.VOID_BLOCKS=ht,t.helpers=bt}(i={exports:{}},i.exports),i.exports);(u=s)&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")&&u.default;var m,d,f=s.BLOCKS,p=(s.CONTAINERS,s.EMPTY_DOCUMENT,s.INLINES),E=s.MARKS,g=(s.TOP_LEVEL_BLOCKS,s.VOID_BLOCKS,s.helpers);function h(e,t){return e.map((function(e,n){return r=y(e,t),a=n,l.isValidElement(r)&&null===r.key?l.cloneElement(r,{key:a}):r;var r,a}))}function y(e,t){var n=t.renderNode,r=t.renderMark,l=t.renderText;if(g.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),l?l(e.value):e.value);var c=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,c):a.createElement(a.Fragment,null,c)}var v=((m={})[f.DOCUMENT]=function(e,t){return t},m[f.PARAGRAPH]=function(e,t){return a.createElement("p",null,t)},m[f.HEADING_1]=function(e,t){return a.createElement("h1",null,t)},m[f.HEADING_2]=function(e,t){return a.createElement("h2",null,t)},m[f.HEADING_3]=function(e,t){return a.createElement("h3",null,t)},m[f.HEADING_4]=function(e,t){return a.createElement("h4",null,t)},m[f.HEADING_5]=function(e,t){return a.createElement("h5",null,t)},m[f.HEADING_6]=function(e,t){return a.createElement("h6",null,t)},m[f.EMBEDDED_ENTRY]=function(e,t){return a.createElement("div",null,t)},m[f.UL_LIST]=function(e,t){return a.createElement("ul",null,t)},m[f.OL_LIST]=function(e,t){return a.createElement("ol",null,t)},m[f.LIST_ITEM]=function(e,t){return a.createElement("li",null,t)},m[f.QUOTE]=function(e,t){return a.createElement("blockquote",null,t)},m[f.HR]=function(){return a.createElement("hr",null)},m[p.ASSET_HYPERLINK]=function(e){return N(p.ASSET_HYPERLINK,e)},m[p.ENTRY_HYPERLINK]=function(e){return N(p.ENTRY_HYPERLINK,e)},m[p.EMBEDDED_ENTRY]=function(e){return N(p.EMBEDDED_ENTRY,e)},m[p.HYPERLINK]=function(e,t){return a.createElement("a",{href:e.data.uri},t)},m),b=((d={})[E.BOLD]=function(e){return a.createElement("b",null,e)},d[E.ITALIC]=function(e){return a.createElement("i",null,e)},d[E.UNDERLINE]=function(e){return a.createElement("u",null,e)},d[E.CODE]=function(e){return a.createElement("code",null,e)},d);function N(e,t){return a.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?y(e,{renderNode:c({},v,t.renderNode),renderMark:c({},b,t.renderMark),renderText:t.renderText}):null}},3610:function(e,t,n){var r=n(7294),l=n(9463),a={Javascript:{name:"Javascript",icon:r.createElement(l.WZi,{color:"#f7cc1f"})},Typescript:{name:"Tavascript",icon:r.createElement(l.WZi,{color:"#4674e4"})},React:{name:"React",icon:r.createElement(l.pNp,{color:"#2dfff9"})},Vue:{name:"Vue",icon:r.createElement(l.jdz,{color:"#1ab45a"})},Nextjs:{name:"Nextjs",icon:r.createElement(l._T8,{color:"#d1d5db"})},Gatsbyjs:{name:"Gatsbyjs",icon:r.createElement(l.s6Z,{color:"#a254e4"})},"Styled Components":{name:"Styled Components",icon:r.createElement(l.BQQ,{color:"orange"})},Tailwindcss:{name:"Tailwindcss",icon:r.createElement(l.YnA,{color:"#2dffe2"})},HTML:{name:"HTML",icon:r.createElement(l.PSn,{color:"#ff3f3f"})},CSS:{name:"CSS",icon:r.createElement(l.H5g,{color:"#1f99f7"})},GraphQL:{name:"GraphQL",icon:r.createElement(l.dMV,{color:"#ff2dd8"})},Nuxtjs:{name:"Nuxtjs",icon:r.createElement("svg",{viewBox:"0 0 400 400",height:"1em",width:"1em"},r.createElement("g",{fillRule:"nonzero",transform:"translate(0 50)",fill:"none"},r.createElement("path",{d:"M227.92099 83.45116l-13.6889 24.10141-46.8148-82.44693L23.7037 278.17052h97.3037c0 13.31084 10.61252 24.10142 23.70371 24.10142H23.70371c-8.46771 0-16.29145-4.59601-20.5246-12.05272-4.23315-7.4567-4.23272-16.64312.00114-24.0994L146.89383 13.05492c4.23415-7.45738 12.0596-12.05138 20.5284-12.05138 8.46878 0 16.29423 4.594 20.52839 12.05138l39.97037 70.39623z",fill:"#00C58E"}),r.createElement("path",{d:"M331.6642 266.11981l-90.05432-158.56724-13.6889-24.10141-13.68888 24.10141-90.04445 158.56724c-4.23385 7.45629-4.23428 16.64271-.00113 24.09941 4.23314 7.4567 12.05689 12.05272 20.5246 12.05272h166.4c8.46946 0 16.29644-4.591 20.532-12.04837 4.23555-7.45736 4.23606-16.64592.00132-24.10376h.01976zM144.7111 278.17052L227.921 131.65399l83.19012 146.51653h-166.4z",fill:"#2F495E"}),r.createElement("path",{d:"M396.04938 290.22123c-4.23344 7.45557-12.05656 12.0507-20.52345 12.0507H311.1111c13.0912 0 23.7037-10.79057 23.7037-24.10141h40.66173L260.09877 74.98553l-18.4889 32.56704L227.921 83.45116l11.65432-20.51634c4.23416-7.45738 12.0596-12.05138 20.5284-12.05138 8.46879 0 16.29423 4.594 20.52839 12.05138l115.41728 203.185c4.23426 7.457 4.23426 16.6444 0 24.1014z",fill:"#108775"})))},Redwoodjs:{name:"Redwood.js",icon:r.createElement("svg",{role:"img",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,"RedwoodJS icon"),r.createElement("path",{fill:"#962f2f",d:"M6.989 3.47l4.66 3.181c.105.07.228.108.354.111a.634.634 0 0 0 .354-.111l4.664-3.192a.637.637 0 0 0-.089-1.087L12.272.065a.64.64 0 0 0-.56 0L7.067 2.372a.636.636 0 0 0-.078 1.098zm6.597 4.179c0 .211.104.408.276.528l3.736 2.553a.628.628 0 0 0 .776-.05l3.134-2.803a.637.637 0 0 0-.028-.973l-2.992-2.393a.635.635 0 0 0-.751-.029l-3.874 2.65a.644.644 0 0 0-.277.517zm-9.291 3.474a.64.64 0 0 1 .209.538.625.625 0 0 1-.315.485l-2.231 1.337a.63.63 0 0 1-.718-.049.64.64 0 0 1-.21-.693l.825-2.596a.63.63 0 0 1 1.023-.281l1.417 1.259zm12.1.271l-4.033-2.76a.634.634 0 0 0-.708 0l-4.033 2.76a.646.646 0 0 0-.276.485.664.664 0 0 0 .212.521l4.03 3.605a.635.635 0 0 0 .842 0l4.03-3.605a.647.647 0 0 0-.064-1.006zm-10.758-.713l-3.13-2.803a.648.648 0 0 1-.213-.503.626.626 0 0 1 .237-.481l2.992-2.407a.641.641 0 0 1 .754-.029l3.87 2.65a.639.639 0 0 1 0 1.07l-3.732 2.553a.633.633 0 0 1-.778-.05zm16.073 4.026l-3.187-1.908a.627.627 0 0 0-.744.071l-3.895 3.477a.644.644 0 0 0-.204.587.636.636 0 0 0 .388.483l5.404 2.19a.634.634 0 0 0 .815-.332l1.675-3.752a.64.64 0 0 0-.252-.816zm.442-4.561l.825 2.596h-.007a.635.635 0 0 1-.927.742l-2.234-1.337a.623.623 0 0 1-.305-.485.631.631 0 0 1 .209-.538l1.416-1.262a.63.63 0 0 1 1.023.284zm-11.82 6.786a.637.637 0 0 0-.202-.585L6.235 12.87a.627.627 0 0 0-.744-.071l-3.187 1.908a.648.648 0 0 0-.255.813l1.678 3.752a.632.632 0 0 0 .814.332l5.4-2.19a.637.637 0 0 0 .391-.482zm1.912 1.07l4.334 1.755c.212.091.358.29.382.521a.635.635 0 0 1-.269.596l-4.338 3.013A.625.625 0 0 1 12 24a.64.64 0 0 1-.354-.114l-4.334-3.013a.635.635 0 0 1 .124-1.117l4.334-1.755a.642.642 0 0 1 .474.001z"}))},Wordpress:{name:"Wordpress",icon:r.createElement("svg",{role:"img",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,"WordPress icon"),r.createElement("path",{fill:"#d1d5db",d:"M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"}))},Prisma:{name:"Prisma",icon:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",fill:"none",viewBox:"0 0 106 128"},r.createElement("path",{fill:"#d1d5db",fillRule:"evenodd",d:"M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z",clipRule:"evenodd"}))}};t.Z=a},2698:function(e,t,n){n.d(t,{I:function(){return p},Z:function(){return f}});var r=n(7294),l=n(5444),a=n(430),c=n(9692),o=n(8940),i=c.ZP.div.withConfig({displayName:"styled__TechIcon",componentId:"sc-1skuq0l-0"})(["margin:0 -4px;& > div{padding:0 4px;}"]),u=((0,c.ZP)(o.VY).withConfig({displayName:"styled__TooltipContentStyled",componentId:"sc-1skuq0l-1"})([""]),(0,c.ZP)(o.Eh).withConfig({displayName:"styled__TooltipArrowStyled",componentId:"sc-1skuq0l-2"})(["fill:rgba(17,24,39,var(--tw-bg-opacity));"]),n(3610)),s=n(9463),m=n(3750),d=function(e){var t,n,c=e.data;return r.createElement("div",null,r.createElement("div",null,r.createElement("div",null,r.createElement("img",{style:{height:200},className:"rounded-lg w-full object-cover bg-blueGray-900",src:c.featuredImage.url,alt:""}))),r.createElement("div",null,r.createElement("div",null,r.createElement(l.Link,{to:"/work/"+c.sys.id,className:"transition-all mt-4 inline-block hover:text-indigo-500"},r.createElement("h2",{className:"text-xl font-bold"},c.title)),r.createElement(a.G8,{className:"flex mt-2"},r.createElement(i,{className:"flex transition-all items-center pr-4"},c.techsCollection.items.map((function(e,t){return r.createElement("div",{key:t},r.createElement(a.nw,{icon:u.Z[e.name].icon,text:u.Z[e.name].name}))}))),null!==(t=c.category)&&void 0!==t&&t.title?r.createElement("div",{className:"py-1 px-2 border rounded-md text-xs uppercase text-blueGray-400 font-medium border-blueGray-500"},r.createElement("span",null,null===(n=c.category)||void 0===n?void 0:n.title)):null))))};d.Mini=function(e){var t=e.data;return r.createElement("div",{className:"border border-blueGray-700 rounded-lg"},r.createElement("div",{className:"p-3 pb-0"},r.createElement("h4",null,t.name),r.createElement("p",{className:"text-sm text-blueGray-400 mt-1 line-clamp-2"},t.description)),r.createElement("ul",{className:"flex py-2 pb-3 px-3 -mx-1 mt-1 items-center justify-between"},r.createElement("li",{className:"px-1"},r.createElement("a",{href:t.github,target:"_blank",rel:"noreferrer",className:"uppercase text-xs text-blueGray-400 hover:text-indigo-500 transition-all"},r.createElement(s.pZu,{size:16}))),r.createElement("li",{className:"px-1"},t.preview?r.createElement("a",{href:t.preview,target:"_blank",rel:"noreferrer",className:"block uppercase text-xs text-indigo-500"},r.createElement("button",null,r.createElement(m.Rgz,null))):r.createElement("button",{className:"uppercase text-xs text-blueGray-400 cursor-default"},r.createElement(m.Rgz,null)))))};var f=d,p=function(){return r.createElement("div",{className:"bg-blueGray-900 rounded-lg",style:{height:200}})}},5711:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,l,a=n(7294),c=n(9499),o=n(1880),i=n(7914),u=n(2271),s=n(9806),m=n(430),d=n(3610),f=n(9692),p=(f.ZP.article.withConfig({displayName:"styled__Articles",componentId:"sc-4eygth-0"})(["a{color:#6f66ff;}"]),f.ZP.div.withConfig({displayName:"styled__Grid",componentId:"sc-4eygth-1"})(["a{grid-template-columns:repeat(2,minmax(0,1fr));height:120px;@media (min-width:640px){height:200px;}&:hover{img{object-fit:contain;}}}"])),E=f.ZP.ul.withConfig({displayName:"styled__IconList",componentId:"sc-4eygth-2"})({svg:{height:20,width:20}}),g=f.ZP.img.withConfig({displayName:"styled__ImageStyled",componentId:"sc-4eygth-3"})(["height:200px;@media (min-width:640px){height:400px;}"]),h=n(3411),y=function(e){var t=(0,i.Ps)(r||(r=(0,o.Z)(["\n    query GetWork($id: String!) {\n      work(id: $id) {\n        title\n        sys {\n          id\n        }\n        description\n        featuredImage {\n          url\n        }\n        content {\n          json\n        }\n        techsCollection {\n          items {\n            ... on TechIcon {\n              name\n            }\n          }\n        }\n        link\n        category {\n          ... on WorkCategory {\n            title\n          }\n        }\n        screenshotCollection {\n          items {\n            url\n            title\n            description\n          }\n        }\n      }\n    }\n  "]))),n=(0,u.a)(t,{variables:{id:e.slug}}),l=n.data,c=n.loading;return a.createElement("div",null,a.createElement(h.Z,{title:null==l?void 0:l.work.title,description:null==l?void 0:l.work.description,image:null==l?void 0:l.work.featuredImage.url}),a.createElement("div",{className:"grid gap-8 sm:grid-cols-3"},a.createElement("div",{className:"col-span-3"},c?a.createElement(g,{as:"div",className:"bg-blueGray-900 w-full rounded-lg"}):a.createElement(g,{className:"object-cover object-top w-full rounded-lg",src:null==l?void 0:l.work.featuredImage.url,alt:null==l?void 0:l.work.title})),a.createElement("div",{className:"col-span-3 sm:col-span-1"},a.createElement("div",null,a.createElement("h4",{className:"uppercase text-sm font-bold text-blueGray-500"},"Tech"),a.createElement(E,{className:"mt-4 flex -mx-2 items-center"},null==l?void 0:l.work.techsCollection.items.map((function(e,t){return a.createElement("li",{className:"px-2",key:t},a.createElement(m.nw,{icon:d.Z[e.name].icon,text:d.Z[e.name].name}))})))),a.createElement("div",{className:"py-3 px-4 mt-6 text-center block uppercase text-sm rounded-lg text-blueGray-400 font-medium bg-blueGray-900"},a.createElement("span",null,(null==l?void 0:l.work.category.title)||"Loading")),null!=l&&l.work.link?a.createElement("div",{className:"mt-4"},a.createElement("a",{href:null==l?void 0:l.work.link,target:"_blank",rel:"noreferrer",className:"bg-indigo-600 text-white text-center block py-3 uppercase font-semibold text-sm rounded-lg hover:bg-indigo-700 transition-all px-4"},"Visit")):a.createElement("div",{className:"mt-4"},a.createElement("button",{disabled:!0,className:"bg-gray-300 disabled cursor-default text-gray-500 text-center w-full py-3 uppercase font-semibold text-sm rounded-lg px-4"},"Visit"))),a.createElement("div",{className:"col-span-3 sm:col-span-2"},a.createElement("div",null,a.createElement("h1",{className:"font-bold text-3xl"},null==l?void 0:l.work.title),a.createElement("p",{className:"text-blueGray-400 text-xl mt-4 leading-relaxed"},null==l?void 0:l.work.description)),a.createElement(m.U0,{className:"mt-10 prose-lg"},(0,s.h)(null==l?void 0:l.work.content.json)),null!=l&&l.work.screenshotCollection.items.length?a.createElement("div",{className:"mt-14"},a.createElement("h4",{className:"text-xl font-bold"},"Screenshot"),a.createElement(p,{className:"grid grid-cols-2 sm:grid-cols-3 mt-6 gap-6"},null==l?void 0:l.work.screenshotCollection.items.map((function(e,t){return a.createElement("a",{href:e.url,rel:"noreferrer",target:"_blank",key:t,className:"block bg-blueGray-900"},a.createElement("img",{className:"w-full object-cover h-full",src:e.url,alt:e.title}))})))):null)))},v=n(2698),b=n(9463),N=n(3750),w=function(){return a.createElement("div",null,a.createElement("div",{className:"sm:flex items-center"},a.createElement("div",{className:"sm:w-1/2"},a.createElement("div",null,a.createElement("div",{className:"bg-blueGray-700 rounded-full inline-flex items-center text-xs uppercase pr-4"},a.createElement("span",{className:"bg-indigo-600 rounded-l-full px-3 text-xs font-medium py-1 mr-2"},"Featured"),"Sen"),a.createElement("div",null,a.createElement("h2",{className:"text-4xl sm:text-5xl leading-tight sm:leading-12 font-black mt-6"},"The modern Next.js and GraphQL boilerplate")),a.createElement("ul",{className:"mt-12 flex -mx-2 items-center"},a.createElement("li",{className:"px-2"},a.createElement("a",{href:"https://github.com/jamastek/sen",target:"_blank",rel:"noreferrer",className:"text-lg flex items-center mr-2 sm:mr-4"},a.createElement("span",{className:"mr-2"},"Github"),a.createElement(N.Tfp,null))),a.createElement("li",{className:"px-2"},a.createElement(b.WZi,{size:20})),a.createElement("li",{className:"px-2"},a.createElement(b.pNp,{size:20})),a.createElement("li",{className:"px-2"},a.createElement(b._T8,{size:20})),a.createElement("li",{className:"px-2"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 106 128",height:"20"},a.createElement("path",{fill:"#d1d5db",fillRule:"evenodd",d:"M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z",clipRule:"evenodd"}))),a.createElement("li",{className:"px-2"},a.createElement(b.YnA,{size:20}))))),a.createElement("div",{className:"sm:w-1/2 hidden sm:block"},a.createElement("div",null,a.createElement("img",{style:{height:260},className:"w-full object-contain",src:"https://res.cloudinary.com/muhrusdi/image/upload/v1622428743/linearmr.png",alt:""})))))},x=function(){var e=(0,i.Ps)(l||(l=(0,o.Z)(["\n    query GetWorkCollection {\n      workCollection {\n        items {\n          sys {\n            id\n          }\n          title\n          description\n          featuredImage {\n            url\n          }\n          techsCollection {\n            items {\n              ... on TechIcon {\n                name\n              }\n            }\n          }\n          category {\n            ... on WorkCategory {\n              title\n            }\n          }\n        }\n      }\n      openSourceCollection {\n        items {\n          name\n          description\n          github\n          preview\n        }\n      }\n    }\n  "]))),t=(0,u.a)(e),n=t.loading,r=t.data;return a.createElement("div",null,a.createElement("div",{className:"mt-8"},a.createElement(w,null)),a.createElement("div",{className:"mt-32"},a.createElement("ul",{className:"grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8"},n?a.createElement(a.Fragment,null,a.createElement("li",null,a.createElement(v.I,null)),a.createElement("li",null,a.createElement(v.I,null)),a.createElement("li",null,a.createElement(v.I,null))):null,r?r.workCollection.items.map((function(e,t){return a.createElement("li",{key:t},a.createElement(v.Z,{data:e}))})):null)),a.createElement("div",{className:"mt-32"},a.createElement("div",{className:"text-center"},a.createElement("h2",{className:"text-2xl font-bold"},"Open Source Contribution")),a.createElement("ul",{className:"grid grid-cols-1 mt-8 sm:grid-cols-3 md:grid-cols-4 gap-8"},null==r?void 0:r.openSourceCollection.items.map((function(e,t){return a.createElement("li",{key:t},a.createElement(v.Z.Mini,{data:e}))})))))},T=n(5012),_=function(){return a.createElement(T.Z,null,a.createElement(c.Router,{basepath:"/work"},a.createElement(x,{path:"/"}),a.createElement(y,{path:"/:slug"})))}}}]);
//# sourceMappingURL=component---src-pages-work-tsx-7e4a2411dbcc966ff94c.js.map