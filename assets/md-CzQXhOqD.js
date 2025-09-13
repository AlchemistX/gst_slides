import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Mf8QwEC7.js";import{b as u,o as c,w as a,g as s,B as n,e as d,m,v as g,x as _,C as e}from"./modules/vue-DhAglAFb.js";import{_ as f}from"./top-title-DXL6wPsa.js";import{u as h,f as k}from"./slidev/context-DBUmR2Lv.js";import"./modules/unplugin-icons-CmKTh119.js";import"./index-CAm3x-8s.js";import"./modules/shiki-B1249S1Y.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-BOwRojIC.js";import"./layoutHelper-HtdtuDyr.js";const x={class:"ns-c-tight text-sm code-dense"},v={class:"flex flex-wrap ns-c-tight text-sm code-dense mt-5"},y={class:"w-2/5"},S={__name:"10-03-pad_and_capabilities.md__slidev_217",setup(P){const{$clicksContext:t,$frontmatter:i}=h();return t.setup(),(w,l)=>{const p=r;return c(),u(f,g(_(e(k)(e(i),216))),{title:a(o=>[...l[0]||(l[0]=[s("h1",null,"Caps Negotiation : Push-mode usecase",-1)])]),content:a(o=>[s("div",x,[l[4]||(l[4]=s("div",{class:"highlight-box"},[s("h4",null,"기본 동작 원리"),s("p",null,"sink pad 는 미디어 형식을 upstream src pad 에 제안하고, src pad 는 이를 결정하여 downstream 에 알림.")],-1)),s("div",v,[l[2]||(l[2]=s("div",{class:"w-3/5"},[s("h4",null,"1. Fixed Negotiation"),s("ul",null,[s("li",null,[s("strong",null,"특징"),n(": 하나의 고정된 형식만 출력 가능")]),s("li",null,[s("strong",null,"예시"),n(": typefinder, 대부분의 demuxer, 일부 decoder, 고정 형식 source")]),s("li",null,[s("strong",null,"구현"),n(": "),s("code",null,"gst_pad_use_fixed_caps()"),n(" 사용, "),s("code",null,"gst_pad_set_caps()"),n("로 고정 caps 설정")])]),s("div",{class:"mt-4"},[s("h4",null,"2. Transform Negotiation"),s("ul",null,[s("li",null,[s("strong",null,"특징"),n(": 입력과 출력 형식 간에 고정된 변환 관계 존재")]),s("li",null,[s("strong",null,"예시"),n(": videobox, identity 엘리먼트, 비디오/오디오 효과, mulawdec/mulawenc")]),s("li",null,[s("strong",null,"구현"),n(": sink pad의 CAPS 이벤트 핸들러에서 source pad용 caps 계산 및 설정")])])])],-1)),s("div",y,[d(p,m({},{title:"",ranges:[]}),{default:a(()=>[...l[1]||(l[1]=[s("pre",{class:"shiki shiki-themes slack-dark snazzy-light slidev-code",style:{"--shiki-dark":"#E6E6E6","--shiki-light":"#565869","--shiki-dark-bg":"#222222","--shiki-light-bg":"#FAFBFC"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"            src              sink")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |                 |")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |  querycaps?     |")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |---------------->|")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |     caps        |")]),n(`
`),s("span",{class:"line"},[s("span",null,"select caps  |< - - - - - - - -|")]),n(`
`),s("span",{class:"line"},[s("span",null,"from the     |                 |")]),n(`
`),s("span",{class:"line"},[s("span",null,"candidates   |                 |")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |                 |-.")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |  accepts?       | |")]),n(`
`),s("span",{class:"line"},[s("span",null," type A      |---------------->| | optional")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |      yes        | |")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |< - - - - - - - -| |")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |                 |-'")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |  send_event()   |")]),n(`
`),s("span",{class:"line"},[s("span",null,"send CAPS    |---------------->| Receive type A,")]),n(`
`),s("span",{class:"line"},[s("span",null,"event A      |                 | reconfigure to ")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |                 | process type A. ")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |  push           |")]),n(`
`),s("span",{class:"line"},[s("span",null,"push buffer  |---------------->| Process buffer of type A")]),n(`
`),s("span",{class:"line"},[s("span",null,"             |                 |")])])],-1)])]),_:1},16)]),l[3]||(l[3]=s("div",{class:"w-1/4"},null,-1))])])]),_:1},16)}}};export{S as default};
