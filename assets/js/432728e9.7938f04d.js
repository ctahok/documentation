"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(3117),r=(n(7294),n(3905));const l={id:"rover-commands",sidebar_position:3},o="Rover commands",i={unversionedId:"rover/rover-commands",id:"version-2203.1/rover/rover-commands",title:"Rover commands",description:"Commonly used commands",source:"@site/versioned_docs/version-2203.1/rover/commands.md",sourceDirName:"rover",slug:"/rover/rover-commands",permalink:"/documentation/docs/rover/rover-commands",draft:!1,editUrl:"https://github.com/aztfmod/documentation/tree/main/website/versioned_docs/version-2203.1/rover/commands.md",tags:[],version:"2203.1",sidebarPosition:3,frontMatter:{id:"rover-commands",sidebar_position:3},sidebar:"cafSidebar",previous:{title:"Rover versions and tools",permalink:"/documentation/docs/rover/rover-tools"},next:{title:"Rover Ignite",permalink:"/documentation/docs/rover/rover-ignite"}},s={},d=[{value:"Commonly used commands",id:"commonly-used-commands",level:2},{value:"Login",id:"login",level:2},{value:"Landing zones commands",id:"landing-zones-commands",level:2},{value:"Examples",id:"examples",level:2},{value:"untaint",id:"untaint",level:3},{value:"Workspace management",id:"workspace-management",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rover-commands"},"Rover commands"),(0,r.kt)("h2",{id:"commonly-used-commands"},"Commonly used commands"),(0,r.kt)("p",null,"Beyond a container, rover is your one-stop tool to help on landing zone and landing zones state management."),(0,r.kt)("p",null,"What people love about rover is the ubiquity it gives them and seamless transition from local development environment with pipelines. In this articles, you will find the most commonly used commands for rover and some details on the state locator process."),(0,r.kt)("p",null,"Rover is by nature multi-subscription, and in landing zones worlds, the subscription where you want to deploy your resource is just another parameter of rover, just as the subscription where to store the state files and locate the launchpad."),(0,r.kt)("h2",{id:"login"},"Login"),(0,r.kt)("p",null,"The first command you will have to run is ",(0,r.kt)("inlineCode",{parentName:"p"},"rover login"),":"),(0,r.kt)("p",null,"You can run a plain rover login:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rover login\n")),(0,r.kt)("p",null,"You can specify additional context to restrict the token, like the tenant name and subscription to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rover login --tenant [tenant_name.onmicrosoft.com or tenant_guid (optional)] --subscription [subscription_id_to_target(optional)]\n")),(0,r.kt)("p",null,"You can log out running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rover logout\n")),(0,r.kt)("h2",{id:"landing-zones-commands"},"Landing zones commands"),(0,r.kt)("p",null,"Once authentication is completed, a typical rover command looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rover \\\n -lz /tf/caf/landingzones/caf_launchpad \\\n -var-folder /tf/caf/configuration/contoso/platform/level0/launchpad \\\n -tfstate_subscription_id a-b-c-d-e \\\n -target_subscription f-g-h-i \\\n -tfstate caf_launchpad.tfstate \\\n -log-severity ERROR \\\n -launchpad \\\n -env contoso \\\n -level level0 \\\n -p ${TF_DATA_DIR}/caf_launchpad.tfstate.tfplan \\\n -a plan\n")),(0,r.kt)("p",null,"The following table summarizes the most common parameters and their default values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"argument"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-lz"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to landing zone (",(0,r.kt)("inlineCode",{parentName:"td"},".tf")," files) to be executed. This is typically ",(0,r.kt)("inlineCode",{parentName:"td"},"/tf/caf/landingzones/caf_launchpad"),"  , ",(0,r.kt)("inlineCode",{parentName:"td"},"/tf/caf/landingzones/caf_solution")," or any add-ons from ",(0,r.kt)("inlineCode",{parentName:"td"},"/tf/caf/landingzones/caf_solution/add-ons"),". This could also be your own custom written Terraform files."),(0,r.kt)("td",{parentName:"tr",align:null},"/tf/caf/landingzones/caf_launchpad")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-var-folder"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the set of configuration files. All ",(0,r.kt)("inlineCode",{parentName:"td"},".tfvars")," files in directory will be expanded."),(0,r.kt)("td",{parentName:"tr",align:null},"/tf/caf/configuration/contoso/platform/level0/launchpad")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-env"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"String that defines a name for an environment to use. This is defined as  (used in the state locator function as described below.)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contoso"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-level"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the level in the CAF hierarchy where to deploy the resources (possible value are level1-level4)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"level1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-a"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Action to take with the current parameters, possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"plan"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"apply"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"destroy"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"validate"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"refresh"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"graph"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"import"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"output"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"taint"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"untaint"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'state list'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'state rm'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'state show'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plan"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-log-severity"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the Terraform log verbosity this sets the ",(0,r.kt)("inlineCode",{parentName:"td"},"TF_IN_AUTOMATION")," parameters, possible options are: ",(0,r.kt)("inlineCode",{parentName:"td"},"TRACE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DEBUG"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"INFO"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WARN")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-tfstate_subscription_id"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If no value specified, rover is assuming the currently logged-in subscription from az cli context."),(0,r.kt)("td",{parentName:"tr",align:null},"GUID of the subscription containing the tfstate (launchpad). This will be used to locate and store the tfstate files."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a-b-c-d-e  "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-target_subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If no value specified, rover is assuming the currently logged-in subscription from az cli context."),(0,r.kt)("td",{parentName:"tr",align:null},"GUID of the subscription where to deploy the resources."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a-b-c-d-e"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-workspace"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tfstate")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the storage account container where to store the tfstate for this landing zone. This could be used to isolate landing zones from each others by specifying Azure AD RBAC entries on the specific container withing the storage account."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"my_container"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the location where to store the plan file, if not specified a plan file will be automatically created for you when you specify ",(0,r.kt)("inlineCode",{parentName:"td"},"-a apply ")," and will be stored ",(0,r.kt)("inlineCode",{parentName:"td"},"in ${TF_DATA_DIR}")),(0,r.kt)("td",{parentName:"tr",align:null},"${TF_DATA_DIR}/caf_launchpad.tfstate.tfplan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-launchpad"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag that indicates that the current deployment is a launchpad."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-launchpad "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-tfc"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag that indicates that the current deployment will use the TFC configured settings to store the state (refer to the Use TFC section of this guide)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-tfc "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-skip-permission-check"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to skip the check that the currently logged-in principal is owner of the target subscription (only checked for launchpad)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-skip-permission-check "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-impersonate-sp-from-keyvault-url"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag that indicates rover to use impersonate the Service Principal and use the credentials stored in the Azure Key Vault which URL is specified as parameter. Requires launchpad_credentials landing zone to be setup (more details to be published soon.)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-impersonate-sp-from-keyvault-url https://myakv.vault.azure.net/"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"untaint"},"untaint"),(0,r.kt)("p",null,"When a resource has been marked as tainted and you want to untaint it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg is tainted, so must be replaced\n+/- resource "azurerm_storage_container" "stg" {\n      ~ has_immutability_policy = false -> (known after apply)\n      ~ has_legal_hold          = false -> (known after apply)\n      ~ id                      = "https://xxxxxxxxxxxxxxxx.blob.core.windows.net/di001" -> (known after apply)\n      ~ metadata                = {} -> (known after apply)\n        name                    = "di001"\n      ~ resource_manager_id     = "/subscriptions/000000000-0000-0000-0000-000000000000/resourceGroups/cont-rg-data-landing-zone-storage-lqi/providers/Microsoft.Storage/storageAccounts/xxxxxxxxxxxxxxx/blobServices/default/containers/di001" -> (known after apply)\n        # (2 unchanged attributes hidden)\n    }\n')),(0,r.kt)("p",null,"You need to extract the terraform resource. In our example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg\n')),(0,r.kt)("p",null,"and run the following rover command. You need to wrap the resource under double quotes and escape the quotes in the square brakets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'rover \\\n  --impersonate-sp-from-keyvault-url https://cont-kv-scl-xxx.vault.azure.net/ \\  // Remove this line if you are not using service principals\n  -lz /tf/caf/landingzones/caf_solution \\\n  -tfstate_subscription_id 000000000-0000-0000-0000-000000000000 \\\n  -target_subscription 000000000-0000-00000-00000000 \\\n  -tfstate data-landing-zone_prod_level3.tfstate \\\n  -env contoso \\\n  -level level3 \\\n  -w data-landing-zone-prod `\\\n  -p ${TF_DATA_DIR}/data-landing-zone_prod_level3.tfstate.tfplan \\\n  -a untaint "module.solution.module.storage_containers[\\"storageWorkspace_di001\\"].azurerm_storage_container.stg" \n')),(0,r.kt)("p",null,"When executed the rover will display a similar output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Terraform has been successfully initialized!\nTerraform init return code 0\n@calling other\nrunning terraform untaint -state=/home/vscode/.terraform.cache/contoso/rover_jobs/20220316003626962686570/tfstates/level3/data-landing-zone-prod/data-landing-zone_prod_level3.tfstate  module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg\nResource instance module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg has been successfully untainted.\nTerraform untaint return code: 0\n')),(0,r.kt)("h2",{id:"workspace-management"},"Workspace management"),(0,r.kt)("p",null,"In the previous section, workspace is used as a argument to specify where to place the tfstate (in-lieu of the default ",(0,r.kt)("inlineCode",{parentName:"p"},"tfstate")," container inside the storage account), rover workspace can be used as a command to manage workspaces:"),(0,r.kt)("p",null,"Create a workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rover workspace create application-workspace -level level1 -env contoso-sandpit\n")),(0,r.kt)("p",null,"Delete a workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rover workspace delete application-workspace -level level1 -env contoso-sandpit\n")),(0,r.kt)("p",null,"List all workspaces for a level in an environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rover workspace list -level level1 -env contoso-sandpit\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Although this is possible to create the workspace containers with rover, we recommend you create and manage them via Terraform code.")))}u.isMDXComponent=!0}}]);