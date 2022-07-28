!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("styled-components"),require("react"));else if("function"==typeof define&&define.amd)define(["styled-components","react"],t);else{var r="object"==typeof exports?t(require("styled-components"),require("react")):t(e[void 0],e.react);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,((e,t)=>(()=>{"use strict";var r={156:e=>{e.exports=t},466:t=>{t.exports=e}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.r(i),n.d(i,{FlexBlock:()=>f,Heading:()=>m,TextInput:()=>L,Tooltip:()=>D});var e=n(466),t=n.n(e);const r="rgba(30,30,30,.45)",o="rgba(100,149,237,.9)",s="rgb(100,149,237)",a="rgba(0, 0, 0, .6)",l=e=>"string"==typeof e?e:`${e}px`,c=t=>e.css`
  ${t.mt?e.css`margin-top: ${l(t.mt)};`:""}
  ${t.mr?e.css`margin-right: ${l(t.mr)};`:""}
  ${t.mb?e.css`margin-bottom: ${l(t.mb)};`:""}
  ${t.ml?e.css`margin-left: ${l(t.ml)};`:""}
  ${t.m?e.css`margin: ${l(t.m)};`:""}
`,p=t=>e.css`
  ${t.pt?e.css`padding-top: ${l(t.pt)};`:""}
  ${t.pr?e.css`padding-right: ${l(t.pr)};`:""}
  ${t.pb?e.css`padding-bottom: ${l(t.pb)};`:""}
  ${t.pl?e.css`padding-left: ${l(t.pl)};`:""}
  ${t.p?e.css`padding: ${l(t.p)};`:""}
`,f=t()("div")`
  & {
    display: flex;
    ${t=>(t=>e.css`
  ${t.position?e.css`position: ${t.position};`:""}
`)(t)}
    ${t=>(t=>e.css`
  ${e.css`display: flex;`}
  ${t.align?e.css`align-items: ${t.align};`:""}
  ${t.justify?e.css`justify-content: ${t.justify};`:""}
  ${t.direction?e.css`flex-direction: ${t.direction};`:""}
  ${t.wrap?e.css`flex-wrap: ${t.wrap};`:""}
  ${t.grow?e.css`flex-grow: ${t.grow};`:""}
  ${t.shrink?e.css`flex-shrink: ${t.shrink};`:""}
  ${t.basis?e.css`flex-basis: ${t.basis};`:""}
  ${t.flex?e.css`flex: ${t.flex};`:""}
`)(t)}
    ${e=>c(e)}
    ${e=>p(e)}
    ${t=>(t=>e.css`
  ${t.width?e.css`width: ${l(t.width)};`:""}
  ${t.maxWidth?e.css`max-width: ${l(t.maxWidth)};`:""}
  ${t.minWidth?e.css`min-width: ${l(t.minWidth)};`:""}
`)(t)}
    ${t=>(t=>e.css`
  ${t.height?e.css`height: ${l(t.height)};`:""}
  ${t.maxHeight?e.css`max-height: ${l(t.maxHeight)};`:""}
  ${t.minHeight?e.css`min-height: ${l(t.minHeight)};`:""}
`)(t)}
    ${t=>(t=>e.css`
  ${t.fSize?e.css`font-size: ${l(t.fSize)}`:e.css`font-size: 16px;`}
  ${t.fWeight?e.css`font-weight: ${l(t.fWeight)}`:""}
  ${t.textAlign?e.css`text-align: ${t.textAlign}`:""}
`)(t)}
    ${t=>(t=>e.css`
  ${t.opacity?e.css`opacity: ${t.opacity};`:""}
  ${t.bgColor?e.css`background-color: ${t.bgColor};`:""}
  ${t.animation?e.css`animation: ${t.animation};`:""}
  ${t.border?e.css`border: ${t.border};`:""}
  ${t.borderTop?e.css`border-top: ${t.borderTop};`:""}
  ${t.borderRight?e.css`border-right: ${t.borderRight};`:""}
  ${t.borderBottom?e.css`border-bottom: ${t.borderBottom};`:""}
  ${t.borderLeft?e.css`border-left: ${t.borderLeft};`:""}
  ${t.borderRadius?e.css`border-radius: ${l(t.borderRadius)};`:""}
  ${t.overflow?e.css`overflow: ${t.overflow};`:""}
  ${t.overflowX?e.css`overflow-x: ${t.overflowX};`:""}
  ${t.overflowY?e.css`overflow-y: ${t.overflowY};`:""}
  ${t.transform?e.css`transform: ${t.transform};`:""}
  ${t.gap?e.css`gap: ${l(t.gap)};`:""}
`)(t)}
    ${e=>e.additionalCss?e.additionalCss:""}
  }
`,d=e.css`
  & {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    color: ${a};
    font-style: normal;
    text-align: left;
  }
`,m={H1:t()("h1")`
    & {
      ${d};
			margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"28px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)};
      line-height: 1.1;
    }
	`,H2:t()("h2")`
    & {
      ${d};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"24px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)};
      line-height: 1
    }
	`,H3:t()("h3")`
    & {
      ${d};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"22px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)}
    }
	`,H4:t()("h4")`
    & {
      ${d};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"20px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)}
    }
	`,H5:t()("h5")`
    & {
      ${d};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"18px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)}
    }
	`,H6:t()("h6")`
    & {
      ${d};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"16px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)}
    }
	`};var h=n(156),g=n.n(h);const u=e.css`
  padding: 12px 16px 12px 46px;
`,$=e.css`
  padding: 12px 46px 12px 16px;
`,x=e.css`
  padding: 12px 16px;
`,b={left:u,right:$},w=t()("input")`
  width: 100%;
  border: 1px solid ${r};
  border-radius: 6px;
  outline: none;
  transition: all .3s ease-in;
  cursor: pointer;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;

  ${e=>e.hasIcon?b[e.iconPlacement||"right"]:x}
  &:focus {
    border: 1px solid ${o};
  }

  &:hover {
    box-shadow: 0 0 8px 0px ${o};
  }
`,y=t()("label")`
  & {
    width: fit-content;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: normal;
    color: ${o};
    line-height: 1;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;const v=e=>{var{size:t=24,color:r=o}=e,n=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["size","color"]);return g().createElement(f,Object.assign({},n,{align:"center",justify:"center"}),g().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:t,height:t,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},g().createElement("mask",{id:"svgIDb"},g().createElement("g",{fill:"none"},g().createElement("g",{stroke:"#fff",clipPath:"url(#svgIDa)"},g().createElement("path",{fill:"#fff",strokeLinejoin:"round",strokeWidth:"4.302",d:"M44.782 24.17L31.918 7.1L14.135 20.5L27.5 37l3.356-2.336L44.782 24.17Z"}),g().createElement("path",{strokeLinejoin:"round",strokeWidth:"4.302",d:"m27.5 37l-3.839 3.075l-10.563-.001l-2.6-3.45l-6.433-8.536L14.5 20.225"}),g().createElement("path",{strokeLinecap:"round",strokeWidth:"4.5",d:"M13.206 40.072h31.36"})),g().createElement("defs",null,g().createElement("clipPath",{id:"svgIDa"},g().createElement("path",{fill:r,d:"M0 0h48v48H0z"}))))),g().createElement("path",{fill:r,d:"M0 0h48v48H0z",mask:"url(#svgIDb)"})))},E=t().button`
  & {
    outline: none;
    padding: 4px 6px;
    color: ${r};
    background-color: #fff;
    border: 1px solid ${r};
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
`,O=t().span`
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
`,k=({item:e,onDelete:t,onSelect:r})=>{const o=(0,h.useCallback)((t=>{r&&r(e)}),[r,e]),n=(0,h.useCallback)((r=>{r.stopPropagation(),t&&t(e)}),[t,e]);return g().createElement(E,{onClick:o},g().createElement("span",null,e.title),t&&g().createElement(O,{onClick:n},g().createElement(v,{size:14})))},j=({actions:e,actionHandler:t,onDeleteAction:r})=>e.length?g().createElement(f,{mt:6,gap:6,pl:8,pr:8,width:"100%",justify:"flex-start",wrap:"wrap"},e.map((e=>g().createElement(k,{item:e,onSelect:e=>t&&t(e),onDelete:r})))):g().createElement(g().Fragment,null),z=({isDirty:t,errorMessage:r})=>t&&r?g().createElement(f,{mt:6,pl:8,pr:8,width:"100%",position:"relative",additionalCss:e.css`
        color: #ff5e5e;
        font-size: 12px;
        font-weight: bold
			`},r):g().createElement(g().Fragment,null),P=({content:e})=>e?g().createElement(f,{position:"relative",width:"100%"},e):g().createElement(g().Fragment,null);const C=e=>{var{size:t=24,color:r=o,strokeWidth:n=2}=e,i=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["size","color","strokeWidth"]);return g().createElement(f,Object.assign({},i,{align:"center",justify:"center"}),g().createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:t,height:t,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},g().createElement("g",{fill:"none",stroke:r,strokeLinecap:"round",strokeWidth:n},g().createElement("path",{strokeDasharray:"60",strokeDashoffset:"60",strokeOpacity:".3",d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"},g().createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"1.3s",values:"60;0"})),g().createElement("path",{strokeDasharray:"15",strokeDashoffset:"15",d:"M12 3C16.9706 3 21 7.02944 21 12"},g().createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),g().createElement("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})))))},H=({icon:t,iconPlacement:r,isLoading:o,onClear:n})=>t||o||n?g().createElement(f,{position:"absolute",height:30,width:30,overflow:"hidden",justify:"right"===r?"flex-end":"center",align:"center",additionalCss:e.css`
        top: 50%;
        transform: translateY(-50%);
        ${"right"===r?e.css`right: 10px`:e.css`left: 10px;`};
			`},o?g().createElement(C,null):t||g().createElement(g().Fragment,null)):g().createElement(g().Fragment,null),M=t()("span")`
  & {
    position: relative;
    cursor: pointer;
    width: ${e=>e.size}px;
    height: ${e=>e.size}px;
  }
`,S=t()("span")`
  & {
    display: flex;
    visibility: ${e=>e.isVisible?"visible":"hidden"};
    position: absolute;
    top: ${e=>l(e.top)};
    left: ${e=>l(e.left)};
    z-index: 10000;
    width: max-content;
    word-wrap: break-word;
    min-width: 200px;
    max-width: 400px;
    flex-shrink: 1;
    border-radius: 4px;
    background-color: ${s};
    color: #fff;
    text-align: center;
    padding: 10px 12px;
    box-shadow: 0px 0px 6px ${r};
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
    background-color: ${s};
    z-index: -10;
    ${t=>{switch(t.placement){case"top":return e.css`bottom: -10px`;case"bottom":return e.css`top: -1px`;case"right":return e.css`
            top: 30px;
            transform: translateY(-50%) rotate(45deg);
            left: -7px;
          `}}}
`;const W=e=>{var{size:t=24,color:r=o}=e;return function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}}(e,["size","color"]),g().createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:t,height:t,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},g().createElement("g",{fill:"none",stroke:r,strokeWidth:"2"},g().createElement("circle",{cx:"12",cy:"12",r:"10"}),g().createElement("path",{strokeLinecap:"round",d:"M10 8.484C10.5 7.494 11 7 12 7c1.246 0 2 .989 2 1.978s-.5 1.483-2 2.473V13m0 3.5v.5"})))};const D=e=>{var{children:t,text:r,placement:o="top"}=e,n=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["children","text","placement"]);const[i,s]=(0,h.useState)(!1),a=(0,h.useRef)(null),l=(0,h.useRef)(null),[c,p]=(0,h.useState)({state:!1,top:0,left:0,placement:o});return(0,h.useEffect)((()=>{if(a.current&&i&&l.current){const e=l.current.getBoundingClientRect();if("top"===o){let t=-1*(a.current.offsetHeight+10),r=o;return e.y<Math.abs(t)&&(r="bottom",t=l.current.offsetHeight+10),p({state:!0,placement:r,top:t,left:l.current.offsetWidth/2-a.current.offsetWidth/2-2})}if("bottom"===o){let t=l.current.offsetHeight+10,r=o;return window.innerHeight-e.bottom<a.current.offsetHeight&&(r="top",t=-1*(a.current.offsetHeight+10)),p({placement:r,top:t,left:l.current.offsetWidth/2-a.current.offsetWidth/2-2,state:!0})}if("right"===o){let e=-20,t=l.current.offsetWidth+20;return p({placement:o,state:!0,left:t,top:e})}}else p((e=>Object.assign(Object.assign({},e),{state:!1})))}),[i,a,l,o]),g().createElement(M,{size:n.size||24,ref:l,onMouseEnter:()=>{s(!0)},onMouseLeave:()=>s(!1)},t||g().createElement(W,Object.assign({},n)),g().createElement(S,{placement:c.placement,opacity:c.state?1:0,ref:a,isVisible:i,top:(null==c?void 0:c.top)||0,left:(null==c?void 0:c.left)||0},g().createElement(f,{width:"100%"},r)))},L=(0,h.forwardRef)((({value:e,onBlur:t,onFocus:r,onChange:o,label:n,placeholder:i,isDirty:s,errorMessage:a,children:l,readOnly:c,inputId:p,containerProps:d,icon:m,actions:h,actionHandler:u,iconPlacement:$="right",onDeleteAction:x,isLoading:b,tooltipIcon:v,tooltipText:E,onClick:O,onClear:k,tooltipPlacement:C},M)=>g().createElement(f,Object.assign({},d,{direction:"row",width:"100%"}),g().createElement(f,{width:"100%",position:"relative",direction:"column"},g().createElement(f,{width:"100%",align:"center",justify:"flex-start",mb:8,pl:6,pr:6,gap:6},g().createElement(y,{htmlFor:p},n),E&&g().createElement(D,{text:E,placement:C||"top",children:v||void 0})),g().createElement(f,{position:"relative",width:"100%",direction:"column"},g().createElement(w,{hasIcon:!!m,id:p,ref:M,iconPlacement:$,placeholder:i,value:e,onChange:o,onBlur:t,onFocus:r,readOnly:!!c,onClick:O}),g().createElement(H,{icon:m,iconPlacement:$,isLoading:b,onClear:e.length?k:void 0}),g().createElement(P,{content:l})),g().createElement(z,{isDirty:s,errorMessage:a||""}),g().createElement(j,{actions:h||[],actionHandler:u,onDeleteAction:x})))))})(),i})()));