"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[29520],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){return function(n){var t=u(n.components);return a.createElement(e,o({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,h=c["".concat(i,".").concat(p)]||c[p]||m[p]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(39960),r=t(44256),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var l=function(){var e=o.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(s,null,o.createElement(d,null),o.createElement(l,null),o.createElement(c,null))},p=function(){return o.createElement(s,null,o.createElement(l,null),o.createElement(c,null))};const m=function(){return(0,r.fbContent)({internal:o.createElement(u,null),external:o.createElement(p,null)})}},11575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>N,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=t(68629),s=t(44256),l=["components"],d={id:"loading-states",title:"Loading States with Suspense",slug:"/guided-tour/rendering/loading-states/",description:"Relay guide to loading states",keywords:["suspense","loading","glimmer","fallback","spinner"]},c=void 0,u={unversionedId:"guided-tour/rendering/loading-states",id:"version-v13.0.0/guided-tour/rendering/loading-states",title:"Loading States with Suspense",description:"Relay guide to loading states",source:"@site/versioned_docs/version-v13.0.0/guided-tour/rendering/loading-states.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/loading-states/",permalink:"/docs/v13.0.0/guided-tour/rendering/loading-states/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/rendering/loading-states.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1663651154,formattedLastUpdatedAt:"9/20/2022",frontMatter:{id:"loading-states",title:"Loading States with Suspense",slug:"/guided-tour/rendering/loading-states/",description:"Relay guide to loading states",keywords:["suspense","loading","glimmer","fallback","spinner"]},sidebar:"version-v13.0.0/docs",previous:{title:"Variables",permalink:"/docs/v13.0.0/guided-tour/rendering/variables/"},next:{title:"Error States with ErrorBoundaries",permalink:"/docs/v13.0.0/guided-tour/rendering/error-states/"}},p={},m=[{value:"Loading fallbacks with Suspense Boundaries",id:"loading-fallbacks-with-suspense-boundaries",level:2},{value:"Transitions and Updates that Suspend",id:"transitions-and-updates-that-suspend",level:2},{value:"How We Use Suspense in Relay",id:"how-we-use-suspense-in-relay",level:2},{value:"Queries",id:"queries",level:3},{value:"Fragments",id:"fragments",level:3},{value:"Transitions",id:"transitions",level:3}],h=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},f=h("FbSuspenseDefinition"),g=h("FbSuspenseMoreInfo"),y=h("FbSuspensePlaceholder"),w=h("FbSuspenseTransitionsAndUpdatesThatSuspend"),b=h("FbSuspenseInRelayFragments"),x=h("FbSuspenseInRelayTransitions"),v={toc:m};function N(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"As you may have noticed, we mentioned that using ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," will render data from a query that was being fetched from the server, but we didn't elaborate on how to render a loading UI (such as a glimmer) while that data is still being fetched. We will cover that in this section."),(0,o.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(f,{mdxType:"FbSuspenseDefinition"})),(0,o.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("p",null,"To render loading states while a query is being fetched, we rely on ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),". Suspense is a new feature in React that allows components to interrupt or ",(0,o.mdx)("em",{parentName:"p"},'"suspend"'),' rendering in order to wait for some asynchronous resource (such as code, images or data) to be loaded; when a component "suspends", it indicates to React that the component isn\'t ',(0,o.mdx)("em",{parentName:"p"},'"ready"')," to be rendered yet, and won't be until the asynchronous resource it's waiting for is loaded. When the resource finally loads, React will try to render the component again.")),(0,o.mdx)("p",null,"This capability is useful for components to express asynchronous dependencies like data, code, or images that they require in order to render, and lets React coordinate rendering the loading states across a component tree as these asynchronous resources become available. More generally, the use of Suspense give us better control to implement more deliberately designed loading states when our app is loading for the first time or when it's transitioning to different states, and helps prevent accidental flickering of loading elements (such as spinners), which can commonly occur when loading sequences aren't explicitly designed and coordinated."),(0,o.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(g,{mdxType:"FbSuspenseMoreInfo"})),(0,o.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Note that this ",(0,o.mdx)("strong",{parentName:"p"},"DOES NOT"),' mean that "Suspense for Data Fetching" is ready for general implementation and adoption yet. ',(0,o.mdx)("strong",{parentName:"p"},"Support, general guidance, and requirements for usage of Suspense for Data Fetching are still not ready"),", and the React team is still defining what this guidance will be for upcoming React releases."),(0,o.mdx)("p",{parentName:"div"},"Even though there will be some limitations when Suspense is used in React 17, Relay Hooks are stable and on the trajectory for supporting upcoming releases of React."),(0,o.mdx)("p",{parentName:"div"},"For more information, see our ",(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("a",{parentName:"strong",href:"../../../migration-and-compatibility/suspense-compatibility/"},"Suspense Compatibility"))," guide.")))),(0,o.mdx)("h2",{id:"loading-fallbacks-with-suspense-boundaries"},"Loading fallbacks with Suspense Boundaries"),(0,o.mdx)("p",null,"When a component is suspended, we need to render a ",(0,o.mdx)("em",{parentName:"p"},"fallback")," in place of the component while we wait for it to become ",(0,o.mdx)("em",{parentName:"p"},'"ready"'),". In order to do so, we use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," component provided by React:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // Render a fallback using Suspense as a wrapper\n    <Suspense fallback={<LoadingGlimmer />}>\n      <CanSuspend />\n    </Suspense>\n  );\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," components can be used to wrap any component; if the target component suspends, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," will render the provided fallback until all its descendants become ",(0,o.mdx)("em",{parentName:"p"},'"ready"')," (i.e. until ",(0,o.mdx)("em",{parentName:"p"},"all")," of the suspended components within the subtree resolve). Usually, the fallback is used to render fallback loading states such as a glimmers and placeholders."),(0,o.mdx)("p",null,"Usually, different pieces of content in our  app might suspend, so we can show loading state until they are resolved by using ",(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // LoadingGlimmer is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent /> {/* MainContent may suspend */}\n    </Suspense>\n  );\n}\n")),(0,o.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(y,{mdxType:"FbSuspensePlaceholder"})),(0,o.mdx)("p",null,"Let's distill what's going on here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"If ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," suspends because it's waiting on some asynchronous resource (like data), the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Suspense")," component that wraps ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," will detect that it suspended, and will render the ",(0,o.mdx)("inlineCode",{parentName:"li"},"fallback")," element (i.e. the ",(0,o.mdx)("inlineCode",{parentName:"li"},"LoadingGlimmer")," in this case) up until ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," is ready to be rendered. Note that this also transitively includes descendants of ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent"),", which might also suspend.")),(0,o.mdx)("p",null,"What's nice about Suspense is that you have granular control about how to accumulate loading states for different parts of your component tree:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // A LoadingGlimmer for *_all_* content is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent />\n      <SecondaryContent /> {/* SecondaryContent can also suspend */}\n    </Suspense>\n  );\n}\n")),(0,o.mdx)(y,{mdxType:"FbSuspensePlaceholder"}),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In this case, both ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," may suspend while they load their asynchronous resources; by wrapping both in a ",(0,o.mdx)("inlineCode",{parentName:"li"},"Suspense"),", we can show a single loading state up until they are ",(0,o.mdx)("em",{parentName:"li"},"all")," ready, and then render the entire content in a single paint, after everything has successfully loaded."),(0,o.mdx)("li",{parentName:"ul"},"In fact, ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," may suspend for different reasons other than fetching data, but the same ",(0,o.mdx)("inlineCode",{parentName:"li"},"Suspense")," component can be used to render a fallback up until ",(0,o.mdx)("em",{parentName:"li"},"all")," components in the subtree are ready to be rendered. Note that this also transitively includes descendants of ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"SecondaryContent"),", which might also suspend.")),(0,o.mdx)("p",null,"Conversely, you can also decide to be more granular about your loading UI and wrap Suspense components around smaller or individual parts of your component tree:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    <>\n      {/* Show a separate loading UI for the LeftHandColumn */}\n      <Suspense fallback={<LeftColumnPlaceholder />}>\n        <LeftColumn />\n      </Suspense>\n\n      {/* Show a separate loading UI for both the Main and Secondary content */}\n      <Suspense fallback={<LoadingGlimmer />}>\n        <MainContent />\n        <SecondaryContent />\n      </Suspense>\n    </>\n  );\n}\n")),(0,o.mdx)(y,{mdxType:"FbSuspensePlaceholder"}),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In this case, we're showing 2 separate loading UIs:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"One to be shown until the ",(0,o.mdx)("inlineCode",{parentName:"li"},"LeftColumn")," becomes ready"),(0,o.mdx)("li",{parentName:"ul"},"And one to be shown until both the ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," become ready."))),(0,o.mdx)("li",{parentName:"ul"},"What is powerful about this is that by more granularly wrapping our components in Suspense, ",(0,o.mdx)("em",{parentName:"li"},"we allow other components to be rendered earlier as they become ready"),". In our example, by separately wrapping ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"SecondaryContent")," under ",(0,o.mdx)("inlineCode",{parentName:"li"},"Suspense"),", we're allowing ",(0,o.mdx)("inlineCode",{parentName:"li"},"LeftColumn")," to render as soon as it becomes ready, which might be earlier than when the content sections become ready.")),(0,o.mdx)("h2",{id:"transitions-and-updates-that-suspend"},"Transitions and Updates that Suspend"),(0,o.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(w,{mdxType:"FbSuspenseTransitionsAndUpdatesThatSuspend"})),(0,o.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," boundary fallbacks allow us to describe our loading placeholders when initially rendering some content, but our applications will also have transitions between different content. Specifically, when switching between two components within an already mounted boundary, the new component you're switching to might not have loaded all of its async dependencies, which means that it might also suspend."),(0,o.mdx)("p",null,"In these cases, we would still show the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," boundary fallbacks. However, this means that we would hide existing content in favor of showing the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Suspense")," fallback. In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.")),(0,o.mdx)("h2",{id:"how-we-use-suspense-in-relay"},"How We Use Suspense in Relay"),(0,o.mdx)("h3",{id:"queries"},"Queries"),(0,o.mdx)("p",null,"In our case, our query components are components that can suspend, so we use Suspense to render loading states while a query is being fetched. Let's see what that looks like in practice:"),(0,o.mdx)("p",null,"Say we have the following query renderer component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * MainContent.react.js\n *\n * Query Component\n */\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\nfunction MainContent(props) {\n  // Fetch and render a query\n  const data = usePreloadedQuery<...>(\n    graphql`...`,\n    props.queryRef,\n  );\n\n  return (...);\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nfunction App() {\n  return (\n    // LoadingGlimmer is rendered via the Suspense fallback\n    <Suspense fallback={<LoadingGlimmer />}>\n      <MainContent /> {/* MainContent may suspend */}\n    </Suspense>\n  );\n}\n")),(0,o.mdx)(y,{mdxType:"FbSuspensePlaceholder"}),(0,o.mdx)("p",null,"Let's distill what's going on here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"We have a ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, which is a query renderer that fetches and renders a query. ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," will ",(0,o.mdx)("em",{parentName:"li"},"suspend")," rendering when it attempts to fetch the query, indicating that it isn't ready to be rendered yet, and it will resolve when the query is fetched."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"Suspense "),"component that wraps ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," will detect that ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," suspended, and will render the ",(0,o.mdx)("inlineCode",{parentName:"li"},"fallback")," element (i.e. the ",(0,o.mdx)("inlineCode",{parentName:"li"},"LoadingGlimmer")," in this case) up until ",(0,o.mdx)("inlineCode",{parentName:"li"},"MainContent")," is ready to be rendered; that is, up until the query is fetched.")),(0,o.mdx)("h3",{id:"fragments"},"Fragments"),(0,o.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(b,{mdxType:"FbSuspenseInRelayFragments"})),(0,o.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("p",null,"Fragments are also integrated with Suspense in order to support rendering of data that's being ",(0,o.mdx)("inlineCode",{parentName:"p"},"@defer'"),"d or data that's partially available in the Relay Store (i.e. ",(0,o.mdx)("a",{parentName:"p",href:"../../reusing-cached-data/rendering-partially-cached-data/"},"partial rendering"),").")),(0,o.mdx)("h3",{id:"transitions"},"Transitions"),(0,o.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(x,{mdxType:"FbSuspenseInRelayTransitions"})),(0,o.mdx)("p",null,"Additionally, our APIs for refetching (",(0,o.mdx)("a",{parentName:"p",href:"../../refetching/"},"Refreshing and Refetching"),") and for ",(0,o.mdx)("a",{parentName:"p",href:"../../list-data/connections/"},"rendering connections")," are also integrated with Suspense; for these use cases, these APIs will also suspend."),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}N.isMDXComponent=!0},47596:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(n){o(n)}}function s(e){try{l(a.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(11737);n.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(n){o(n)}}function s(e){try{l(a.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,r=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=r++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,s),t}))}},24855:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(n){o(n)}}function s(e){try{l(a.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const r=t(11737);n.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(a){}}))}},44256:function(e,n,t){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const i=["internal","external"];function s(e){return d(e),c()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function c(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=s,n.fbInternalOnly=function(e){return s({internal:e})},n.validateFbContentArgs=d,n.isInternal=c,n.hasEphemeralDiffNumber=function(){return Boolean(u())},n.getEphemeralDiffNumber=u,n.FbInternalOnly=function(e){return c()?e.children:null},n.OssOnly=function(e){return c()?null:e.children}},27312:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(n){o(n)}}function s(e){try{l(a.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const r=t(11737);n.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:a,diff_number:o}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:a,diff_number:o}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(n){o(n)}}function s(e){try{l(a.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const r=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:a}})}))}}}]);