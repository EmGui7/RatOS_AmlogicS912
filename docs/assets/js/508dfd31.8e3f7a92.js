"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[985],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5400:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={slug:"ratos-v1-0-released",title:"RatOS V1.0 Released!",authors:["miklschmidt"],tags:["RatOS","Releases"]},l=void 0,u={permalink:"/blog/ratos-v1-0-released",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-14-ratos-v1-0-released.mdx",source:"@site/blog/2021-11-14-ratos-v1-0-released.mdx",title:"RatOS V1.0 Released!",description:"RatOS V1.0 is here!",date:"2021-11-14T00:00:00.000Z",formattedDate:"November 14, 2021",tags:[{label:"RatOS",permalink:"/blog/tags/rat-os"},{label:"Releases",permalink:"/blog/tags/releases"}],readingTime:1.82,truncated:!1,authors:[{name:"Mikkel Schmidt",title:"Creator of RatOS",url:"https://github.com/miklschmidt",imageURL:"https://github.com/miklschmidt.png",key:"miklschmidt"}]},c={authorsImageUrls:[void 0]},p=[{value:"RatOS V1.0 is here!",id:"ratos-v10-is-here",children:[{value:"Automated firmware updates",id:"automated-firmware-updates",children:[],level:3},{value:"RPi as additional MCU.",id:"rpi-as-additional-mcu",children:[],level:3},{value:"More powerful macro configuration",id:"more-powerful-macro-configuration",children:[],level:3},{value:"Mainsail is here!",id:"mainsail-is-here",children:[],level:3},{value:"THANK YOU for your support",id:"thank-you-for-your-support",children:[],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ratos-v10-is-here"},"RatOS V1.0 is here!"),(0,o.kt)("p",null,"RatOS V1.0 is finally released, it's been a long road to get here, thank you everyone who has been testing and supporting me get this release completed.\nThere's a lot of new exciting features that i'm dying to share with you all."),(0,o.kt)("h3",{id:"automated-firmware-updates"},"Automated firmware updates"),(0,o.kt)("p",null,"That's right. RatOS will now flash your board for you everytime klipper is updated.\nThis has been a high priority for me, since much of my time has been spent answering questions about the infamous version mismatch error.\nIt hasn't been very clear to beginners, what they need to do to get things working again, after having updated klipper and getting presented with an error.\nThis is now a thing of the past!"),(0,o.kt)("p",null,"Unfortunately there's an exception for the Octopus Pro 429, since there's currently no way to flash that board automatically.\nRead more about that in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-429#firmware-installation"},"Octopus Pro 429 Board Documentation")),(0,o.kt)("h3",{id:"rpi-as-additional-mcu"},"RPi as additional MCU."),(0,o.kt)("p",null,"Automated firmware updates made it possible to add the RPi as an additional mcu, it's now preconfigured and automatically updated, so you can use\nit for additional GPIO's, ADXL345 or other sensors if you need to. This also opens up for using dual ADXL345's on bed slingers."),(0,o.kt)("h3",{id:"more-powerful-macro-configuration"},"More powerful macro configuration"),(0,o.kt)("p",null,"We've added a bunch of parameters you can configure for changing the behavior of the built-in RatOS macro's, what your START_PRINT to skip the bed mesh calibration? No problem. Want the carriage to park in the front during pauses? Easy! How about starting your print with a primeline? You've got it! Read more in the ",(0,o.kt)("a",{parentName:"p",href:"/changelog#updating-from-v-coreos-rc2"},"Update Guide")),(0,o.kt)("h3",{id:"mainsail-is-here"},"Mainsail is here!"),(0,o.kt)("p",null,"RatOS now ships with Mainsail as the default UI. The Mainsail team has been teasing a lot of awesome features lately and now RatOS users get them too."),(0,o.kt)("h3",{id:"thank-you-for-your-support"},"THANK YOU for your support"),(0,o.kt)("p",null,"The amount of support and encouragement i've recieved from the community has been heartwarming, and totally makes the long nights worth it!\nThank you for helping and thank you for using RatOS!"),(0,o.kt)("p",null,"If you wish to donate towards a new spool of filament or a cup of coffee you can do so here: ",(0,o.kt)("a",{parentName:"p",href:"https://paypal.me/miklschmidt"},"paypal.me/miklschmidt"),". Thank you very much!"))}h.isMDXComponent=!0}}]);