import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Mf8QwEC7.js";import{b as m,o as c,w as n,g as s,e as d,m as h,B as e,v as u,x as f,C as a}from"./modules/vue-DhAglAFb.js";import{_}from"./top-title-DXL6wPsa.js";import{u as S,f as g}from"./slidev/context-DBUmR2Lv.js";import"./modules/unplugin-icons-CmKTh119.js";import"./index-CAm3x-8s.js";import"./modules/shiki-B1249S1Y.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-BOwRojIC.js";import"./layoutHelper-HtdtuDyr.js";const k={class:"ns-c-tight text-sm code-dense"},T={class:"mt-5"},w={__name:"10-04-synchronization.md__slidev_228",setup(E){const{$clicksContext:l,$frontmatter:i}=S();return l.setup(),(v,t)=>{const o=r;return c(),m(_,u(f(a(g)(a(i),227))),{title:n(p=>[...t[0]||(t[0]=[s("h1",null,"Synchronization : Segment Event 와 running time 변환",-1)])]),content:n(p=>[s("div",k,[s("div",T,[t[2]||(t[2]=s("h4",null,"계산에 사용하는 용어 정리",-1)),d(o,h({},{title:"",ranges:[]}),{default:n(()=>[...t[1]||(t[1]=[s("pre",{class:"shiki shiki-themes slack-dark snazzy-light slidev-code",style:{"--shiki-dark":"#E6E6E6","--shiki-light":"#565869","--shiki-dark-bg":"#222222","--shiki-light-bg":"#FAFBFC"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"C : GstClock")]),e(`
`),s("span",{class:"line"},[s("span",null,"- C.running_time as the running_time obtained by looking at the clock")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"B : GstBuffer")]),e(`
`),s("span",{class:"line"},[s("span",null,"- B.timestamp = buffer timestamp (`GST_BUFFER_PTS` or `GST_BUFFER_DTS`)")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"S : GstSegment")]),e(`
`),s("span",{class:"line"},[s("span",null,"- S.start        : start field in the SEGMENT event. This is the lowest allowed timestamp.")]),e(`
`),s("span",{class:"line"},[s("span",null,"- S.stop         : stop field in the SEGMENT event. This is the highers allowed timestamp.")]),e(`
`),s("span",{class:"line"},[s("span",null,"- S.rate         : rate field of SEGMENT event. This is the playback rate.")]),e(`
`),s("span",{class:"line"},[s("span",null,"- S.base         : a base time for the time. This is the total elapsed `running_time`")]),e(`
`),s("span",{class:"line"},[s("span",null,"- S.offset       : an offset to apply to S.start or S.stop")]),e(`
`),s("span",{class:"line"},[s("span",null,"- S.time         : time field in the SEGMENT event. This the stream-time of S.start")]),e(`
`),s("span",{class:"line"},[s("span",null,"- S.applied_rate : The rate already applied to the segment.")])])],-1)])]),_:1},16)])])]),_:1},16)}}};export{w as default};
