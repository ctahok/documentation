"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[845],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"lz-compute",sidebar_position:2},u="Compute Nodes",l={unversionedId:"fundamentals/lz-compute",id:"fundamentals/lz-compute",title:"Compute Nodes",description:"Since many organizations do not desire to share sensitive credentials or privileges on public running agents, most of the time, enterprises will delegate running a landing zone to dedicated compute nodes, running from their private virtual networks. Depending on your Continuous Integration and Continuous Deployment toolset, those compute capabilities could be called self-hosted agents, runners, etc.",source:"@site/docs/fundamentals/compute.md",sourceDirName:"fundamentals",slug:"/fundamentals/lz-compute",permalink:"/documentation/docs/fundamentals/lz-compute",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/fundamentals/compute.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lz-compute",sidebar_position:2},sidebar:"cafSidebar",previous:{title:"Levels Hierarchy",permalink:"/documentation/docs/fundamentals/lz-intro"},next:{title:"Code-less composition across state files",permalink:"/documentation/docs/fundamentals/lz-composition"}},c=[{value:"Authentication and authorization",id:"authentication-and-authorization",children:[],level:2}],p={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compute-nodes"},"Compute Nodes"),(0,a.kt)("p",null,"Since many organizations do not desire to share sensitive credentials or privileges on public running agents, most of the time, enterprises will delegate running a landing zone to dedicated compute nodes, running from their private virtual networks. Depending on your Continuous Integration and Continuous Deployment toolset, those compute capabilities could be called self-hosted agents, runners, etc."),(0,a.kt)("p",null,"Those compute capabilities would need to run containers as the rover and could be implemented in the shape of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("strong",{parentName:"li"},"Azure Virtual Machines")," for each level in a given environment, each VM can contain a set of runners(container instances), that would be ready to be invoked and run in parallel if required."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("strong",{parentName:"li"},"Azure Azure Container Instance")," for a given environment, a container group will be deployed with a set of container of container runners. Scaling up and down those runners and reliability should be planned by deploying multiple container groups in multiple zones or regions depending on your criteria. "),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("strong",{parentName:"li"},"Azure Kubernetes Services")," for a given environment. Each level would be impersonated in a different node pool, and each node pool would use ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity"},"Azure Active Directory pod identity"),". If there is a need to increase the number of runners for a particular level, this could be achieved using AKS pod autoscaler capability.")),(0,a.kt)("p",null,"CAF Terraform landing zones provide by default a set of DevOps runners for the following platforms: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/devops/pipelines/agents/agents"},"Azure DevOps"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/runner/"},"Git Lab"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/cloud/agents/index.html"},"Terraform Cloud and Terraform Enterprise")," and are available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aztfmod/rover/tree/master/agents"},"GitHub")," for customization."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of DevOps Compute Nodes for the GitOps environment",src:n(9139).Z,width:"812",height:"384"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Figure 1: Example of DevOps Compute Nodes for the GitOps environment")),(0,a.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,a.kt)("p",null,"As default methodology, CAF Terraform landing zones use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview"},"Azure Managed Identities")," capability for the DevOps compute nodes running on Azure."),(0,a.kt)("p",null,"Customer can also use Service principals to be used at different levels of the hierarchy, the down-side of using Service Principal is to manage lifecycle of the attached secrets."),(0,a.kt)("p",null,"The authorization related to either type of principals can be defined as part of the CAF Terraform landing zones configuration syntax."))}d.isMDXComponent=!0},9139:function(e,t,n){t.Z=n.p+"assets/images/terraform-model-gitops-f50c61aba6ca7dbb1e1fb732850c7b38.png"}}]);