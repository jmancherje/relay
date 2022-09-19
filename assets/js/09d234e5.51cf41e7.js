"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[10794],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,p=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(p,c(c({ref:n},l),{},{components:t})):r.createElement(p,c({ref:n},l))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(39960),o=t(44256),a=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var s=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return a.createElement(c,null,a.createElement(l,null),a.createElement(s,null),a.createElement(u,null))},f=function(){return a.createElement(c,null,a.createElement(s,null),a.createElement(u,null))};const m=function(){return(0,o.fbContent)({internal:a.createElement(d,null),external:a.createElement(f,null)})}},39976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>f});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=t(68629),c=["components"],s={id:"use-relay-environment",title:"useRelayEnvironment",slug:"/api-reference/use-relay-environment/",description:"API reference for useRelayEnvironment, a React hook used to access the Relay environment from context",keywords:["environment","context"]},l=void 0,u={unversionedId:"api-reference/hooks/use-relay-environment",id:"version-v13.0.0/api-reference/hooks/use-relay-environment",title:"useRelayEnvironment",description:"API reference for useRelayEnvironment, a React hook used to access the Relay environment from context",source:"@site/versioned_docs/version-v13.0.0/api-reference/hooks/use-relay-environment.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-relay-environment/",permalink:"/docs/v13.0.0/api-reference/use-relay-environment/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/hooks/use-relay-environment.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1663607246,formattedLastUpdatedAt:"9/19/2022",frontMatter:{id:"use-relay-environment",title:"useRelayEnvironment",slug:"/api-reference/use-relay-environment/",description:"API reference for useRelayEnvironment, a React hook used to access the Relay environment from context",keywords:["environment","context"]},sidebar:"version-v13.0.0/docs",previous:{title:"RelayEnvironmentProvider",permalink:"/docs/v13.0.0/api-reference/relay-environment-provider/"},next:{title:"usePreloadedQuery",permalink:"/docs/v13.0.0/api-reference/use-preloaded-query/"}},d={},f=[{value:"<code>useRelayEnvironment</code>",id:"userelayenvironment",level:2}],m={toc:f};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"userelayenvironment"},(0,a.mdx)("inlineCode",{parentName:"h2"},"useRelayEnvironment")),(0,a.mdx)("p",null,"Hook used to access a Relay environment that was set by a ",(0,a.mdx)("a",{parentName:"p",href:"../relay-environment-provider"},(0,a.mdx)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider")),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const React = require('React');\n\nconst {useRelayEnvironment} = require('react-relay');\n\nfunction MyComponent() {\n  const environment = useRelayEnvironment();\n\n  const handler = useCallback(() => {\n    // For example, can be used to pass the environment to functions\n    // that require a Relay environment.\n    commitMutation(environment, ...);\n  }, [environment])\n\n  return (...);\n}\n\nmodule.exports = MyComponent;\n")),(0,a.mdx)(i.Z,{mdxType:"DocsRating"}))}p.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,o=0;const a={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in a||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?a[n].resolve(e.data.response):a[n].reject(new Error(e.data.error)),delete a[n]})));const n=o++,t=new Promise(((e,t)=>{a[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,c),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=a(t(47596)),n.uidocs=a(t(17483)),n.feedback=a(t(24855)),n.inpageeditor=a(t(27312));const i=["internal","external"];function c(e){return l(e),u()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function d(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=l,n.isInternal=u,n.hasEphemeralDiffNumber=function(){return Boolean(d())},n.getEphemeralDiffNumber=d,n.FbInternalOnly=function(e){return u()?e.children:null},n.OssOnly=function(e){return u()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const o=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:a}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:a}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(n){a(n)}}function c(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);