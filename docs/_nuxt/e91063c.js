(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{268:function(t,c,e){"use strict";e.r(c);e(127);var n={props:{projectList:{type:Array,default:function(){return[]}}},methods:{classObject:function(t){var c=["chip","chip-role"];switch(t){case"단독 진행":c.push("chip-done");break;case"팀원":default:c.push("chip-default");break;case"서브 리더":c.push("chip-secondary");break;case"리더":c.push("chip-primary")}return c.join(" ")}}},o=e(43),component=Object(o.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-card"},t._l(t.projectList,(function(e,n){return c("div",{key:n,staticClass:"card"},[c("div",{staticClass:"card-header"},[c("h3",{staticClass:"title-h3 card-title"},[t._v(t._s(e.title))]),t._v(" "),c("div",{staticClass:"ly-card-desc"},[c("div",{staticClass:"period"},[c("span",[t._v(t._s(e.startDate))]),t._v(" ~ "),c("span",{class:"".concat("진행중"===e.endDate?"ft-color-primary ft-weight__medium":"")},[t._v(t._s(e.endDate))])]),t._v(" "),c("div",{staticClass:"ly-chip-group ly-pt-8"},[c("div",{class:t.classObject(e.role)},[c("span",[t._v(t._s(e.role))])])])])]),t._v(" "),c("div",{staticClass:"card-container"},[e.subTitle?c("div",{staticClass:"card-help"},[c("i",{staticClass:"icon-alert-circle"}),t._v(" "),c("p",[t._v(t._s(e.subTitle))])]):t._e(),t._v(" "),c("div",{staticClass:"card-desc"},[c("h4",{staticClass:"title-h4"},[t._v("Tech Spec")]),t._v(" "),c("div",{staticClass:"card-desc-content"},[c("ul",{staticClass:"ly-chip-group"},t._l(e.spec,(function(e,n){return c("li",{key:n,staticClass:"chip chip-info"},[c("i",{class:"icon-logo-".concat(e.icon)}),t._v(" "),c("span",[t._v(t._s(e.tech))])])})),0)])]),t._v(" "),e.asis?c("div",{staticClass:"card-desc"},[c("h4",{staticClass:"title-h4"},[t._v("As-Is")]),t._v(" "),c("div",{staticClass:"card-desc-detail"},[t._v("\n          "+t._s(e.asis)+"\n        ")])]):t._e(),t._v(" "),e.tobe?c("div",{staticClass:"card-desc"},[c("h4",{staticClass:"title-h4"},[t._v("To-Be")]),t._v(" "),c("div",{staticClass:"card-desc-detail"},[t._v("\n          "+t._s(e.tobe)+"\n        ")])]):t._e(),t._v(" "),c("div",{staticClass:"card-desc"},[c("h4",{staticClass:"title-h4"},[t._v("What I did")]),t._v(" "),c("div",{staticClass:"card-desc-detail"},[t._v("\n          "+t._s(e.detail)+"\n        ")])])])])})),0)}),[],!1,null,null,null);c.default=component.exports},269:function(t,c,e){"use strict";e.r(c);var n={props:{msg:{type:String}}},o=e(43),component=Object(o.a)(n,(function(){var t=this,c=t._self._c;return c("p",{staticClass:"ly-tooltip"},[c("span",{staticClass:"tooltip"},[t._v(t._s(t.msg))]),t._v(" "),t._t("default")],2)}),[],!1,null,"5eed1d12",null);c.default=component.exports},270:function(t,c,e){"use strict";e.r(c);var n={props:{skillList:{type:Array,default:function(){return[]}}}},o=e(43),component=Object(o.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-card-group"},t._l(t.skillList,(function(e,n){return c("div",{key:n,staticClass:"card card__rounded"},[c("div",{staticClass:"card-header"},[c("h3",{staticClass:"title-h4"},[t._v(t._s(e.title))])]),t._v(" "),c("div",{staticClass:"card-container"},[c("ul",{staticClass:"card-list"},t._l(e.list,(function(e,n){return c("li",{key:n,staticClass:"card-list-item"},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])])})),0)}),[],!1,null,null,null);c.default=component.exports},271:function(t,c,e){"use strict";e.r(c);var n={props:{skills:{type:Array}}},o=e(43),component=Object(o.a)(n,(function(){var t=this,c=t._self._c;return c("ul",{staticClass:"ly-chip-group"},t._l(t.skills,(function(e,n){return c("li",{key:n,staticClass:"chip chip-info -large"},[c("i",{class:"icon-logo-".concat(e.icon)}),t._v(" "),c("span",[t._v(t._s(e.tech))])])})),0)}),[],!1,null,"260e8fe0",null);c.default=component.exports},272:function(t,c,e){"use strict";e.r(c);var n=e(268),o=e(270),l=e(269),r={components:{Skill:o.default,Project:n.default,Tooltip:l.default},name:"IndexPage",data:function(){return{skillList:[{title:"Mark Up",list:["HTML5"]},{title:"Style",list:["CSS/CSS3","Scss","styled-component"]},{title:"Script",list:["javascript","jQuery","React.js","Vue.js","Storybook.js"]}],skills:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS/CSS3"},{icon:"sass",tech:"Scss"},{icon:"palette",tech:"styled-component"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"},{icon:"react",tech:"React.js"}],currentProjects:[{title:"리얼리",subTitle:"금융 SNS ‘리얼리’는 익명의 유저들이 금융 데이터로 챌린지를 통해 리워드도 받고 서로의 금융 포트폴리오도 엿볼 수 있는 마이데이터 기반의 서비스",startDate:"2023.01.30",endDate:"진행중",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"공통 시스템 컴포넌트 기반 리얼리 디자인 및 기획 요건에 맞게 커스텀 진행하여 화면 구현\n2.0 개편 이후 코드리뷰를 통해 불필요한 소스 정리, 가독성에 초점을 맞춰 개선 진행하여 소스 품질을 높임\n월별 및 이벤트 챌린지 화면 구현, 짧은 배포주기 대응\n사용자의 경험을 극대화 하기 위해 기획 및 디자인 파트와 협업하여 인터랙션 구현 및 제공\n'코리아 핀테크 위크 2024' 행사 참여 키오스크 화면 구현"},{title:"디자인 시스템",startDate:"2023.01",endDate:"진행중",role:"리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"},{icon:"react",tech:"React.js"},{icon:"javascript",tech:"Storybook.js"}],asis:"일관성 없는 컨벤션 규칙, 중첩 및 산발적인 지역 관리로 인한\n재사용성 및 유지보수 효율성이 낮음",tobe:"공통 컴포넌트 작업을 통해 재 생산성 증대, 소스의 일관성 제공 및 규칙 정립",detail:"디자인 시스템 제작 및 운영 경험을 살려 디자인 시스템 구축 리딩 진행\n아토믹 디자인 패턴을 활용한 Code Component 표준 및 규격화 진행\nMonoRepo 환경을 통해 하나의 StyleSheet로 Vue.js, React.js SPA 프레임워크 별 디자인 시스템 컴포넌트 제작\n Storybook.js를 활용하여 컴포넌트 활용 가이드 작업 및 제공"},{title:"핀크 홈페이지",startDate:"2022.12",endDate:"진행중",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"palette",tech:"styled-component"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:"서비스별 유지 보수 진행\nPC, Mobile 반응형 화면 수정 및 웹 표준 반영 작업\n'안심신고' 보이스피싱 대응 안내 화면 구현 및 제공\n"},{title:"비상금대출",startDate:"24.05.23",endDate:"24.06.04",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"스마트 저축은행 '똑똑 대출' 온라인 설명의무 추가 화면 구현 및 FE개발\n똑똑 대출 전체 프로세스 확인 및 운영 FE개발 이슈 10건 개선\n금융소비자 보호법으로 인한 화면별 수정"},{title:"대환 대출, 대출 비교 웹",startDate:"23.05.15",endDate:"24.05.02",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"공통 시스템 컴포넌트 기반 디자인 및 기획 요건에 맞게 커스텀 진행하여 개편 화면 구현 및 제공\n제휴사에서 접근 가능한 별도의 웹인 '대출 비교 웹'을 서비스 개편에 맞추어 PC, Mobile 반응형으로 화면 구현 및 제공\n일부 제휴사 대출비교 조회 프로세스별 프로모션 노출 게이트 및 프로모션 화면 화면 구현 및 FE개발 \n제휴사 요구에 따른 화면 개선 대응"},{title:"주택담보대출",startDate:"23.11.02",endDate:"24.02.20",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"공통 시스템 컴포넌트 기반 디자인 및 기획 요건에 맞게 커스텀 진행하여 화면 구현\n프로모션 페이지 PC, Mobile 반응형 작업\n제휴사 요구에 따른 화면 개선 대응\n"},{title:"예적금",startDate:"23.01.11",endDate:"23.01.27",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:"공통 스타일 처리 및 컴포넌트 작성을 통해 생산성 증대\n디자인 요구에 따른 인터렉션 구현 및 제공"}],preProjects:[{title:"LS E-Link 관제 시스템 구축",startDate:"2022.08.04",endDate:"2022.11.20",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"Vue.js 개발환경에서 Vuetify UI 라이브러리 기반 디자인 커스텀 하여 전체 페이지 화면 구현\n모드 변경 스위치에 따라, 두가지의 테마 모드(라이트, 다크)변경 가능하도록 구현 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n레이아웃 샘플 가이드 작업 및 제공"},{title:"SK_렌터카 EV Park 시스템 구축",startDate:"2022.04.20",endDate:"2022.7.31",role:"리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"palette",tech:"styled-component"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"},{icon:"javascript",tech:"Storybook.js"}],detail:"React.js 개발환경에서 Material UI 라이브러리 기반 디자인 커스텀 작업\n조건에 따른 스타일 적용을 위해 styled-component 활용하여 작업\n협업을 위해 마크업 규칙 제공 및 안내\nStorybook.js를 활용하여 컴포넌트 활용 가이드 작업 및 제공"},{title:"KT 무선망 NMS 개발 유지 보수",startDate:"2022.02.01",endDate:"2022.03.01",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"유지 보수 프로젝트로 PC, Mobile  반응형 화면 수정 및 웹 표준 반영 작업\n신규 화면 요청 페이지 화면 구현"},{title:"KT 2021 차세대\nIDC OSS Portal 구축",startDate:"2021.12.14",endDate:"2022.03.16",role:"서브 리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"사용자, 관리자 단 사이트 구축 작업\nVue.js 개발 환경에서 Element UI 라이브러리 기반 디자인 커스텀 작업\n사용자 단 : 페이지 화면 구현 및 PC, Mobile 반응형 작업\n관리자 단  : 페이지 화면 구현 "},{title:"KaKao Brain Openminicon\n컨퍼런스 사이트 구축",startDate:"2021.11.08",endDate:"2021.12.06",role:"서브 리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"Vue.js 개발 환경에서 작업\n전체 레이아웃, 일부 컨텐츠 인터렉션 담당 구현\n메인 페이지 PC, Mobile 반응형 작업\n웹 표준에 따라 IE , Safari 대응 작업 "},{title:"한진택배 차량 관제 시스템",startDate:"2021.10.12",endDate:"2021.10.29",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"Vue.js 개발환경에서 Element UI 라이브러리 기반 디자인 커스텀 작업\n추후 담당하실 분을 위해 마크업 규칙 등 전반적인 초기 셋팅, 컴포넌트 작업"},{title:"LS_ITC 에너지 관제 시스템 구축",startDate:"2021.09.01",endDate:"2021.10.11",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"Vue.js 개발환경에서 Vuetify UI 라이브러리 기반 디자인 커스텀 작업\n두가지 테마 모드(라이트, 다크) 중 라이트 모드 스타일 작업"},{title:"Lotte_롯데렌탈 B2B온라인 채널",startDate:"2021.07.19",endDate:"2021.08.26",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"담당 파트 화면 구현 및 PC, Mobile 반응형 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업 기여"},{title:"KT 비대면 근무환경 정착을 위한\n전자서명 시스템 구축",startDate:"2021.06.17",endDate:"2021.10.01",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"전체 페이지 화면 구현, 특정 페이지 Mobile 반응형 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"KT 컴플라이언스 IT 시스템 유지보수",startDate:"2021.05.17",endDate:"2021.06.16",role:"리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"유지 보수 프로젝트로  웹 표준 관련 및 화면 상 이슈 페이지  PC, Mobile 수정 작업\n신규 화면 페이지 PC, Mobile  반응형 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"현대 하이브리드 모빌리티\n관제 시스템 구축",startDate:"2021.03.11",endDate:"2021.04.14",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:"React.js 개발 환경으로 전체 페이지 화면 구현\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n디자이너의 요청으로 일부 인터렉션 구현\n웹 표준에 맞추어 IE 대응 작업"},{title:"EBS 온라인 클래스",startDate:"2021.02.27",endDate:"2021.04.30",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:"Vue.js 개발환경으로 작업된 프로젝트의 화면상의 이슈 수정 작업\n화면 QA 작업및 이슈 등록"},{title:"KT 영업전산\nCloud 전환 · ERP 재구축",startDate:"2020.12.14",endDate:"2021.05.14",role:"서브 리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"담당 파트 페이지 화면 구현\n리더로 투입되신 분의 부재(비상주 작업)으로 대신하여, 나머지 팀원들에게 작업 가이드\n웹표준에 맞추어 IE 대응 작업"},{title:"KNAT 국립재활원\n노인.장애인 보조기기연구 개발 사업",startDate:"2020.12.01",endDate:"2020.12.11",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹접근성에 맞는 시멘틱 태그를 활용하여 마크업 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"금성 초등교과서 과학 이러닝\n(디지털 교과서)",startDate:"2020.10.19",endDate:"2020.11.26",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"금성 디지털 교과서 초등학교 과학 3학년 파트 작업"},{title:"KT 컴플라이언스 IT 시스템 구축",startDate:"2020.08.31",endDate:"2020.10.16",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"KT LMS 시스템 구축",startDate:"2020.08.31",endDate:"2020.10.30",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"현대 계정 사이트 구축",startDate:"2020.08.20",endDate:"2020.08.28",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:"React.js 개발 환경에서 Bootstrap UI 기반 디자인 커스텀 작업\n전체 화면 구현 및 PC, Mobile 반응형 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업"},{title:"기아 계정 사이트 구축",startDate:"2020.08.06",endDate:"2020.08.19",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:"React.js 개발 환경에서 전체 페이지 화면 구현\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 제공"},{title:"스포큐브 그룹수업 모바일 시스템",startDate:"2020.06.17",endDate:"2020.07.30",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"}],detail:"전체 페이지 화면 구현\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업"},{title:"MINTIT 민팃 웹사이트 리뉴얼 용역",startDate:"2020.04.19",endDate:"2020.06.19",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업\n[민팃 ATM 체험하기] 파트 페이지 인터랙션 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업 기여\n웹 표준에 맞추어 IE 대응 작업"},{title:"SHIPDA 수입 물류 포워딩 플랫폼",startDate:"2020.04.20",endDate:"2020.06.17",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"WCBUY 크로스보더 이커머스",startDate:"2020.03.02",endDate:"2020.03.31",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"WEMEET24/7 모임 예약 플랫폼",startDate:"2020.02.03",endDate:"2020.04.17",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹 표준에 맞추어 IE 대응 작업"},{title:"KNAT 국립재활원\n2020년 중앙보조기기센터 개선",startDate:"2019.11.04",endDate:"2020.01.31",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"유지 보수 프로젝트로 웹 접근성에 맞추어 개선, 일부 메뉴 페이지 수정 작업\n웹 접근성, 웹 표준에 맞는 신규 메뉴 페이지 마크업 및 화면 구현"},{title:"Bioapp 바이오앱 사이트 구축",startDate:"2019.07.04",endDate:"2019.10.15",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:"사용자, 관리자 단 사이트 구축 작업\n사용자 단 : 페이지 화면 구현 및 PC, Mobile 반응형 작업\n관리자 단  : 페이지 화면 구현\n웹 표준에 맞추어 IE, Safari 대응 작업"}]}}},h=e(43),component=Object(h.a)(r,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-pt-40"},[t._m(0),t._v(" "),c("div",{staticClass:"ly-section"},[c("div",{staticClass:"ly-section-header"},[c("h2",{staticClass:"title-h2"},[t._v("\n          현재는 "),c("Tooltip",{attrs:{msg:"하나금융지주 핀테크 자회사"}},[c("a",{attrs:{href:"https://www.finnq.com/",title:"핀크"}},[t._v("핀크")])]),t._v("에서 프로젝트를 진행하고 있어요\n        ")],1)]),t._v(" "),c("div",{staticClass:"ly-section-container"},[c("Project",{attrs:{"project-list":t.currentProjects}})],1)]),t._v(" "),c("div",{staticClass:"ly-section"},[c("div",{staticClass:"ly-section-header"},[c("h2",{staticClass:"title-h2"},[t._v("\n          이전에는 총\n          "),c("span",{staticClass:"ft-color-primary ft-weight__bold"},[t._v(t._s(this.preProjects.length))]),t._v("건의 프로젝트 경험이 있어요\n        ")])]),t._v(" "),c("div",{staticClass:"ly-section-container"},[c("Project",{attrs:{"project-list":t.preProjects}})],1)]),t._v(" "),c("div",{staticClass:"ly-section"},[t._m(1),t._v(" "),c("div",{staticClass:"ly-section-container"},[c("SkillChip",{attrs:{skills:t.skills}})],1)])])}),[function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-title"},[c("h1",{staticClass:"title-h1"},[t._v("\n        안녕하세요, 김지현입니다."),c("br"),t._v("\n        기획과 디자인을 바탕으로 UI/UX를 구현함으로서 사용자에게 접근과\n        사용이 편리한 화면을 제공하고자 합니다.\n      ")])])},function(){var t=this._self._c;return t("div",{staticClass:"ly-section-header border-none"},[t("h2",{staticClass:"title-h2"},[this._v("이런 기술을 사용할수 있어요")])])}],!1,null,null,null);c.default=component.exports;installComponents(component,{Tooltip:e(269).default,Project:e(268).default,SkillChip:e(271).default})}}]);