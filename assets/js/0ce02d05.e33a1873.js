(self.webpackChunk=self.webpackChunk||[]).push([[4157],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var a=t(44256),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function r(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var s=function(){var e=o.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},l=function(){return o.createElement(r,null,o.createElement(c,null),o.createElement(s,null))},d=function(){return o.createElement(r,null,o.createElement(s,null))};const p=function(){return(0,a.fbContent)({internal:o.createElement(l,null),external:o.createElement(d,null)})}},66495:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>c,metadata:()=>l,toc:()=>d,default:()=>m});var a=t(22122),o=t(19756),i=(t(67294),t(3905)),r=t(68629),s=(t(44256),["components"]),c={id:"advanced-pagination",title:"Advanced Pagination",slug:"/guided-tour/list-data/advanced-pagination/"},l={unversionedId:"guided-tour/list-data/advanced-pagination",id:"version-v11.0.0/guided-tour/list-data/advanced-pagination",isDocsHomePage:!1,title:"Advanced Pagination",description:"In this section we're going to cover how to implement more advanced pagination use cases than the default cases covered by usePaginationFragment.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/list-data/advanced-pagination.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/advanced-pagination/",permalink:"/docs/guided-tour/list-data/advanced-pagination/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/list-data/advanced-pagination.md",version:"v11.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1625149851,formattedLastUpdatedAt:"7/1/2021",frontMatter:{id:"advanced-pagination",title:"Advanced Pagination",slug:"/guided-tour/list-data/advanced-pagination/"},sidebar:"version-v11.0.0/docs",previous:{title:"Updating Connections",permalink:"/docs/guided-tour/list-data/updating-connections/"},next:{title:"Introduction",permalink:"/docs/guided-tour/updating-data/"}},d=[{value:"Pagination Over Multiple Connections",id:"pagination-over-multiple-connections",children:[]},{value:"Bi-directional Pagination",id:"bi-directional-pagination",children:[]},{value:"Custom Connection State",id:"custom-connection-state",children:[]},{value:"Refreshing connections",id:"refreshing-connections",children:[]},{value:"Prefetching Pages of a Connection",id:"prefetching-pages-of-a-connection",children:[]},{value:"Rendering One Page of Items at a Time",id:"rendering-one-page-of-items-at-a-time",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we're going to cover how to implement more advanced pagination use cases than the default cases covered by ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginationFragment"),"."),(0,i.kt)("h2",{id:"pagination-over-multiple-connections"},"Pagination Over Multiple Connections"),(0,i.kt)("p",null,"If you need to paginate over multiple connections within the same component, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginationFragment")," multiple times:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import type {CombinedFriendsListComponent_user$key} from 'CombinedFriendsListComponent_user.graphql';\nimport type {CombinedFriendsListComponent_viewer$key} from 'CombinedFriendsListComponent_viewer.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: CombinedFriendsListComponent_user$key,\n  viewer: CombinedFriendsListComponent_viewer$key,\n};\n\nfunction CombinedFriendsListComponent(props: Props) {\n\n  const {data: userData, ...userPagination} = usePaginationFragment(\n    graphql`\n      fragment CombinedFriendsListComponent_user on User {\n        name\n        friends\n          @connection(\n            key: \"CombinedFriendsListComponent_user_friends_connection\"\n          ) {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const {data: viewerData, ...viewerPagination} = usePaginationFragment(\n    graphql`\n      fragment CombinedFriendsListComponent_user on Viewer {\n        actor {\n          ... on User {\n            name\n            friends\n              @connection(\n                key: \"CombinedFriendsListComponent_viewer_friends_connection\"\n              ) {\n              edges {\n                node {\n                  name\n                  age\n                }\n              }\n            }\n          }\n        }\n      }\n    `,\n    props.viewer,\n  );\n\n  return (...);\n}\n")),(0,i.kt)("p",null,"However, we recommend trying to keep a single connection per component, to keep the components easier to follow."),(0,i.kt)("h2",{id:"bi-directional-pagination"},"Bi-directional Pagination"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"../pagination/"},"Pagination")," section we covered how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginationFragment")," to paginate in a single ",(0,i.kt)("em",{parentName:"p"},'"forward"')," direction. However, connections also allow paginating in the opposite ",(0,i.kt)("em",{parentName:"p"},'"backward"')," direction. The meaning of ",(0,i.kt)("em",{parentName:"p"},'"forward"')," and ",(0,i.kt)("em",{parentName:"p"},'"backward"')," directions will depend on how the items in the connection are sorted, for example  ",(0,i.kt)("em",{parentName:"p"},'"forward"')," could mean more recent",(0,i.kt)("em",{parentName:"p"},', and "backward"')," could mean less recent."),(0,i.kt)("p",null,"Regardless of the semantic meaning of the direction, Relay also provides the same APIs to paginate in the opposite direction, using ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginationFragment"),", as long  as the ",(0,i.kt)("inlineCode",{parentName:"p"},"before")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"last")," connection arguments are also used along with ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"first"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListComponent_user$key} from 'FriendsListComponent_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  userRef: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {\n    data,\n    loadPrevious,\n    hasPrevious,\n    // ... forward pagination values\n  } = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(after: $after, before: $before, first: $first, last: $last)\n          @connection(key: \"FriendsListComponent_user_friends_connection\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    userRef,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      <List items={data.friends?.edges.map(edge => edge.node)}>\n        {node => {\n          return (\n            <div>\n              {node.name} - {node.age}\n            </div>\n          );\n        }}\n      </List>\n\n      {hasPrevious ? (\n        <Button onClick={() => loadPrevious(10)}>\n          Load more friends\n        </Button>\n      ) : null}\n\n      {/* Forward pagination controls can go simultaneously here */}\n    </>\n  );\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The APIs for both ",(0,i.kt)("em",{parentName:"li"},'"forward"')," and ",(0,i.kt)("em",{parentName:"li"},'"backward"')," are exactly the same, they're only named differently. When paginating forward, then the  ",(0,i.kt)("inlineCode",{parentName:"li"},"after")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"first")," connection arguments will be used, when paginating backward, the ",(0,i.kt)("inlineCode",{parentName:"li"},"before")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"last")," connection arguments will be used."),(0,i.kt)("li",{parentName:"ul"},"Note that the primitives for both ",(0,i.kt)("em",{parentName:"li"},'"forward"')," and ",(0,i.kt)("em",{parentName:"li"},'"backward"')," pagination are exposed from a single call to ",(0,i.kt)("inlineCode",{parentName:"li"},"usePaginationFragment"),", so both ",(0,i.kt)("em",{parentName:"li"},'"forward"')," and ",(0,i.kt)("em",{parentName:"li"},'"backward"')," pagination can be performed simultaneously in the same component.")),(0,i.kt)("h2",{id:"custom-connection-state"},"Custom Connection State"),(0,i.kt)("p",null,"By default, when using ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginationFragment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@connection"),", Relay will ",(0,i.kt)("em",{parentName:"p"},"append")," new pages of items to the connection when paginating ",(0,i.kt)("em",{parentName:"p"},'"forward",')," and ",(0,i.kt)("em",{parentName:"p"},"prepend")," new pages of items when paginating ",(0,i.kt)("em",{parentName:"p"},'"backward"'),". This means that your component will always render the ",(0,i.kt)("em",{parentName:"p"},"full")," connection, with ",(0,i.kt)("em",{parentName:"p"},"all")," of the items that have been accumulated so far via pagination, and/or items that have been added or removed via mutations or subscriptions."),(0,i.kt)("p",null,"However, it is possible that you'd need different behavior for how to merge and accumulate pagination results (or other updates to the connection), and/or derive local component state from changes to the connection. Some examples of this might be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keeping track of different ",(0,i.kt)("em",{parentName:"li"},"visible")," slices or windows of the connection."),(0,i.kt)("li",{parentName:"ul"},"Visually separating each ",(0,i.kt)("em",{parentName:"li"},"page")," of items. This requires knowledge of the exact set of items inside each page that has been fetched."),(0,i.kt)("li",{parentName:"ul"},'Displaying different ends of the same connection simultaneously, while keeping track of the "gaps" between them, and being able to merge results when preforming pagination between the gaps. For example, imagine rendering a list of comments where the oldest comments are displayed at the top, then a "gap" that can be interacted with to paginate, and then a section at the bottom which shows the most recent comments that have been added by the user or by real-time subscriptions.')),(0,i.kt)("p",null,"To address these more complex use cases, Relay is still working on a solution:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TBD")),(0,i.kt)("h2",{id:"refreshing-connections"},"Refreshing connections"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TBD")),(0,i.kt)("h2",{id:"prefetching-pages-of-a-connection"},"Prefetching Pages of a Connection"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TBD")),(0,i.kt)("h2",{id:"rendering-one-page-of-items-at-a-time"},"Rendering One Page of Items at a Time"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TBD")),(0,i.kt)(r.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);