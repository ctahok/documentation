"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[543],{998:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return b}});var o=n(7462),a=n(3366),r=n(7294),i=n(3905),l=n(2004),s=n(2389),d=n(9548),c=n(6010),u="tabItem_LplD";function p(e){var t,n,a,i=e.lazy,l=e.block,s=e.defaultValue,p=e.values,m=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,d.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===s?s:null!=(t=null!=s?s:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,d.UB)(),w=b.tabGroupChoices,y=b.setTabGroupChoices,z=(0,r.useState)(k),N=z[0],T=z[1],C=[],Z=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=w[m];null!=x&&x!==N&&f.some((function(e){return e.value===x}))&&T(x)}var M=function(e){var t=e.currentTarget,n=C.indexOf(t),o=f[n].value;o!==N&&(Z(t),T(o),null!=m&&y(m,o))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=C.indexOf(e.currentTarget)+1;n=C[o]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},f.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:M,onClick:M},a,{className:(0,c.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,s.Z)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}var h=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)},g=["components"],f={id:"org-setup",sidebar_position:1},v="Setup your organization",k={unversionedId:"enterprise-scale/landingzones/platform/org-setup",id:"enterprise-scale/landingzones/platform/org-setup",title:"Setup your organization",description:"Organize your private repository",source:"@site/docs/enterprise-scale/landingzones/platform/org-setup.mdx",sourceDirName:"enterprise-scale/landingzones/platform",slug:"/enterprise-scale/landingzones/platform/org-setup",permalink:"/documentation/docs/enterprise-scale/landingzones/platform/org-setup",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/enterprise-scale/landingzones/platform/org-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"org-setup",sidebar_position:1},sidebar:"cafSidebar",previous:{title:"Getting started",permalink:"/documentation/docs/enterprise-scale/landingzones/eslz-intro"},next:{title:"Ignite the platform",permalink:"/documentation/docs/enterprise-scale/landingzones/platform/elsz-level0"}},b=[{value:"Organize your private repository",id:"organize-your-private-repository",children:[{value:"Clone the platform starter repository",id:"clone-the-platform-starter-repository",children:[],level:3},{value:"Visual Studio code",id:"visual-studio-code",children:[],level:3},{value:"Add remote development extension",id:"add-remote-development-extension",children:[],level:3},{value:"Re-open vscode in the dev container",id:"re-open-vscode-in-the-dev-container",children:[],level:3},{value:"Clone the CAF Terraform landingzones code",id:"clone-the-caf-terraform-landingzones-code",children:[],level:3},{value:"Switch to the selected landingzones version",id:"switch-to-the-selected-landingzones-version",children:[],level:3}],level:2},{value:"Review the platform-definition folder",id:"review-the-platform-definition-folder",children:[{value:"Customize the templates",id:"customize-the-templates",children:[],level:3}],level:2}],w={toc:b};function y(e){var t=e.components,r=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,o.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-your-organization"},"Setup your organization"),(0,i.kt)("h2",{id:"organize-your-private-repository"},"Organize your private repository"),(0,i.kt)("p",null,"The first step is create a private repository in your current organization. It has to be a git repository."),(0,i.kt)("p",null,"The video below shows you how to setup a private GitHub repository you are going to use to store the configuration of your platform landing zones."),(0,i.kt)(l.Z,{controls:!0,url:"https://youtu.be/1tbXXOM1s-o",mdxType:"ReactPlayer"}),(0,i.kt)("h3",{id:"clone-the-platform-starter-repository"},"Clone the platform starter repository"),(0,i.kt)("p",null,"The platform starter project is an empty environment that get you started with your initial configuration files and create a coherent stack."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/caf-terraform-landingzones-platform-starter"},"platform starter project is here"),". "),(0,i.kt)("p",null,'If you are using it from GitHub, you can directly select "Use this template", once created you can clone it locally or open it in GitHub Codespace'),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(h,{value:"Locally",label:"Locally",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Adjust the name of your organization and repository\ngit clone git://github.com/<org>/<repo> contoso && cd contoso\n")),(0,i.kt)("p",null,"You should observe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Cloning into 'contoso'...\nremote: Enumerating objects: 429, done.\nremote: Counting objects: 100% (429/429), done.\nremote: Compressing objects: 100% (320/320), done.\nremote: Total 429 (delta 110), reused 307 (delta 77), pack-reused 0\nReceiving objects: 100% (429/429), 2.93 MiB | 1.52 MiB/s, done.\nResolving deltas: 100% (110/110), done.\n")),(0,i.kt)("p",null,"Open Visual Studio Code from the contoso folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"code .\n")),(0,i.kt)("p",null,"Trust the repository"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8526).Z,width:"567",height:"368"})," "),(0,i.kt)("h3",{id:"visual-studio-code"},"Visual Studio code"),(0,i.kt)("p",null,"Visual Studio code should open your cloned repository and display the following structure."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5273).Z,width:"3718",height:"2474"})),(0,i.kt)("h3",{id:"add-remote-development-extension"},"Add remote development extension"),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"Remote - Containers")," extension and click Install."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(662).Z,width:"567",height:"316"})),(0,i.kt)("h3",{id:"re-open-vscode-in-the-dev-container"},"Re-open vscode in the dev container"),(0,i.kt)("p",null,"Click on the green bottom left button\nFrom the menu select the option"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3936).Z,width:"850",height:"402"}))),(0,i.kt)(h,{value:"Codespace",label:"Codespace",mdxType:"TabItem"},(0,i.kt)("p",null,"Once you have created your repo, create the Codespace: "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4068).Z,width:"782",height:"882"})),(0,i.kt)("p",null,"The Codespace is being instantiated:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1544).Z,width:"1478",height:"1276"})),(0,i.kt)("p",null,"And you are ready to go: "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5998).Z,width:"2686",height:"1792"})))),(0,i.kt)("p",null,"On the right lower end side of the editor, open a ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh")," terminal to start exploring the folders and branch you are using."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9247).Z,width:"567",height:"361"})),(0,i.kt)("p",null,"You should now see the following terminal. This terminal is where you will run all terminal commands described in this on-boarding tutorial."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9485).Z,width:"2234",height:"430"})),(0,i.kt)("h3",{id:"clone-the-caf-terraform-landingzones-code"},"Clone the CAF Terraform landingzones code"),(0,i.kt)("p",null,"Now that you have the configuration folder ready to use, let's clone the logic of landing zones (the Terraform code) that we will use to run the commands."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The CAF Terraform landingzones framework assumes the landingzones Terraform code is cloned in a repository called landingzones."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not use another name as ",(0,i.kt)("strong",{parentName:"p"},"landingzones")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Azure/caf-terraform-landingzones.git landingzones\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Cloning into 'landingzones'...\nremote: Enumerating objects: 9067, done.\nremote: Counting objects: 100% (393/393), done.\nremote: Compressing objects: 100% (281/281), done.\nremote: Total 9067 (delta 161), reused 295 (delta 108), pack-reused 8674\nReceiving objects: 100% (9067/9067), 11.65 MiB | 6.83 MiB/s, done.\nResolving deltas: 100% (5792/5792), done.\nUpdating files: 100% (406/406), done.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Go to the landingzones folder\n\u279c  caf git:(main) \u2717 cd landingzones \n\n# Note all folders are starting with /tf/caf in the devcontainers. \n\u279c  landingzones git:(main) \u2717 pwd\n/tf/caf/landingzones\n\u279c  landingzones git:(main) \u2717 \n")),(0,i.kt)("h3",{id:"switch-to-the-selected-landingzones-version"},"Switch to the selected landingzones version"),(0,i.kt)("p",null,"The CAF Terraform landingzones are released on regular basis. In order to align the deployment instructions, you need to make sure the Terraform code is also using the correct branch or tag."),(0,i.kt)("p",null,"From the terminal, run the following command to select the branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 2202.0\nBranch '2202.0' set up to track remote branch '2202.0' from 'origin'.\nSwitched to a new branch '2202.0'\n\u279c  landingzones git:(2202.0) \u2717 \n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The branch name in parentheses has changed from ",(0,i.kt)("strong",{parentName:"p"},"main")," to ",(0,i.kt)("strong",{parentName:"p"},"2202.0")))),(0,i.kt)("h2",{id:"review-the-platform-definition-folder"},"Review the platform-definition folder"),(0,i.kt)("p",null,"The framework uses a folder called ",(0,i.kt)("strong",{parentName:"p"},"platform-definition")," stored in the devcontainer."),(0,i.kt)("p",null,"This folder can host different configurations of your platform landingzones.\nFor example, you can setup an engineering and production to represent two main configurations where you can first test the configuration and setting in the engineering platform landingzones and then when validated, move that configuration into the production. This is an approach using a mono-repo but some customers would prefer to have different config git repo to separete engineering from production. More documentation on this topics will come soon. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8262).Z,width:"604",height:"1326"})),(0,i.kt)("p",null,"You can explore the content of this folder and get more details on the files and folders."),(0,i.kt)("h3",{id:"customize-the-templates"},"Customize the templates"),(0,i.kt)("p",null,"To customize the templates and getting starting quick, you can use teh find in folders feature"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1031).Z,width:"794",height:"1142"})),(0,i.kt)("p",null,"Search for the term ",(0,i.kt)("strong",{parentName:"p"},"<replace",">")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6684).Z,width:"614",height:"1040"})),(0,i.kt)("p",null,"You can now select each items and adjust the values accordingly, we will review the various files in the following sections."),(0,i.kt)("p",null,"Go to the next page to learn how to customize the default template."))}y.isMDXComponent=!0},4068:function(e,t,n){t.Z=n.p+"assets/images/codespace1-4d0e9a656837b8dff1aaed7ccc161902.png"},1544:function(e,t,n){t.Z=n.p+"assets/images/codespace2-8fe1d766524b70344d325cdaf5b25398.png"},5998:function(e,t,n){t.Z=n.p+"assets/images/codespace3-eacaf35c84edcab1a523c357ceee0983.png"},662:function(e,t,n){t.Z=n.p+"assets/images/extension-remote-containers-fa1c318418560105bf5ac7b392e9abfc.png"},1031:function(e,t,n){t.Z=n.p+"assets/images/find-replace-22d0c43d51752809dd279b05871fddf5.png"},6684:function(e,t,n){t.Z=n.p+"assets/images/replace-cccec3dcb05d84595d86efa098c66fce.png"},9247:function(e,t,n){t.Z=n.p+"assets/images/vscode-open-zsh-5e73513bdfab5e55636bf00fa722bc98.png"},8262:function(e,t,n){t.Z=n.p+"assets/images/vscode-orgs-template-folder-structure-c07a117310a88e5346a1266b429451ea.png"},3936:function(e,t,n){t.Z=n.p+"assets/images/vscode-reopen-container-a51644795f3d80f6b660563399d5e9c5.png"},8526:function(e,t,n){t.Z=n.p+"assets/images/vscode-trust-folder-8bc17d33e3daaf22ddae46059770d0f1.png"},9485:function(e,t,n){t.Z=n.p+"assets/images/vscode-zsh-3f5b582169dfb9652ba1e30eec848e70.png"},5273:function(e,t,n){t.Z=n.p+"assets/images/vscode-f682b3e0edb145f921707a828dedd723.png"}}]);