(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1693],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={slug:"mainsail-modal-tip",title:"Modal Sizing",author:"Josh Weaver",author_title:"Mainsail UI Core Team",author_url:"https://github.com/3cordguy",author_image_url:"https://avatars.githubusercontent.com/u/30707961?v=4",tags:["modals","tips"]},s="Mainsail Tip 'o the week",c={permalink:"/blog/mainsail-modal-tip",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-06-23-modal-tips.md",source:"@site/blog/2021-06-23-modal-tips.md",title:"Modal Sizing",description:"Modal sizing is primarily controlled by content. This means you only need to concern yourself with the size of the body.",date:"2021-06-23T00:00:00.000Z",formattedDate:"June 23, 2021",tags:[{label:"modals",permalink:"/blog/tags/modals"},{label:"tips",permalink:"/blog/tags/tips"}],readingTime:.32,truncated:!1,prevItem:{title:"Mainsail 1.7.0 is released",permalink:"/blog/mainsail-release-170"},nextItem:{title:"Mainsail 1.5.0 is released",permalink:"/blog/mainsail-release-150"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modal sizing is primarily controlled by content. This means you only need to concern yourself with the size of the body.\nAs such, it includes an optional prop called bodyWidth (and bodyHeight though rarely needed) that supports passing an array of sizes in for the 3 breakpoints we use in our app."),(0,a.kt)("p",null,"\u26a1\ufe0f See a demo of a responsive Modal setup ",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/mainsail-responsive-modal?file=src/App.js"},"here on Stackblitz"),"."))}m.isMDXComponent=!0}}]);