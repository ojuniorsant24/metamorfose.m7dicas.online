!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a880a9f7-29a1-4157-b059-a6cfa1a85002",e._sentryDebugIdIdentifier="sentry-dbid-a880a9f7-29a1-4157-b059-a6cfa1a85002")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4335],{32117:function(e,n,t){Promise.resolve().then(t.bind(t,54670)),Promise.resolve().then(t.bind(t,54595))},54670:function(e,n,t){"use strict";t.d(n,{default:function(){return i}});var r=t(44772);t(46330);var o=t(59072);function i(e){let{children:n}=e;return(0,r.jsx)("div",{onContextMenu:e=>{e.preventDefault()},className:"relative overflow-hidden h-screen flex flex-col","data-sentry-component":"Preview","data-sentry-source-file":"preview.tsx",children:(0,r.jsx)("div",{className:"w-full h-full relative",children:(0,r.jsx)(o.xr,{className:"w-full h-full","data-sentry-element":"ScrollArea","data-sentry-source-file":"preview.tsx",children:n})})})}},59072:function(e,n,t){"use strict";t.d(n,{nh:function(){return l},xr:function(){return a}});var r=t(44772),o=t(46330),i=t(87435),u=t(23569);let a=o.forwardRef((e,n)=>{let{className:t,children:o,...a}=e;return(0,r.jsxs)(i.fC,{ref:n,className:(0,u.cn)("relative overflow-hidden",t),...a,children:[(0,r.jsx)(i.l_,{className:"h-full w-full rounded-[inherit]",children:o}),(0,r.jsx)(s,{}),(0,r.jsx)(i.Ns,{})]})});a.displayName=i.fC.displayName;let l=o.forwardRef((e,n)=>{let{className:t,children:o,...a}=e;return(0,r.jsxs)(i.fC,{ref:n,className:(0,u.cn)("relative overflow-hidden",t),...a,children:[(0,r.jsx)(i.l_,{className:"h-full w-full rounded-[inherit]",children:o}),(0,r.jsx)(s,{orientation:"horizontal"}),(0,r.jsx)(i.Ns,{})]})});l.displayName="HorizontalScrollArea";let s=o.forwardRef((e,n)=>{let{className:t,orientation:o="vertical",...a}=e;return(0,r.jsx)(i.gb,{ref:n,orientation:o,className:(0,u.cn)("flex touch-none select-none transition-colors","vertical"===o&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===o&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...a,children:(0,r.jsx)(i.q4,{className:"relative flex-1 rounded-full bg-border"})})});s.displayName=i.gb.displayName},54595:function(e,n,t){"use strict";t.d(n,{FunnelProvider:function(){return c},v:function(){return f}});var r=t(44772),o=t(46330),i=t(44250),u=t(32411),a=t(23569);t(29774);var l=(0,t(62756).$)("69ec1c6cc8e98827b3b8b95aa3d2cbefb1779873");let s=(0,o.createContext)(null),c=e=>{var n;let{children:t}=e,[c,f]=(0,o.useState)(null),[d,h]=(0,o.useState)(!1),[m,w]=(0,o.useState)(u.j.CONSTRUCTOR),[p,v]=(0,o.useState)([]),[g,y]=(0,o.useState)((null===(n=p[0])||void 0===n?void 0:n.id)||""),[b,N]=(0,o.useState)(null),[E,S]=(0,o.useState)(!1),[x,j]=(0,o.useState)(null),[M,O]=(0,o.useState)(null),[A,T]=(0,o.useState)(null),[D,C]=(0,o.useState)(null),[F,P]=(0,o.useState)(!1),[R,k]=(0,o.useState)(null),[_,I]=(0,o.useState)(null),[L,U]=(0,o.useState)(!1),[z,W]=(0,o.useState)(null),[V,$]=(0,o.useState)(!1),{state:H,set:J,undo:G,redo:B,clear:q,canUndo:Z,canRedo:K}=(0,i.bA)({items:p});(0,o.useEffect)(()=>{p&&J({...H,items:p})},[p]);let Q=async(e,n,t)=>{if(d)return;h(!0);let[r,o]=await (0,a.zM)(fetch(e?t?"/api/funnels/slug/".concat(n,"/published"):"/api/funnels/slug/".concat(n):"/api/funnels/".concat(n)));if(r)throw h(!1),Error("An unknown error occurred while trying to fetch Funnel Data.");let i=await o.json();if(!i.success)throw h(!1),Error("An error occurred while fetching Funnel Data.");let u=i.funnel;v(u.steps),j(u.designSettings);let l={name:u.name||"Funnel",slug:u.slug,domains:u.domains,domainVerified:u.domainVerified||!1,seoTitle:u.seoTitle||"",seoDescription:u.seoDescription||"",faviconUrl:u.faviconUrl||"",scripts:u.scripts,visible:u.visible||!0};if(!e){let[e,t]=await (0,a.zM)(fetch("/api/funnels/".concat(n,"/leads/performance")));if(e)throw h(!1),Error("An error occurred while fetching Funnel Lead Data.");let r=await t.json();if(!r.success)throw h(!1),Error("An error occurred while fetching Funnel Lead Data.");k(r.insights);let[o,i]=await (0,a.zM)(fetch("/api/funnels/".concat(n,"/leads?page=0&limit=25")));if(o)throw h(!1),Error("An error occurred while fetching Funnel Lead Data.");let u=await i.json();if(!u.success)throw h(!1),Error("An error occurred while fetching Funnel Lead Data.");I(u.leads)}let[s,c]=await (0,a.zM)(fetch("/api/funnels/".concat(u.id,"/webhook")));if(s)throw h(!1),Error("An error occurred while fetching Funnel Webhook Data.");let m=await c.json();if(!m.success)throw h(!1),Error("An error occurred while fetching Funnel Webhook Data.");T(m.webhook),O(l),N(null);let w=u.steps;y(w.length>0?w[0].id:""),f(t?u.funnelId:u.id),h(!1)},X=async(e,n)=>{if(!c)return;h(!0);let[t,r]=await (0,a.zM)(fetch("/api/funnels/".concat(c,"/leads?page=").concat(e,"&limit=").concat(n)));if(t)throw h(!1),Error("An error occurred while fetching Funnel Lead Data.");let o=await r.json();if(!o.success)throw h(!1),Error("An error occurred while fetching Funnel Lead Data.");I(o.leads),h(!1)},Y=async()=>{if(d||!c||!M||!x||!p)return;h(!0);let e={name:M.name,slug:M.slug,domains:M.domains,domainVerified:M.domainVerified,scripts:M.scripts,seoTitle:M.seoTitle,seoDescription:M.seoDescription,faviconUrl:M.faviconUrl,visible:M.visible,steps:p,designSettings:x},[n,t]=await (0,a.zM)(fetch("/api/funnels/".concat(c),{method:"PUT",body:JSON.stringify(e)}));if(n)throw Error("An unknown error occurred while trying to update Funnel Data.");if(!(await t.json()).success)throw Error("An error occurred while updating Funnel Data.");h(!1)},ee=async()=>{let[e]=await (0,a.zM)(Y());if(e)throw Error("An error occurred while saving Funnel Data.");h(!0);let[n,t]=await (0,a.zM)(fetch("/api/funnels/".concat(c,"/publish"),{method:"PATCH"}));if(n)throw Error("An unknown error occurred while trying to publish Funnel Data.");if(!(await t.json()).success)throw Error("An error occurred while publishing Funnel Data.");h(!1)},en=async()=>{if(D)return;h(!0);let[e,n]=await (0,a.zM)(fetch("/api/leads",{method:"POST",body:JSON.stringify({funnelId:c})}));if(e)throw Error("An unknown error occurred while creating the new Lead.");let t=await n.json();if(!t.success)throw Error("An error occurred while creating the new Lead.");return h(!1),C(t.id),t.id},et=(0,o.useCallback)(e=>{e&&g&&D&&c&&(fetch("/api/leads/".concat(D,"/action"),{method:"POST",body:JSON.stringify({stepId:g,metadata:e})}),l(c,D,e))},[g,c,D]),er=async e=>{if(!_||!c)return;h(!0);let[n,t]=await (0,a.zM)(fetch("/api/funnels/".concat(c,"/leads"),{method:"DELETE",body:JSON.stringify({ids:e})}));if(n)throw Error("An unknown error occurred while deleting leads.");if(!(await t.json()).success)throw Error("An error occurred while deleting leads.");h(!1)},eo=async(e,n,t,r)=>{if(!c)return;let[o,i]=await (0,a.zM)(fetch("/api/funnels/".concat(c,"/webhook"),{method:"POST",body:JSON.stringify({url:e,method:n,contentType:t,token:r})}));if(o)throw Error("Um erro desconhecido ocorreu ao salvar o webhook.");let u=await i.json();if(!u.success)throw Error("Houve um erro ao salvar o webhook. Tente novamente ou contate o suporte.");T(u.webhook)},ei=async()=>{if(!c)return;let[e,n]=await (0,a.zM)(fetch("/api/funnels/".concat(c,"/webhook"),{method:"DELETE"}));if(e)throw Error("Um erro desconhecido ocorreu ao remover o webhook.");if(!(await n.json()).success)throw Error("Houve um erro ao remover o webhook. Tente novamente ou contate o suporte.");T(null)};return(0,r.jsx)(s.Provider,{value:{isLoading:d,leadId:D,editorMode:m,steps:p,history:H,canRedo:K,canUndo:Z,currentStep:g,currentComponent:b,mobileMode:E,leads:_,designSettings:x,settings:M,webhook:A,previewMode:F,funnelId:c,leadInsights:R,mobileOptionsOpen:L,currentDraggingItem:z,quillOpen:V,redo:B,undo:G,fetchFunnel:Q,refetchLeads:X,deleteLeads:er,saveFunnel:Y,publishFunnel:ee,setEditorMode:w,setSteps:v,setCurrentStep:y,setCurrentComponent:N,toggleMobileMode:()=>{S(!E)},setDesignSettings:j,setSettings:O,setWebhook:T,generateFunnelLead:en,saveLeadActions:et,setPreviewMode:P,setMobileOptionsOpen:U,setCurrentDraggingItem:W,saveWebhook:eo,deleteWebhook:ei,setQuillOpen:$},"data-sentry-element":"unknown","data-sentry-component":"FunnelProvider","data-sentry-source-file":"funnel-context.tsx",children:t})},f=()=>{let e=(0,o.useContext)(s);if(!e)throw Error("useFunnelContext must be used within a FunnelProvider");return e}},32411:function(e,n,t){"use strict";var r,o;t.d(n,{j:function(){return r}}),(o=r||(r={}))[o.CONSTRUCTOR=1]="CONSTRUCTOR",o[o.FLOW=2]="FLOW",o[o.DESIGNER=3]="DESIGNER",o[o.LEADS=4]="LEADS",o[o.SETTINGS=5]="SETTINGS"},23569:function(e,n,t){"use strict";t.d(n,{Rz:function(){return c},cn:function(){return a},gn:function(){return d},sC:function(){return f},xl:function(){return s},zM:function(){return l}});var r=t(99428),o=t(92588),i=t.n(o),u=t(83701);function a(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,u.m6)((0,r.W)(n))}async function l(e){try{let n=await e;return[void 0,n]}catch(e){return[e]}}t(39421);let s=e=>i().sortBy(e,e=>e.position),c=(e,n)=>({...e,position:n});function f(e){let n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t="";for(let r=0;r<e;r++){let e=Math.floor(Math.random()*n.length);t+=n[e]}return t}let d=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)},93669:function(e,n,t){"use strict";function r(e,[n,t]){return Math.min(t,Math.max(n,e))}t.d(n,{u:function(){return r}})},68813:function(e,n,t){"use strict";function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),!1===t||!r.defaultPrevented)return n?.(r)}}t.d(n,{M:function(){return r}})},63871:function(e,n,t){"use strict";t.d(n,{F:function(){return o},e:function(){return i}});var r=t(46330);function o(...e){return n=>e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})}function i(...e){return r.useCallback(o(...e),e)}},15836:function(e,n,t){"use strict";t.d(n,{b:function(){return u},k:function(){return i}});var r=t(46330),o=t(44772);function i(e,n){let t=r.createContext(n),i=e=>{let{children:n,...i}=e,u=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(t.Provider,{value:u,children:n})};return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(t);if(i)return i;if(void 0!==n)return n;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,n=[]){let t=[],i=()=>{let n=t.map(e=>r.createContext(e));return function(t){let o=t?.[e]||n;return r.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return i.scopeName=e,[function(n,i){let u=r.createContext(i),a=t.length;t=[...t,i];let l=n=>{let{scope:t,children:i,...l}=n,s=t?.[e]?.[a]||u,c=r.useMemo(()=>l,Object.values(l));return(0,o.jsx)(s.Provider,{value:c,children:i})};return l.displayName=n+"Provider",[l,function(t,o){let l=o?.[e]?.[a]||u,s=r.useContext(l);if(s)return s;if(void 0!==i)return i;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((n,{useScope:t,scopeName:r})=>{let o=t(e)[`__scope${r}`];return{...n,...o}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:o}),[o])}};return t.scopeName=n.scopeName,t}(i,...n)]}},68836:function(e,n,t){"use strict";t.d(n,{gm:function(){return i}});var r=t(46330);t(44772);var o=r.createContext(void 0);function i(e){let n=r.useContext(o);return e||n||"ltr"}},36817:function(e,n,t){"use strict";t.d(n,{z:function(){return u}});var r=t(46330),o=t(63871),i=t(69591),u=e=>{var n,t;let u,l;let{present:s,children:c}=e,f=function(e){var n,t;let[o,u]=r.useState(),l=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[f,d]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return r.useEffect(()=>{let e=a(l.current);c.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let n=l.current,t=s.current;if(t!==e){let r=c.current,o=a(n);e?d("MOUNT"):"none"===o||(null==n?void 0:n.display)==="none"?d("UNMOUNT"):t&&r!==o?d("ANIMATION_OUT"):d("UNMOUNT"),s.current=e}},[e,d]),(0,i.b)(()=>{if(o){var e;let n;let t=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(l.current).includes(e.animationName);if(e.target===o&&r&&(d("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",n=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=a(l.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(n),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}d("ANIMATION_END")},[o,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),u(e)},[])}}(s),d="function"==typeof c?c({present:f.isPresent}):r.Children.only(c),h=(0,o.e)(f.ref,(u=null===(n=Object.getOwnPropertyDescriptor(d.props,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in u&&u.isReactWarning?d.ref:(u=null===(t=Object.getOwnPropertyDescriptor(d,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in u&&u.isReactWarning?d.props.ref:d.props.ref||d.ref);return"function"==typeof c||f.isPresent?r.cloneElement(d,{ref:h}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}u.displayName="Presence"},81377:function(e,n,t){"use strict";t.d(n,{WV:function(){return a},jH:function(){return l}});var r=t(46330),o=t(2102),i=t(49811),u=t(44772),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=r.forwardRef((e,t)=>{let{asChild:r,...o}=e,a=r?i.g7:n;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(a,{...o,ref:t})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function l(e,n){e&&o.flushSync(()=>e.dispatchEvent(n))}},49811:function(e,n,t){"use strict";t.d(n,{A4:function(){return l},g7:function(){return u}});var r=t(46330),o=t(63871),i=t(44772),u=r.forwardRef((e,n)=>{let{children:t,...o}=e,u=r.Children.toArray(t),l=u.find(s);if(l){let e=l.props.children,t=u.map(n=>n!==l?n:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(a,{...o,ref:n,children:r.isValidElement(e)?r.cloneElement(e,void 0,t):null})}return(0,i.jsx)(a,{...o,ref:n,children:t})});u.displayName="Slot";var a=r.forwardRef((e,n)=>{let{children:t,...i}=e;if(r.isValidElement(t)){let e,u;let a=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return r.cloneElement(t,{...function(e,n){let t={...n};for(let r in n){let o=e[r],i=n[r];/^on[A-Z]/.test(r)?o&&i?t[r]=(...e)=>{i(...e),o(...e)}:o&&(t[r]=o):"style"===r?t[r]={...o,...i}:"className"===r&&(t[r]=[o,i].filter(Boolean).join(" "))}return{...e,...t}}(i,t.props),ref:n?(0,o.F)(n,a):a})}return r.Children.count(t)>1?r.Children.only(null):null});a.displayName="SlotClone";var l=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===l}},17906:function(e,n,t){"use strict";t.d(n,{W:function(){return o}});var r=t(46330);function o(e){let n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...e)=>n.current?.(...e),[])}},69591:function(e,n,t){"use strict";t.d(n,{b:function(){return o}});var r=t(46330),o=globalThis?.document?r.useLayoutEffect:()=>{}}},function(e){e.O(0,[7495,1205,2258,7435,1910,2966,1553,1744],function(){return e(e.s=32117)}),_N_E=e.O()}]);