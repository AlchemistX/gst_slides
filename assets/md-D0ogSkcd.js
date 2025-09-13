import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Mf8QwEC7.js";import{b as r,o as c,w as a,g as n,B as s,e as d,m as g,v as m,x as _,C as e}from"./modules/vue-DhAglAFb.js";import{_ as f}from"./top-title-DXL6wPsa.js";import{u as E,f as h}from"./slidev/context-DBUmR2Lv.js";import"./modules/unplugin-icons-CmKTh119.js";import"./index-CAm3x-8s.js";import"./modules/shiki-B1249S1Y.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-BOwRojIC.js";import"./layoutHelper-HtdtuDyr.js";const C={class:"flex flex-wrap ns-c-tight text-sm code-dense"},k={class:"w-2/5"},I={__name:"10-03-pad_and_capabilities.md__slidev_220",setup(R){const{$clicksContext:t,$frontmatter:p}=E();return t.setup(),(x,l)=>{const i=o;return c(),r(f,m(_(e(h)(e(p),219))),{title:a(u=>[...l[0]||(l[0]=[n("h1",null,"Caps Negotiation : Push-mode usecase",-1)])]),content:a(u=>[n("div",C,[l[2]||(l[2]=n("div",{class:"w-3/5 pr-5"},[n("h4",null,"4. Upstream Caps (Re)negotiation"),n("ul",null,[n("li",null,[n("strong",null,"목적"),s(": 이미 협상된 파이프라인을 새로운 형식으로 재협상")]),n("li",null,[n("strong",null,"방법"),s(": GST_EVENT_RECONFIGURE 이벤트를 업스트림으로 전송")]),n("li",null,[n("strong",null,"각 엘리먼트의 책임"),s(":")])]),n("div",{class:"custom-table-xs mt-5"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"엘리먼트 유형"),n("th",null,"책임")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"새 형식 제안")]),n("td",null,"ACCEPT_CAPS 쿼리로 확인 후 RECONFIGURE 이벤트 전송")]),n("tr",null,[n("td",null,[n("strong",null,"Transform nego.")]),n("td",null,"RECONFIGURE 이벤트를 업스트림으로 전달")]),n("tr",null,[n("td",null,[n("strong",null,"Fixed nego.")]),n("td",null,"RECONFIGURE 이벤트 드롭")]),n("tr",null,[n("td",null,[n("strong",null,"Dynamic nego.")]),n("td",null,[n("code",null,"gst_pad_check_reconfigure()"),s("로 NEED_RECONFIGURE 플래그 확인")])])])])])],-1)),n("div",k,[d(i,g({},{title:"",ranges:[]}),{default:a(()=>[...l[1]||(l[1]=[n("pre",{class:"shiki shiki-themes slack-dark snazzy-light slidev-code",style:{"--shiki-dark":"#E6E6E6","--shiki-light":"#565869","--shiki-dark-bg":"#222222","--shiki-light-bg":"#FAFBFC"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"            src              sink")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |                 |")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |  accepts?       |")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |<----------------| type B")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |      yes        |")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |- - - - - - - - >|-.")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |                 | | suggest B caps next")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |                 |<'")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |                 |")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |   push_event()  |")]),s(`
`),n("span",{class:"line"},[n("span",null," mark      .-|<----------------| send RECONFIGURE event")]),s(`
`),n("span",{class:"line"},[n("span",null,"renegotiate| |                 |")]),s(`
`),n("span",{class:"line"},[n("span",null,"           '>|                 |")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |  querycaps()    |")]),s(`
`),n("span",{class:"line"},[n("span",null,"renegotiate  |---------------->|")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |  suggest B      |")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |< - - - - - - - -|")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |                 |")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |  send_event()   |")]),s(`
`),n("span",{class:"line"},[n("span",null,"send CAPS    |---------------->| Receive type B,")]),s(`
`),n("span",{class:"line"},[n("span",null,"event B      |                 | reconfigure to")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |                 | process type B.")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |  push           |")]),s(`
`),n("span",{class:"line"},[n("span",null,"push buffer  |---------------->| Process buffer of type B")]),s(`
`),n("span",{class:"line"},[n("span",null,"             |                 |")])])],-1)])]),_:1},16)])])]),_:1},16)}}};export{I as default};
