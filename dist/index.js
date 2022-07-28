!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("styled-components"));else if("function"==typeof define&&define.amd)define(["react","styled-components"],t);else{var r="object"==typeof exports?t(require("react"),require("styled-components")):t(e.react,e[void 0]);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,((e,t)=>(()=>{"use strict";var r={156:t=>{t.exports=e},466:e=>{e.exports=t}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.r(i),n.d(i,{FlexBlock:()=>u,TextInput:()=>M,Tooltip:()=>C});var e=n(156),t=n.n(e),r=n(466),o=n.n(r);const s="rgba(30,30,30,.45)",a="rgba(100,149,237,.9)",l="rgb(100,149,237)",c=r.css`
  padding: 12px 16px 12px 46px;
`,p=r.css`
  padding: 12px 46px 12px 16px;
`,d=r.css`
  padding: 12px 16px;
`,f={left:c,right:p},m=o()("input")`
  width: 100%;
  border: 1px solid ${s};
  border-radius: 6px;
  outline: none;
  transition: all .3s ease-in;
  cursor: pointer;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;

  ${e=>e.hasIcon?f[e.iconPlacement||"right"]:d}
  &:focus {
    border: 1px solid ${a};
  }

  &:hover {
    box-shadow: 0 0 8px 0px ${a};
  }
`,h=o()("label")`
  & {
    width: fit-content;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: normal;
    color: ${a};
    line-height: 1;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,g=e=>"string"==typeof e?e:`${e}px`,u=o()("div")`
  & {
    display: flex;
    ${e=>(e=>r.css`
  ${e.position?r.css`position: ${e.position};`:""}
`)(e)}
    ${e=>(e=>r.css`
  ${r.css`display: flex;`}
  ${e.align?r.css`align-items: ${e.align};`:""}
  ${e.justify?r.css`justify-content: ${e.justify};`:""}
  ${e.direction?r.css`flex-direction: ${e.direction};`:""}
  ${e.wrap?r.css`flex-wrap: ${e.wrap};`:""}
  ${e.grow?r.css`flex-grow: ${e.grow};`:""}
  ${e.shrink?r.css`flex-shrink: ${e.shrink};`:""}
  ${e.basis?r.css`flex-basis: ${e.basis};`:""}
  ${e.flex?r.css`flex: ${e.flex};`:""}
`)(e)}
    ${e=>(e=>r.css`
  ${e.mt?r.css`margin-top: ${g(e.mt)};`:""}
  ${e.mr?r.css`margin-right: ${g(e.mr)};`:""}
  ${e.mb?r.css`margin-bottom: ${g(e.mb)};`:""}
  ${e.ml?r.css`margin-left: ${g(e.ml)};`:""}
  ${e.m?r.css`margin: ${g(e.m)};`:""}
`)(e)}
    ${e=>(e=>r.css`
  ${e.pt?r.css`padding-top: ${g(e.pt)};`:""}
  ${e.pr?r.css`padding-right: ${g(e.pr)};`:""}
  ${e.pb?r.css`padding-bottom: ${g(e.pb)};`:""}
  ${e.pl?r.css`padding-left: ${g(e.pl)};`:""}
  ${e.p?r.css`padding: ${g(e.p)};`:""}
`)(e)}
    ${e=>(e=>r.css`
  ${e.width?r.css`width: ${g(e.width)};`:""}
  ${e.maxWidth?r.css`max-width: ${g(e.maxWidth)};`:""}
  ${e.minWidth?r.css`min-width: ${g(e.minWidth)};`:""}
`)(e)}
    ${e=>(e=>r.css`
  ${e.height?r.css`height: ${g(e.height)};`:""}
  ${e.maxHeight?r.css`max-height: ${g(e.maxHeight)};`:""}
  ${e.minHeight?r.css`min-height: ${g(e.minHeight)};`:""}
`)(e)}
    ${e=>(e=>r.css`
  ${e.fSize?r.css`font-size: ${g(e.fSize)}`:r.css`font-size: 16px;`}
  ${e.fWeight?r.css`font-weight: ${g(e.fWeight)}`:""}
  ${e.textAlign?r.css`text-align: ${e.textAlign}`:""}
`)(e)}
    ${e=>(e=>r.css`
  ${e.opacity?r.css`opacity: ${e.opacity};`:""}
  ${e.bgColor?r.css`background-color: ${e.bgColor};`:""}
  ${e.animation?r.css`animation: ${e.animation};`:""}
  ${e.border?r.css`border: ${e.border};`:""}
  ${e.borderTop?r.css`border-top: ${e.borderTop};`:""}
  ${e.borderRight?r.css`border-right: ${e.borderRight};`:""}
  ${e.borderBottom?r.css`border-bottom: ${e.borderBottom};`:""}
  ${e.borderLeft?r.css`border-left: ${e.borderLeft};`:""}
  ${e.borderRadius?r.css`border-radius: ${g(e.borderRadius)};`:""}
  ${e.overflow?r.css`overflow: ${e.overflow};`:""}
  ${e.overflowX?r.css`overflow-x: ${e.overflowX};`:""}
  ${e.overflowY?r.css`overflow-y: ${e.overflowY};`:""}
  ${e.transform?r.css`transform: ${e.transform};`:""}
  ${e.gap?r.css`gap: ${g(e.gap)};`:""}
`)(e)}
    ${e=>e.additionalCss?e.additionalCss:""}
  }
`;const b=e=>{var{size:r=24,color:o=a}=e,n=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["size","color"]);return t().createElement(u,Object.assign({},n,{align:"center",justify:"center"}),t().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:r,height:r,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},t().createElement("mask",{id:"svgIDb"},t().createElement("g",{fill:"none"},t().createElement("g",{stroke:"#fff",clipPath:"url(#svgIDa)"},t().createElement("path",{fill:"#fff",strokeLinejoin:"round",strokeWidth:"4.302",d:"M44.782 24.17L31.918 7.1L14.135 20.5L27.5 37l3.356-2.336L44.782 24.17Z"}),t().createElement("path",{strokeLinejoin:"round",strokeWidth:"4.302",d:"m27.5 37l-3.839 3.075l-10.563-.001l-2.6-3.45l-6.433-8.536L14.5 20.225"}),t().createElement("path",{strokeLinecap:"round",strokeWidth:"4.5",d:"M13.206 40.072h31.36"})),t().createElement("defs",null,t().createElement("clipPath",{id:"svgIDa"},t().createElement("path",{fill:o,d:"M0 0h48v48H0z"}))))),t().createElement("path",{fill:o,d:"M0 0h48v48H0z",mask:"url(#svgIDb)"})))},x=o().button`
  & {
    outline: none;
    padding: 4px 6px;
    color: ${s};
    background-color: #fff;
    border: 1px solid ${s};
    max-width: 100%;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    font-size: 14px;
    gap: 6px;
    border-radius: 4px;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 0 4px 0 ${"rgba(100,149,237,.15)"};
  }
`,$=o().span`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    padding: 6px;
  }

  &:hover {
    background-color: ${"rgba(30,30,30,.1)"};
    border-radius: 50%;
  }
`,w=({item:r,onDelete:o,onSelect:n})=>{const i=(0,e.useCallback)((e=>{n&&n(r)}),[n,r]),s=(0,e.useCallback)((e=>{e.stopPropagation(),o&&o(r)}),[o,r]);return t().createElement(x,{onClick:i},t().createElement("span",null,r.title),o&&t().createElement($,{onClick:s},t().createElement(b,{size:14})))},y=({actions:e,actionHandler:r,onDeleteAction:o})=>e.length?t().createElement(u,{mt:6,gap:6,pl:8,pr:8,width:"100%",justify:"flex-start",wrap:"wrap"},e.map((e=>t().createElement(w,{item:e,onSelect:e=>r&&r(e),onDelete:o})))):t().createElement(t().Fragment,null),v=({isDirty:e,errorMessage:o})=>e&&o?t().createElement(u,{mt:6,pl:8,pr:8,width:"100%",position:"relative",additionalCss:r.css`
        color: #ff5e5e;
        font-size: 12px;
        font-weight: bold
			`},o):t().createElement(t().Fragment,null),E=({content:e})=>e?t().createElement(u,{position:"relative",width:"100%"},e):t().createElement(t().Fragment,null);const O=e=>{var{size:r=24,color:o=a,strokeWidth:n=2}=e,i=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["size","color","strokeWidth"]);return t().createElement(u,Object.assign({},i,{align:"center",justify:"center"}),t().createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:r,height:r,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},t().createElement("g",{fill:"none",stroke:o,strokeLinecap:"round",strokeWidth:n},t().createElement("path",{strokeDasharray:"60",strokeDashoffset:"60",strokeOpacity:".3",d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"},t().createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"1.3s",values:"60;0"})),t().createElement("path",{strokeDasharray:"15",strokeDashoffset:"15",d:"M12 3C16.9706 3 21 7.02944 21 12"},t().createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),t().createElement("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})))))},k=({icon:e,iconPlacement:o,isLoading:n,onClear:i})=>e||n||i?t().createElement(u,{position:"absolute",height:30,width:30,overflow:"hidden",justify:"right"===o?"flex-end":"center",align:"center",additionalCss:r.css`
        top: 50%;
        transform: translateY(-50%);
        ${"right"===o?r.css`right: 10px`:r.css`left: 10px;`};
			`},n?t().createElement(O,null):e||t().createElement(t().Fragment,null)):t().createElement(t().Fragment,null),j=o()("span")`
  & {
    position: relative;
    cursor: pointer;
    width: ${e=>e.size}px;
    height: ${e=>e.size}px;
  }
`,z=o()("span")`
  & {
    display: flex;
    visibility: ${e=>e.isVisible?"visible":"hidden"};
    position: absolute;
    top: ${e=>g(e.top)};
    left: ${e=>g(e.left)};
    z-index: 10000;
    width: max-content;
    word-wrap: break-word;
    min-width: 200px;
    max-width: 400px;
    flex-shrink: 1;
    border-radius: 4px;
    background-color: ${l};
    color: #fff;
    text-align: center;
    padding: 10px 12px;
    box-shadow: 0px 0px 6px ${s};
    opacity: ${e=>e.opacity};
    transition: opacity .3s ease-in, visibility .3s ease-in;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    width: 14px;
    height: 14px;
    transform: rotate(45deg) translateX(-50%);
    background-color: ${l};
    z-index: -10;
    ${e=>{switch(e.placement){case"top":return r.css`bottom: -10px`;case"bottom":return r.css`top: -1px`;case"right":return r.css`
            top: 30px;
            transform: translateY(-50%) rotate(45deg);
            left: -7px;
          `}}}
`;const P=e=>{var{size:r=24,color:o=a}=e;return function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}}(e,["size","color"]),t().createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:r,height:r,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},t().createElement("g",{fill:"none",stroke:o,strokeWidth:"2"},t().createElement("circle",{cx:"12",cy:"12",r:"10"}),t().createElement("path",{strokeLinecap:"round",d:"M10 8.484C10.5 7.494 11 7 12 7c1.246 0 2 .989 2 1.978s-.5 1.483-2 2.473V13m0 3.5v.5"})))};const C=r=>{var{children:o,text:n,placement:i="top"}=r,s=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(r,["children","text","placement"]);const[a,l]=(0,e.useState)(!1),c=(0,e.useRef)(null),p=(0,e.useRef)(null),[d,f]=(0,e.useState)({state:!1,top:0,left:0,placement:i});return(0,e.useEffect)((()=>{if(c.current&&a&&p.current){const e=p.current.getBoundingClientRect();if("top"===i){let t=-1*(c.current.offsetHeight+10),r=i;return e.y<Math.abs(t)&&(r="bottom",t=p.current.offsetHeight+10),f({state:!0,placement:r,top:t,left:p.current.offsetWidth/2-c.current.offsetWidth/2-2})}if("bottom"===i){let t=p.current.offsetHeight+10,r=i;return window.innerHeight-e.bottom<c.current.offsetHeight&&(r="top",t=-1*(c.current.offsetHeight+10)),f({placement:r,top:t,left:p.current.offsetWidth/2-c.current.offsetWidth/2-2,state:!0})}if("right"===i){let e=-20,t=p.current.offsetWidth+20;return f({placement:i,state:!0,left:t,top:e})}}else f((e=>Object.assign(Object.assign({},e),{state:!1})))}),[a,c,p,i]),t().createElement(j,{size:s.size||24,ref:p,onMouseEnter:()=>{l(!0)},onMouseLeave:()=>l(!1)},o||t().createElement(P,Object.assign({},s)),t().createElement(z,{placement:d.placement,opacity:d.state?1:0,ref:c,isVisible:a,top:(null==d?void 0:d.top)||0,left:(null==d?void 0:d.left)||0},t().createElement(u,{width:"100%"},n)))},M=(0,e.forwardRef)((({value:e,onBlur:r,onFocus:o,onChange:n,label:i,placeholder:s,isDirty:a,errorMessage:l,children:c,readOnly:p,inputId:d,containerProps:f,icon:g,actions:b,actionHandler:x,iconPlacement:$="right",onDeleteAction:w,isLoading:O,tooltipIcon:j,tooltipText:z,onClick:P,onClear:M,tooltipPlacement:S},W)=>t().createElement(u,Object.assign({},f,{direction:"row",width:"100%"}),t().createElement(u,{width:"100%",position:"relative",direction:"column"},t().createElement(u,{width:"100%",align:"center",justify:"flex-start",mb:8,pl:6,pr:6,gap:6},t().createElement(h,{htmlFor:d},i),z&&t().createElement(C,{text:z,placement:S||"top",children:j||void 0})),t().createElement(u,{position:"relative",width:"100%",direction:"column"},t().createElement(m,{hasIcon:!!g,id:d,ref:W,iconPlacement:$,placeholder:s,value:e,onChange:n,onBlur:r,onFocus:o,readOnly:!!p,onClick:P}),t().createElement(k,{icon:g,iconPlacement:$,isLoading:O,onClear:e.length?M:void 0}),t().createElement(E,{content:c})),t().createElement(v,{isDirty:a,errorMessage:l||""}),t().createElement(y,{actions:b||[],actionHandler:x,onDeleteAction:w})))))})(),i})()));