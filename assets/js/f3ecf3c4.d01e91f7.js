"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"eslz-choices",sidebar_position:2},s="Choose your deployment mode",u={unversionedId:"azure-landing-zones/landingzones/platform/eslz-choices",id:"azure-landing-zones/landingzones/platform/eslz-choices",title:"Choose your deployment mode",description:"Based on your configuration you can select the following deployment guide:",source:"@site/docs/azure-landing-zones/landingzones/platform/choice.md",sourceDirName:"azure-landing-zones/landingzones/platform",slug:"/azure-landing-zones/landingzones/platform/eslz-choices",permalink:"/documentation/docs/azure-landing-zones/landingzones/platform/eslz-choices",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/azure-landing-zones/landingzones/platform/choice.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"eslz-choices",sidebar_position:2},sidebar:"cafSidebar",previous:{title:"Setup your organization",permalink:"/documentation/docs/azure-landing-zones/landingzones/platform/org-setup"},next:{title:"Core files settings reference",permalink:"/documentation/docs/azure-landing-zones/landingzones/platform/elsz-files-reference"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"choose-your-deployment-mode"},"Choose your deployment mode"),(0,a.kt)("p",null,"Based on your configuration you can select the following deployment guide:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,a.kt)("th",{parentName:"tr",align:null},"Prerequisites"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Single subscription lab"),(0,a.kt)("td",{parentName:"tr",align:null},"- ",(0,a.kt)("strong",{parentName:"td"},"Azure Active Directory"),": Global administrator. ",(0,a.kt)("br",null)," - ",(0,a.kt)("strong",{parentName:"td"},"Subscription"),": 1 pre-created subscription, with owner privileges ",(0,a.kt)("br",null)," - ",(0,a.kt)("strong",{parentName:"td"},"Management groups"),': "Management Group Contributor" permissions on a branch or root management group.'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/documentation/docs/azure-landing-zones/landingzones/platform/single%20reuse/elsz-single-reuse"},"Getting started"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Multi subscriptions (reuse existing subscriptions)"),(0,a.kt)("td",{parentName:"tr",align:null},"- ",(0,a.kt)("strong",{parentName:"td"},"Azure Active Directory"),": User. ",(0,a.kt)("br",null)," - ",(0,a.kt)("strong",{parentName:"td"},"Subscription"),": 4 pre-created subscriptions, with owner privileges ",(0,a.kt)("br",null)," - ",(0,a.kt)("strong",{parentName:"td"},"Management groups"),': "management group contributor" permissions on a branch or root management group.'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/documentation/docs/azure-landing-zones/landingzones/platform/eslz-choices"},"Documentation to be published"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Multi subscriptions (creating new subscriptions with EA/MCA)"),(0,a.kt)("td",{parentName:"tr",align:null},"- ",(0,a.kt)("strong",{parentName:"td"},"Azure Enterprise Agreement or MCA"),": User with department permissions to create. ",(0,a.kt)("br",null)," - ",(0,a.kt)("strong",{parentName:"td"},"Azure Active Directory"),": User. ",(0,a.kt)("br",null)," - ",(0,a.kt)("strong",{parentName:"td"},"Subscription"),": 1 pre-created subscription, with owner privileges ",(0,a.kt)("br",null)," - ",(0,a.kt)("strong",{parentName:"td"},"Management groups"),': "management group contributor" permissions on a branch or root management group.'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/documentation/docs/azure-landing-zones/landingzones/platform/eslz-choices"},"Documentation to be published"))))))}d.isMDXComponent=!0}}]);