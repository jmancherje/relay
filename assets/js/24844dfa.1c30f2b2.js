(self.webpackChunk=self.webpackChunk||[]).push([[71317],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?i.createElement(h,a(a({ref:t},u),{},{components:r})):i.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36280:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>u,default:()=>d});var i=r(22122),n=r(19756),o=(r(67294),r(3905)),a=["components"],c={id:"architecture-overview",title:"Architecture Overview",original_id:"architecture-overview"},l=void 0,s={unversionedId:"architecture-overview",id:"version-v1.6.2/architecture-overview",isDocsHomePage:!1,title:"Architecture Overview",description:'This document together Runtime Architecture and Compiler Architecture describe the high-level architecture of Relay "Modern". The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about using Relay to build products, the other sections might be more helpful.',source:"@site/versioned_docs/version-v1.6.2/PrinciplesAndArchitecture-Overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/docs/v1.6.2/architecture-overview",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.2/PrinciplesAndArchitecture-Overview.md",version:"v1.6.2",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1640796052,formattedLastUpdatedAt:"12/29/2021",frontMatter:{id:"architecture-overview",title:"Architecture Overview",original_id:"architecture-overview"},sidebar:"version-v1.6.2/docs",previous:{title:"Thinking In Relay",permalink:"/docs/v1.6.2/thinking-in-relay"},next:{title:"Compiler Architecture",permalink:"/docs/v1.6.2/compiler-architecture"}},u=[{value:"Core Modules",id:"core-modules",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document together ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.6.2/runtime-architecture"},"Runtime Architecture")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.6.2/compiler-architecture"},"Compiler Architecture"),' describe the high-level architecture of Relay "Modern". The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about ',(0,o.kt)("em",{parentName:"p"},"using")," Relay to build products, the other sections might be more helpful."),(0,o.kt)("h2",{id:"core-modules"},"Core Modules"),(0,o.kt)("p",null,"Relay Modern is composed of three core modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Relay Compiler:")," A GraphQL to GraphQL optimizing ",(0,o.kt)("em",{parentName:"li"},"compiler"),", providing general utilities for transforming and optimizing queries as well as generating build artifacts. A novel feature of the compiler is that it facilitates experimentation with new GraphQL features - in the form of custom directives - by making it easy to translate code using these directives into standard, spec-compliant GraphQL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Relay Runtime:")," A full-featured, high-performance GraphQL ",(0,o.kt)("em",{parentName:"li"},"runtime"),' that can be used to build higher-level client APIs. The runtime features a normalized object cache, optimized "write" and "read" operations, a generic abstraction for incrementally fetching field data (such as for pagination), garbage collection for removing unreferenced cache entries, optimistic mutations with arbitrary logic,  support for building subscriptions and live queries, and more.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"React/Relay:")," A high-level ",(0,o.kt)("em",{parentName:"li"},"product API")," that integrates the Relay Runtime with React. This is the primary public interface to Relay for most product developers, featuring APIs to fetch the data for a query or define data dependencies for reusable components (aka containers).")),(0,o.kt)("p",null,"Note that these modules are ",(0,o.kt)("em",{parentName:"p"},"loosely coupled"),'. For example, the compiler emits representations of queries in a well-defined format that the runtime consumes (the "Concrete" node interfaces in ',(0,o.kt)("inlineCode",{parentName:"p"},"RelayConcreteNode"),"), such that the compiler implementation could be swapped out if desired. React/Relay relies only on the well-documented public interface of the runtime, such that the actual implementation can be swapped out (in fact we've upgraded the classic Relay core to also implement this same API). We hope that this loose coupling will allow the community to explore new use-cases such as the development of specialized product APIs using the Relay runtime or integrations of the runtime with view libraries other than React."))}d.isMDXComponent=!0}}]);