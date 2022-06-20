"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{8367:function(e,a,n){n.d(a,{Z:function(){return v}});var s=n(5893),t=n(7294),o=n(1163);function l(e){var a=e.path,n=e.name,t=(0,o.useRouter)().pathname,l=t===a||t==="/"+a;return(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)("a",{className:"nav-link ".concat(l?"active":""),href:a,children:n})})}var c=n(1664),r=n.n(c);function i(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sticky-top",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(r(),{href:"/home",children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:"assets/svg/wells-garden-logo.svg",width:"48",className:"px-2"})})}),(0,s.jsx)("h1",{className:"my-1",children:(0,s.jsx)(r(),{href:"/home",children:(0,s.jsx)("a",{children:"Wells Garden"})})}),(0,s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,s.jsx)("span",{className:"navbar-toggler-icon"})}),(0,s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:(0,s.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,s.jsx)(l,{name:"Home",path:"home"}),(0,s.jsx)(l,{name:"About Us",path:"about-us"}),(0,s.jsx)(l,{name:"Plants",path:"plants"}),(0,s.jsx)(l,{name:"Ethos",path:"ethos"}),(0,s.jsx)(l,{name:"Prices",path:"prices"})]})})]})})})}function d(){return(0,s.jsxs)("footer",{className:"footer bg-light py-3",role:"contentinfo",children:[(0,s.jsx)("div",{className:"footer-top",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-3 col-md-6 text-center text-md-start",children:[(0,s.jsx)("h3",{children:"Wells Garden"}),(0,s.jsx)("address",{children:(0,s.jsx)("a",{href:"mailto:sales@wellsgarden.co.uk",children:"sales@wellsgarden.co.uk"})})]}),(0,s.jsxs)("div",{className:"col-lg-2 col-md-6 text-center text-md-start",children:[(0,s.jsx)("h4",{className:"h3 mb-2",children:"Useful Links"}),(0,s.jsxs)("ul",{className:"list-unstyled",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/privacy",children:(0,s.jsx)("a",{children:"Privacy Policy"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/cookies",children:(0,s.jsx)("a",{children:"Cookie Policy"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/terms",children:(0,s.jsx)("a",{children:"Terms & Conditions"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/terms",children:(0,s.jsx)("a",{children:"Shipping"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/terms",children:(0,s.jsx)("a",{children:"Returns"})})})]})]}),(0,s.jsxs)("div",{className:"col-lg-3 col-md-6 social text-center",children:[(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("span",{className:"bi bi-fb"})}),(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("span",{className:"bi bi-ebay"})})]}),(0,s.jsxs)("div",{className:"col-lg-4 col-md-6 footer-newsletter",children:[(0,s.jsx)("h4",{className:"h3 mb-2",children:"Join Our Newsletter"}),(0,s.jsx)("p",{className:"fs-6",children:"To receive latest news, type you email below"}),(0,s.jsxs)("form",{action:"",method:"post",children:[(0,s.jsx)("input",{type:"email",disabled:"disabled",name:"email"}),(0,s.jsx)("input",{type:"submit",disabled:"disabled",value:"Coming Soon"})]})]})]})})}),(0,s.jsx)("div",{className:"container d-md-flex py-4",children:(0,s.jsxs)("div",{className:"me-md-auto text-center text-md-start",children:[(0,s.jsxs)("div",{className:"mb-1",children:[" \xa9 Copyright ",(0,s.jsx)("span",{children:"MyPortfolio."})," All Rights Reserved"]}),(0,s.jsxs)("div",{className:"credits",children:[" Designed by ",(0,s.jsx)("a",{href:"https://bootstrapmade.com/",children:"BootstrapMade"})]})]})})]})}function m(){return(0,s.jsx)("a",{href:"#",className:"back-to-top d-flex align-items-center justify-content-center",children:(0,s.jsx)("i",{className:"bi bi-arrow-up-short"})})}var p=n(4298),h=n.n(p),u=function(e){var a=function(e,a,n){var s="";if(n){var t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3),s="; expires="+t.toUTCString()}document.cookie=e+"="+(a||"")+s+"; Path=/; SameSite=Strict;"},n=function(e){for(var a=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var t=n[s];" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(a))return t.substring(a.length,t.length)}},s=function(){c.modal.style.display="none"},t=function(){var e;e=function(){c.modal=document.getElementById(c.props.modalId),c.modal?c.modal.style.display="block":(c.modal=document.createElement("div"),c.modal.id=c.props.modalId,c.modal.innerHTML=c.modalContent,document.body.append(c.modal),c.modal.querySelector(".btn-accept-necessary").addEventListener("click",(function(){a(c.props.cookieName,"false",o),s(),c.props.postSelectionCallback&&c.props.postSelectionCallback()})),c.modal.querySelector(".btn-accept-all").addEventListener("click",(function(){a(c.props.cookieName,"true",o),s(),c.props.postSelectionCallback&&c.props.postSelectionCallback()})))}.bind(this),"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)},o=90,l={title:"Cookie settings",body:"We use some essential cookies to make this website work. We also use cookies to personalize content and analyze traffic to the website. You can choose to accept only cookies that are necessary for the website to function or to also allow tracking cookies. For more information, please see our --privacy-policy--.",privacyPolicy:"privacy policy",buttonAcceptAll:"Accept all cookies",buttonAcceptTechnical:"Only accept technically necessary cookies"},c=this;for(var r in c.props={buttonPrimaryClass:"btn btn-primary",buttonSecondaryClass:"btn btn-secondary",autoShowModal:!0,blockAccess:!1,position:"centre",postSelectionCallback:void 0,lang:navigator.language,defaultLang:"en",content:[],contentUrl:"./cookie-consent-content",privacyPolicyUrl:"privacy-policy.html",cookieName:"cookie-consent-tracking-allowed",modalId:"cookieConsentModal"},e)"content"!==r&&(c.props[r]=e[r]);for(var i in c.lang=c.props.lang,-1!==c.lang.indexOf("-")&&(c.lang=c.lang.split("-")[0]),e.content)c.props.content[i]=e.content[i];!function(){var e='<a href="'+c.props.privacyPolicyUrl+'">'+l.privacyPolicy+"</a>";void 0===c.props.content[c.lang]&&(c.lang=c.props.defaultLang);var a="cookie-consent-modal";c.props.blockAccess&&(a+=" block-access"),c.modalContent='<div class="'+a+'"><div class="modal-content-wrap '+c.props.position+'"><div class="modal-content"><div class="modal-header">--header--</div><div class="modal-body">--body--</div><div class="modal-footer">--footer--</div></div></div>\x3c!-- end modal.js --\x3e',c.modalContent=c.modalContent.replace(/--header--/,'<h3 class="modal-title">'+l.title+"</h3>"),c.modalContent=c.modalContent.replace(/--body--/,l.body.replace(/--privacy-policy--/,e)),c.modalContent=c.modalContent.replace(/--footer--/,"<div class='buttons'><button class='btn-accept-necessary "+c.props.buttonSecondaryClass+"'>"+l.buttonAcceptTechnical+"</button><button class='btn-accept-all "+c.props.buttonPrimaryClass+"'>"+l.buttonAcceptAll+"</button></div>"),void 0===n(c.props.cookieName)&&c.props.autoShowModal&&t()}(),c.reset=function(){var e;e=c.props.cookieName,document.cookie=e+"=; Path=/; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",t()},c.trackingAllowed=function(){return"true"===n(c.props.cookieName)}};function x(){return(0,t.useEffect)((function(){new u({contentUrl:"./cookie-consent-content",privacyPolicyUrl:"/privacy"})})),null}var g=n(1955);function b(){var e="G-6G7HE2PVK8",a=(0,t.useState)(!1),n=a[0],o=a[1];return(0,t.useEffect)((function(){var e="true"===g.Z.get("cookie-consent-tracking-allowed");console.log("Gtag trackingAllowed: "+e),o(e)}),[]),(0,s.jsx)(s.Fragment,{children:n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(e)}),(0,s.jsx)("script",{async:!0,dangerouslySetInnerHTML:{__html:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n                        gtag('config', '".concat(e,"', {\n                          page_path: window.location.pathname,\n                        });\n                    ")}})]})})}function v(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{}),(0,s.jsx)(i,{}),(0,s.jsx)("main",{id:"main",children:e.children}),(0,s.jsx)(d,{}),(0,s.jsx)(m,{}),(0,s.jsx)(h(),{src:"assets/vendor/bootstrap/js/bootstrap.bundle.min.js"}),(0,s.jsx)(h(),{src:"assets/vendor/swiper/swiper-bundle.min.js"}),(0,s.jsx)(h(),{src:"assets/vendor/php-email-form/validate.js"}),(0,s.jsx)(x,{})]})}}}]);