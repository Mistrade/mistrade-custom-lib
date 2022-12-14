!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("styled-components"),require("react"));else if("function"==typeof define&&define.amd)define(["styled-components","react"],t);else{var o="object"==typeof exports?t(require("styled-components"),require("react")):t(e[void 0],e.react);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,((e,t)=>(()=>{var o={721:(e,t,o)=>{var r;self,e.exports=(r=o(156),(()=>{"use strict";var e={156:e=>{e.exports=r}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{ClearIcon:()=>i,LoaderIcon:()=>r,TooltipIcon:()=>s});var e=o(156),t=o.n(e);const r=({size:e=24,color:o="#000",strokeWidth:r=2})=>t().createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:e,height:e,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},t().createElement("g",{fill:"none",stroke:o,strokeLinecap:"round",strokeWidth:r},t().createElement("path",{strokeDasharray:"60",strokeDashoffset:"60",strokeOpacity:".3",d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"},t().createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"1.3s",values:"60;0"})),t().createElement("path",{strokeDasharray:"15",strokeDashoffset:"15",d:"M12 3C16.9706 3 21 7.02944 21 12"},t().createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),t().createElement("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})))),i=({size:e=24,color:o="#000"})=>t().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:e,height:e,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},t().createElement("mask",{id:"svgIDb"},t().createElement("g",{fill:"none"},t().createElement("g",{stroke:"#fff",clipPath:"url(#svgIDa)"},t().createElement("path",{fill:"#fff",strokeLinejoin:"round",strokeWidth:"4.302",d:"M44.782 24.17L31.918 7.1L14.135 20.5L27.5 37l3.356-2.336L44.782 24.17Z"}),t().createElement("path",{strokeLinejoin:"round",strokeWidth:"4.302",d:"m27.5 37l-3.839 3.075l-10.563-.001l-2.6-3.45l-6.433-8.536L14.5 20.225"}),t().createElement("path",{strokeLinecap:"round",strokeWidth:"4.5",d:"M13.206 40.072h31.36"})),t().createElement("defs",null,t().createElement("clipPath",{id:"svgIDa"},t().createElement("path",{fill:o,d:"M0 0h48v48H0z"}))))),t().createElement("path",{fill:o,d:"M0 0h48v48H0z",mask:"url(#svgIDb)"})),s=({size:e=24,color:o="#000"})=>t().createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:e,height:e,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},t().createElement("g",{fill:"none",stroke:o,strokeWidth:"2"},t().createElement("circle",{cx:"12",cy:"12",r:"10"}),t().createElement("path",{strokeLinecap:"round",d:"M10 8.484C10.5 7.494 11 7 12 7c1.246 0 2 .989 2 1.978s-.5 1.483-2 2.473V13m0 3.5v.5"})))})(),n})())},156:e=>{"use strict";e.exports=t},466:t=>{"use strict";t.exports=e}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.r(i),n.d(i,{FlexBlock:()=>d,Heading:()=>m,TextInput:()=>I,Tooltip:()=>S});var e=n(466),t=n.n(e);const o="rgba(30,30,30,.45)",r="rgba(100,149,237,.9)",s="rgb(100,149,237)",a="rgba(0, 0, 0, .6)",l=e=>"string"==typeof e?e:`${e}px`,c=t=>e.css`
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
`,d=t()("div")`
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
`,f=e.css`
  & {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: bold;
    color: ${a};
    font-style: normal;
    text-align: left;
  }
`,m={H1:t()("h1")`
    & {
      ${f};
			margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"28px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)};
      line-height: 1.1;
    }
	`,H2:t()("h2")`
    & {
      ${f};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"24px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)};
      line-height: 1
    }
	`,H3:t()("h3")`
    & {
      ${f};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"22px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)}
    }
	`,H4:t()("h4")`
    & {
      ${f};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"20px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)}
    }
	`,H5:t()("h5")`
    & {
      ${f};
      margin: 0;
      font-size: ${e=>e.fs?l(e.fs):"18px"};
      color: ${e=>e.color||a};
      ${e=>c(e)};
      ${e=>p(e)}
    }
	`,H6:t()("h6")`
    & {
      ${f};
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
  border: 1px solid ${o};
  border-radius: 6px;
  outline: none;
  transition: all .3s ease-in;
  cursor: pointer;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;

  ${e=>e.hasIcon?b[e.iconPlacement||"right"]:x}
  &:focus {
    border: 1px solid ${r};
  }

  &:hover {
    box-shadow: 0 0 8px 0px ${r};
  }
`,v=t()("label")`
  & {
    width: fit-content;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: normal;
    color: ${r};
    line-height: 1;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;var y=n(721);const E=t().button`
  & {
    outline: none;
    padding: 4px 6px;
    color: ${o};
    background-color: #fff;
    border: 1px solid ${o};
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
`,k=t().span`
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
`,C=({item:e,onDelete:t,onSelect:o})=>{const r=(0,h.useCallback)((t=>{o&&o(e)}),[o,e]),n=(0,h.useCallback)((o=>{o.stopPropagation(),t&&t(e)}),[t,e]);return g().createElement(E,{onClick:r},g().createElement("span",null,e.title),t&&g().createElement(k,{onClick:n},g().createElement(y.ClearIcon,{size:14})))},z=t().span`
  & {
    font-style: normal;
    font-size: 12px;
    font-family: "Helvetica Neue", sans-serif;
    line-height: 1.1;
    display: flex;
    margin-bottom: 4px;
  }
`,j=({actions:e,actionHandler:t,onDeleteAction:o,actionsListTitle:r})=>e.length?g().createElement(d,{mt:6,pl:8,pr:8,width:"100%",justify:"flex-start",direction:"column"},r&&g().createElement(g().Fragment,null,"string"==typeof r?g().createElement(z,null,r):r),g().createElement(d,{width:"100%",justify:"flex-start",gap:6,wrap:"wrap",direction:"row"},e.map((e=>g().createElement(C,{item:e,onSelect:e=>t&&t(e),onDelete:o}))))):g().createElement(g().Fragment,null),H=({isDirty:t,errorMessage:o})=>t&&o?g().createElement(d,{mt:6,pl:8,pr:8,width:"100%",position:"relative",additionalCss:e.css`
        color: #ff5e5e;
        font-size: 12px;
        font-weight: bold
			`},o):g().createElement(g().Fragment,null),O=({content:e})=>e?g().createElement(d,{position:"relative",width:"100%"},e):g().createElement(g().Fragment,null),M=({icon:t,iconPlacement:o,isLoading:r,onClear:n})=>t||r||n?g().createElement(d,{position:"absolute",height:30,width:30,overflow:"hidden",justify:"right"===o?"flex-end":"center",align:"center",additionalCss:e.css`
        top: 50%;
        transform: translateY(-50%);
        ${"right"===o?e.css`right: 10px`:e.css`left: 10px;`};
			`},r?g().createElement(y.LoaderIcon,null):t||g().createElement(g().Fragment,null)):g().createElement(g().Fragment,null),L=t()("span")`
  & {
    position: relative;
    cursor: pointer;
    width: ${e=>e.size}px;
    height: ${e=>e.size}px;
  }
`,P=t()("span")`
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
    background-color: ${e=>e.bodyColor||s};
    color: #fff;
    text-align: center;
    padding: 10px 12px;
    box-shadow: 0px 0px 6px ${o};
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
    background-color: ${e=>e.bodyColor||s};
    z-index: -10;
    ${t=>{switch(t.placement){case"top":return e.css`bottom: -10px`;case"bottom":return e.css`top: -1px`;case"right":return e.css`
            top: 30px;
            transform: translateY(-50%) rotate(45deg);
            left: -7px;
          `}}}
`;const S=e=>{var{children:t,text:o,placement:r="top",bodyColor:n}=e,i=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}(e,["children","text","placement","bodyColor"]);const[s,a]=(0,h.useState)(!1),l=(0,h.useRef)(null),c=(0,h.useRef)(null),[p,f]=(0,h.useState)({state:!1,top:0,left:0,placement:r});return(0,h.useEffect)((()=>{if(l.current&&s&&c.current){const e=c.current.getBoundingClientRect();if("top"===r){let t=-1*(l.current.offsetHeight+10),o=r;return e.y<Math.abs(t)&&(o="bottom",t=c.current.offsetHeight+10),f({state:!0,placement:o,top:t,left:c.current.offsetWidth/2-l.current.offsetWidth/2-2})}if("bottom"===r){let t=c.current.offsetHeight+10,o=r;return window.innerHeight-e.bottom<l.current.offsetHeight&&(o="top",t=-1*(l.current.offsetHeight+10)),f({placement:o,top:t,left:c.current.offsetWidth/2-l.current.offsetWidth/2-2,state:!0})}if("right"===r){let e=-20,t=c.current.offsetWidth+20;return f({placement:r,state:!0,left:t,top:e})}}else f((e=>Object.assign(Object.assign({},e),{state:!1})))}),[s,l,c,r]),g().createElement(L,{size:i.size||24,ref:c,onMouseEnter:()=>{a(!0)},onMouseLeave:()=>a(!1)},t||g().createElement(y.TooltipIcon,Object.assign({},i)),g().createElement(P,{placement:p.placement,opacity:p.state?1:0,ref:l,isVisible:s,top:(null==p?void 0:p.top)||0,left:(null==p?void 0:p.left)||0},g().createElement(d,{width:"100%"},o)))},I=(0,h.forwardRef)((({value:e,onBlur:t,onFocus:o,onChange:n,label:i,placeholder:s,isDirty:a,errorMessage:l,children:c,readOnly:p,inputId:f,containerProps:m,icon:h,actions:u,actionHandler:$,iconPlacement:x="right",onDeleteAction:b,isLoading:y,tooltipIcon:E,tooltipText:k,onClick:C,onClear:z,tooltipPlacement:L,tooltipIconColor:P=r,actionsListTitle:I},W)=>g().createElement(d,Object.assign({},m,{direction:"row",width:"100%"}),g().createElement(d,{width:"100%",position:"relative",direction:"column"},g().createElement(d,{width:"100%",align:"center",justify:"flex-start",mb:8,pl:6,pr:6,gap:6},g().createElement(v,{htmlFor:f},i),k&&g().createElement(S,{text:k,color:P,placement:L||"top",children:E||void 0})),g().createElement(d,{position:"relative",width:"100%",direction:"column"},g().createElement(w,{hasIcon:!!h,id:f,ref:W,iconPlacement:x,placeholder:s,value:e,onChange:n,onBlur:t,onFocus:o,readOnly:!!p,onClick:C}),g().createElement(M,{icon:h,iconPlacement:x,isLoading:y,onClear:e.length?z:void 0}),g().createElement(O,{content:c})),g().createElement(H,{isDirty:a,errorMessage:l||""}),g().createElement(j,{actions:u||[],actionHandler:$,onDeleteAction:b,actionsListTitle:I})))))})(),i})()));