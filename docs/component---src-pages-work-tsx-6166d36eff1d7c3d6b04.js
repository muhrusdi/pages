(self.webpackChunkmhmmr_github_io=self.webpackChunkmhmmr_github_io||[]).push([[611],{9806:function(e,t,n){"use strict";var r,l=n(7294),o=(r=l)&&"object"==typeof r&&"default"in r?r.default:r,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var i,u,s=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var l=function(e){return e&&e.Math==Math&&e},o=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a=function(e){try{return!!e()}catch(t){return!0}},i=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,m={f:s&&!u.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:u},f=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,p=function(e){return d.call(e).slice(8,-1)},E="".split,g=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==p(e)?E.call(e,""):Object(e)}:Object,h=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!y(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!y(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,N=function(e,t){return b.call(e,t)},T=o.document,_=y(T)&&y(T.createElement),I=function(e){return _?T.createElement(e):{}},w=!i&&!a((function(){return 7!=Object.defineProperty(I("div"),"a",{get:function(){return 7}}).a})),x=Object.getOwnPropertyDescriptor,O={f:i?x:function(e,t){if(e=h(e),t=v(t,!0),w)try{return x(e,t)}catch(n){}if(N(e,t))return f(!m.f.call(e,t),e[t])}},S=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},D=Object.defineProperty,k={f:i?D:function(e,t,n){if(S(e),t=v(t,!0),S(n),w)try{return D(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},L=i?function(e,t,n){return k.f(e,t,f(1,n))}:function(e,t,n){return e[t]=n,e},A=function(e,t){try{L(o,e,t)}catch(n){o[e]=t}return t},j="__core-js_shared__",P=o[j]||A(j,{}),R=Function.toString;"function"!=typeof P.inspectSource&&(P.inspectSource=function(e){return R.call(e)});var C,M,G,H=P.inspectSource,Y=o.WeakMap,B="function"==typeof Y&&/native code/.test(H(Y)),K=r((function(e){(e.exports=function(e,t){return P[e]||(P[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),U=0,z=Math.random(),Z=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+z).toString(36)},F=K("keys"),W=function(e){return F[e]||(F[e]=Z(e))},V={},Q=o.WeakMap;if(B){var q=P.state||(P.state=new Q),$=q.get,X=q.has,J=q.set;C=function(e,t){return t.facade=e,J.call(q,e,t),t},M=function(e){return $.call(q,e)||{}},G=function(e){return X.call(q,e)}}else{var ee=W("state");V[ee]=!0,C=function(e,t){return t.facade=e,L(e,ee,t),t},M=function(e){return N(e,ee)?e[ee]:{}},G=function(e){return N(e,ee)}}var te={set:C,get:M,has:G,enforce:function(e){return G(e)?M(e):C(e,{})},getterFor:function(e){return function(t){var n;if(!y(t)||(n=M(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,l,a){var c,i=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,s=!!a&&!!a.noTargetGet;"function"==typeof l&&("string"!=typeof t||N(l,"name")||L(l,"name",t),(c=n(l)).source||(c.source=r.join("string"==typeof t?t:""))),e!==o?(i?!s&&e[t]&&(u=!0):delete e[t],u?e[t]=l:L(e,t,l)):u?e[t]=l:A(t,l)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||H(this)}))})),re=o,le=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?le(re[e])||le(o[e]):re[e]&&re[e][t]||o[e]&&o[e][t]},ae=Math.ceil,ce=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?ce:ae)(e)},ue=Math.min,se=Math.max,me=Math.min,fe=function(e){return function(t,n,r){var l,o,a=h(t),c=(l=a.length)>0?ue(ie(l),9007199254740991):0,i=function(e,t){var n=ie(e);return n<0?se(n+t,0):me(n,t)}(r,c);if(e&&n!=n){for(;c>i;)if((o=a[i++])!=o)return!0}else for(;c>i;i++)if((e||i in a)&&a[i]===n)return e||i||0;return!e&&-1}},de={includes:fe(!0),indexOf:fe(!1)},pe=de.indexOf,Ee=function(e,t){var n,r=h(e),l=0,o=[];for(n in r)!N(V,n)&&N(r,n)&&o.push(n);for(;t.length>l;)N(r,n=t[l++])&&(~pe(o,n)||o.push(n));return o},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=ge.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return Ee(e,he)}},ve={f:Object.getOwnPropertySymbols},be=oe("Reflect","ownKeys")||function(e){var t=ye.f(S(e)),n=ve.f;return n?t.concat(n(e)):t},Ne=function(e,t){for(var n=be(t),r=k.f,l=O.f,o=0;o<n.length;o++){var a=n[o];N(e,a)||r(e,a,l(t,a))}},Te=/#|\.prototype\./,_e=function(e,t){var n=we[Ie(e)];return n==Oe||n!=xe&&("function"==typeof t?a(t):!!t)},Ie=_e.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},we=_e.data={},xe=_e.NATIVE="N",Oe=_e.POLYFILL="P",Se=_e,De=O.f,ke=function(e,t){var n,r,l,a,c,i=e.target,u=e.global,s=e.stat;if(n=u?o:s?o[i]||A(i,{}):(o[i]||{}).prototype)for(r in t){if(a=t[r],l=e.noTargetGet?(c=De(n,r))&&c.value:n[r],!Se(u?r:i+(s?".":"#")+r,e.forced)&&void 0!==l){if(typeof a==typeof l)continue;Ne(a,l)}(e.sham||l&&l.sham)&&L(a,"sham",!0),ne(n,r,a,e)}},Le=Object.keys||function(e){return Ee(e,ge)},Ae=m.f,je=function(e){return function(t){for(var n,r=h(t),l=Le(r),o=l.length,a=0,c=[];o>a;)n=l[a++],i&&!Ae.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Pe=(je(!0),je(!1));ke({target:"Object",stat:!0},{values:function(e){return Pe(e)}}),re.Object.values;var Re,Ce,Me="process"==p(o.process),Ge=oe("navigator","userAgent")||"",He=o.process,Ye=He&&He.versions,Be=Ye&&Ye.v8;Be?Ce=(Re=Be.split("."))[0]+Re[1]:Ge&&(!(Re=Ge.match(/Edge\/(\d+)/))||Re[1]>=74)&&(Re=Ge.match(/Chrome\/(\d+)/))&&(Ce=Re[1]);var Ke,Ue=Ce&&+Ce,ze=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(Me?38===Ue:Ue>37&&Ue<41)})),Ze=ze&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Fe=K("wks"),We=o.Symbol,Ve=Ze?We:We&&We.withoutSetter||Z,Qe=i?Object.defineProperties:function(e,t){S(e);for(var n,r=Le(t),l=r.length,o=0;l>o;)k.f(e,n=r[o++],t[n]);return e},qe=oe("document","documentElement"),$e=W("IE_PROTO"),Xe=function(){},Je=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ke=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ke?function(e){e.write(Je("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ke):((t=I("iframe")).style.display="none",qe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Je("document.F=Object")),e.close(),e.F);for(var n=ge.length;n--;)delete et.prototype[ge[n]];return et()};V[$e]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Xe.prototype=S(e),n=new Xe,Xe.prototype=null,n[$e]=e):n=et(),void 0===t?n:Qe(n,t)},rt=(N(Fe,tt="unscopables")&&(ze||"string"==typeof Fe[tt])||(ze&&N(We,tt)?Fe[tt]=We[tt]:Fe[tt]=Ve("Symbol."+tt)),Fe[tt]),lt=Array.prototype;null==lt[rt]&&k.f(lt,rt,{configurable:!0,value:nt(null)});var ot,at=de.includes;ke({target:"Array",proto:!0},{includes:function(e){return at(this,e,arguments.length>1?arguments[1]:void 0)}}),ot="includes",lt[rt][ot]=!0;var ct,it,ut,st=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,l){return e.call(t,n,r,l)}}return function(){return e.apply(t,arguments)}},mt=Function.call;ct="includes",st(mt,o.Array.prototype[ct],it),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ut||(ut={}));var ft,dt=ut;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ft||(ft={}));var pt,Et=ft,gt=[dt.PARAGRAPH,dt.HEADING_1,dt.HEADING_2,dt.HEADING_3,dt.HEADING_4,dt.HEADING_5,dt.HEADING_6,dt.OL_LIST,dt.UL_LIST,dt.HR,dt.QUOTE,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],ht=[dt.HR,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],yt=((pt={})[dt.OL_LIST]=[dt.LIST_ITEM],pt[dt.UL_LIST]=[dt.LIST_ITEM],pt[dt.LIST_ITEM]=gt.slice(),pt[dt.QUOTE]=[dt.PARAGRAPH],pt),vt={nodeType:dt.DOCUMENT,data:{},content:[{nodeType:dt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},bt=Object.freeze({isInline:function(e){return Object.values(Et).includes(e.nodeType)},isBlock:function(e){return Object.values(dt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=dt,t.CONTAINERS=yt,t.EMPTY_DOCUMENT=vt,t.INLINES=Et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=gt,t.VOID_BLOCKS=ht,t.helpers=bt}(i={exports:{}},i.exports),i.exports);(u=s)&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")&&u.default;var m,f,d=s.BLOCKS,p=(s.CONTAINERS,s.EMPTY_DOCUMENT,s.INLINES),E=s.MARKS,g=(s.TOP_LEVEL_BLOCKS,s.VOID_BLOCKS,s.helpers);function h(e,t){return e.map((function(e,n){return r=y(e,t),o=n,l.isValidElement(r)&&null===r.key?l.cloneElement(r,{key:o}):r;var r,o}))}function y(e,t){var n=t.renderNode,r=t.renderMark,l=t.renderText;if(g.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),l?l(e.value):e.value);var a=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,a):o.createElement(o.Fragment,null,a)}var v=((m={})[d.DOCUMENT]=function(e,t){return t},m[d.PARAGRAPH]=function(e,t){return o.createElement("p",null,t)},m[d.HEADING_1]=function(e,t){return o.createElement("h1",null,t)},m[d.HEADING_2]=function(e,t){return o.createElement("h2",null,t)},m[d.HEADING_3]=function(e,t){return o.createElement("h3",null,t)},m[d.HEADING_4]=function(e,t){return o.createElement("h4",null,t)},m[d.HEADING_5]=function(e,t){return o.createElement("h5",null,t)},m[d.HEADING_6]=function(e,t){return o.createElement("h6",null,t)},m[d.EMBEDDED_ENTRY]=function(e,t){return o.createElement("div",null,t)},m[d.UL_LIST]=function(e,t){return o.createElement("ul",null,t)},m[d.OL_LIST]=function(e,t){return o.createElement("ol",null,t)},m[d.LIST_ITEM]=function(e,t){return o.createElement("li",null,t)},m[d.QUOTE]=function(e,t){return o.createElement("blockquote",null,t)},m[d.HR]=function(){return o.createElement("hr",null)},m[p.ASSET_HYPERLINK]=function(e){return N(p.ASSET_HYPERLINK,e)},m[p.ENTRY_HYPERLINK]=function(e){return N(p.ENTRY_HYPERLINK,e)},m[p.EMBEDDED_ENTRY]=function(e){return N(p.EMBEDDED_ENTRY,e)},m[p.HYPERLINK]=function(e,t){return o.createElement("a",{href:e.data.uri},t)},m),b=((f={})[E.BOLD]=function(e){return o.createElement("b",null,e)},f[E.ITALIC]=function(e){return o.createElement("i",null,e)},f[E.UNDERLINE]=function(e){return o.createElement("u",null,e)},f[E.CODE]=function(e){return o.createElement("code",null,e)},f);function N(e,t){return o.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?y(e,{renderNode:a({},v,t.renderNode),renderMark:a({},b,t.renderMark),renderText:t.renderText}):null}},5711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r,l,o=n(7294),a=n(9499),c=n(5761),i=n(778),u=n(7587),s=n(9806),m=n(430),f=n(3610),d=n(9692),p=d.ZP.article.withConfig({displayName:"styled__Articles",componentId:"sc-6ldz38-0"})(["a{color:#6f66ff;}"]),E=d.ZP.div.withConfig({displayName:"styled__Grid",componentId:"sc-6ldz38-1"})(["a{grid-template-columns:repeat(2,minmax(0,1fr));height:120px;@media (min-width:640px){height:200px;}&:hover{img{object-fit:contain;}}}"]),g=d.ZP.ul.withConfig({displayName:"styled__IconList",componentId:"sc-6ldz38-2"})({svg:{height:20,width:20}}),h=d.ZP.img.withConfig({displayName:"styled__ImageStyled",componentId:"sc-6ldz38-3"})(["height:200px;@media (min-width:640px){height:400px;}"]),y=function(e){var t=(0,u.ZP)(r||(r=(0,c.Z)(["\n    query GetWork($id: String!) {\n      work(id: $id) {\n        title\n        sys {\n          id\n        }\n        description\n        featuredImage {\n          url\n        }\n        content {\n          json\n        }\n        techsCollection {\n          items {\n            ... on TechIcon {\n              name\n            }\n          }\n        }\n        link\n        category {\n          ... on WorkCategory {\n            title\n          }\n        }\n        screenshotCollection {\n          items {\n            url\n            title\n            description\n          }\n        }\n      }\n    }\n  "]))),n=(0,i.useQuery)(t,{variables:{id:e.slug}}),l=n.data,a=n.loading;return o.createElement("div",null,o.createElement("div",{className:"grid gap-8 sm:grid-cols-3"},o.createElement("div",{className:"col-span-3"},a?o.createElement(h,{as:"div",className:"bg-blueGray-900 w-full rounded-lg"}):o.createElement(h,{className:"object-cover object-top w-full rounded-lg",src:null==l?void 0:l.work.featuredImage.url,alt:null==l?void 0:l.work.title})),o.createElement("div",{className:"col-span-3 sm:col-span-1"},o.createElement("div",null,o.createElement("h4",{className:"uppercase text-sm font-bold text-blueGray-500"},"Tech"),o.createElement(g,{className:"mt-4 flex -mx-2 items-center"},null==l?void 0:l.work.techsCollection.items.map((function(e,t){return o.createElement("li",{className:"px-2",key:t},o.createElement(m.nw,{icon:f.Z[e.name].icon,text:f.Z[e.name].name}))})))),o.createElement("div",{className:"py-3 px-4 mt-6 text-center block uppercase text-sm rounded-lg text-blueGray-400 font-medium bg-blueGray-900"},o.createElement("span",null,(null==l?void 0:l.work.category.title)||"Loading")),null!=l&&l.work.link?o.createElement("div",{className:"mt-4"},o.createElement("a",{href:null==l?void 0:l.work.link,target:"_blank",rel:"noreferrer",className:"bg-indigo-600 text-white text-center block py-3 uppercase font-semibold text-sm rounded-lg hover:bg-indigo-700 transition-all px-4"},"Visit")):o.createElement("div",{className:"mt-4"},o.createElement("button",{disabled:!0,className:"bg-gray-300 disabled cursor-default text-gray-500 text-center w-full py-3 uppercase font-semibold text-sm rounded-lg px-4"},"Visit"))),o.createElement("div",{className:"col-span-3 sm:col-span-2"},o.createElement("div",null,o.createElement("h1",{className:"font-bold text-3xl"},null==l?void 0:l.work.title),o.createElement("p",{className:"text-blueGray-400 text-xl mt-4 leading-relaxed"},null==l?void 0:l.work.description)),o.createElement(p,{className:"mt-10 prose-lg"},(0,s.h)(null==l?void 0:l.work.content.json)),null!=l&&l.work.screenshotCollection.items.length?o.createElement("div",{className:"mt-14"},o.createElement("h4",{className:"text-xl font-bold"},"Screenshot"),o.createElement(E,{className:"grid grid-cols-2 sm:grid-cols-3 mt-6 gap-6"},null==l?void 0:l.work.screenshotCollection.items.map((function(e,t){return o.createElement("a",{href:e.url,rel:"noreferrer",target:"_blank",key:t,className:"block bg-blueGray-900"},o.createElement("img",{className:"w-full object-cover h-full",src:e.url,alt:e.title}))})))):null)))},v=n(8650),b=n(9463),N=n(3750),T=function(){return o.createElement("div",null,o.createElement("div",{className:"sm:flex items-center"},o.createElement("div",{className:"sm:w-1/2"},o.createElement("div",null,o.createElement("div",{className:"bg-blueGray-700 rounded-full inline-flex items-center text-xs uppercase pr-4"},o.createElement("span",{className:"bg-indigo-600 rounded-l-full px-3 text-xs font-medium py-1 mr-2"},"Featured"),"Senja"),o.createElement("div",null,o.createElement("h2",{className:"text-4xl sm:text-5xl leading-tight sm:leading-12 font-black mt-6"},"The modern Next.js and GraphQL boilerplate")),o.createElement("ul",{className:"mt-12 flex -mx-2 items-center"},o.createElement("li",{className:"px-2"},o.createElement("a",{href:"https://github.com/jamastek/senja",target:"_blank",rel:"noreferrer",className:"text-lg flex items-center mr-2 sm:mr-4"},o.createElement("span",{className:"mr-2"},"Github"),o.createElement(N.Tfp,null))),o.createElement("li",{className:"px-2"},o.createElement(b.WZi,{size:20})),o.createElement("li",{className:"px-2"},o.createElement(b.pNp,{size:20})),o.createElement("li",{className:"px-2"},o.createElement(b._T8,{size:20})),o.createElement("li",{className:"px-2"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 106 128",height:"20"},o.createElement("path",{fill:"#d1d5db",fillRule:"evenodd",d:"M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z",clipRule:"evenodd"}))),o.createElement("li",{className:"px-2"},o.createElement(b.YnA,{size:20}))))),o.createElement("div",{className:"sm:w-1/2 hidden sm:block"},o.createElement("div",null,o.createElement("img",{style:{height:260},className:"w-full object-contain",src:"https://res.cloudinary.com/muhrusdi/image/upload/v1622428743/linearmr.png",alt:""})))))},_=function(){var e=(0,u.ZP)(l||(l=(0,c.Z)(["\n    query GetWorkCollection {\n      workCollection {\n        items {\n          sys {\n            id\n          }\n          title\n          description\n          featuredImage {\n            url\n          }\n          techsCollection {\n            items {\n              ... on TechIcon {\n                name\n              }\n            }\n          }\n          category {\n            ... on WorkCategory {\n              title\n            }\n          }\n        }\n      }\n      openSourceCollection {\n        items {\n          name\n          description\n          github\n          preview\n        }\n      }\n    }\n  "]))),t=(0,i.useQuery)(e),n=t.loading,r=t.data;return o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement("div",{className:"mt-8"},o.createElement(T,null)),o.createElement("div",{className:"mt-32"},o.createElement("ul",{className:"grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8"},n?o.createElement(o.Fragment,null,o.createElement("li",null,o.createElement(v.I,null)),o.createElement("li",null,o.createElement(v.I,null)),o.createElement("li",null,o.createElement(v.I,null))):null,r?r.workCollection.items.map((function(e,t){return o.createElement("li",{key:t},o.createElement(v.Z,{data:e}))})):null)),o.createElement("div",{className:"mt-32"},o.createElement("div",{className:"text-center"},o.createElement("h2",{className:"text-2xl font-bold"},"Open Source Contribute")),o.createElement("ul",{className:"grid grid-cols-1 mt-8 sm:grid-cols-3 md:grid-cols-4 gap-8"},null==r?void 0:r.openSourceCollection.items.map((function(e,t){return o.createElement("li",{key:t},o.createElement(v.Z.Mini,{data:e}))}))))))},I=n(4719),w=function(){return o.createElement(I.Z,null,o.createElement(a.Router,{basepath:"/work"},o.createElement(_,{path:"/"}),o.createElement(y,{path:"/:slug"})))}}}]);
//# sourceMappingURL=component---src-pages-work-tsx-6166d36eff1d7c3d6b04.js.map