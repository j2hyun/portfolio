(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{268:function(t,c,e){"use strict";e.r(c);e(127);var n={props:{projectList:{type:Array,default:function(){return[]}}},methods:{classObject:function(t){var c=["chip","chip-role"];switch(t){case"단독 진행":c.push("chip-done");break;case"팀원":default:c.push("chip-default");break;case"서브 리더":c.push("chip-secondary");break;case"리더":c.push("chip-primary")}return c.join(" ")}}},l=e(43),component=Object(l.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-card"},t._l(t.projectList,(function(e,n){return c("div",{key:n,staticClass:"card"},[c("div",{staticClass:"card-header"},[c("h3",{staticClass:"title-h3 card-title"},[t._v(t._s(e.title))]),t._v(" "),c("div",{staticClass:"ly-card-desc"},[c("div",{staticClass:"period"},[c("span",[t._v(t._s(e.startDate))]),t._v(" ~\n          "),c("span",{class:"".concat("진행중"===e.endDate?"ft-color-primary ft-weight__medium":"")},[t._v(t._s(e.endDate))])]),t._v(" "),c("div",{staticClass:"ly-chip-group ly-pt-8"},[c("div",{class:t.classObject(e.role)},[c("span",[t._v(t._s(e.role))])])])])]),t._v(" "),c("div",{staticClass:"card-container"},[c("div",{staticClass:"card-desc"},[c("h4",{staticClass:"title-h4"},[t._v("Tech Spec")]),t._v(" "),c("div",{staticClass:"card-desc-content"},[c("ul",{staticClass:"ly-chip-group"},t._l(e.spec,(function(e,n){return c("li",{key:n,staticClass:"chip chip-info"},[c("i",{class:"icon-logo-".concat(e.icon)}),t._v(" "),c("span",[t._v(t._s(e.tech))])])})),0)])]),t._v(" "),c("div",{staticClass:"card-desc"},[c("h4",{staticClass:"title-h4"},[t._v("What I did")]),t._v(" "),c("div",{staticClass:"card-desc-detail"},[c("ul",{staticClass:"card-desc-detail-list"},t._l(e.detail,(function(e,n){return c("li",{key:n,staticClass:"card-desc-detail-item"},[c("span",[t._v("\n                "+t._s(e)+"\n              ")])])})),0)])])])])})),0)}),[],!1,null,null,null);c.default=component.exports},269:function(t,c,e){"use strict";e.r(c);var n={props:{skillList:{type:Array,default:function(){return[]}}}},l=e(43),component=Object(l.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-card-group"},t._l(t.skillList,(function(e,n){return c("div",{key:n,staticClass:"card card__rounded"},[c("div",{staticClass:"card-header"},[c("h3",{staticClass:"title-h4"},[t._v(t._s(e.title))])]),t._v(" "),c("div",{staticClass:"card-container"},[c("ul",{staticClass:"card-list"},t._l(e.list,(function(e,n){return c("li",{key:n,staticClass:"card-list-item"},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])])})),0)}),[],!1,null,null,null);c.default=component.exports},270:function(t,c,e){"use strict";e.r(c);var n=e(268),l={components:{Skill:e(269).default,Project:n.default},name:"IndexPage",data:function(){return{skillList:[{title:"Mark Up",list:["HTML5"]},{title:"Style",list:["CSS/CSS3","Scss","styled-component"]},{title:"Script",list:["javascript","jQuery","React.js","Vue.js","Storybook.js"]}],projectList:[{title:"LS E-Link 관제 시스템 구축",startDate:"2022.08.04",endDate:"진행중",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:["Vue.js 개발환경에서 Vuetify UI 라이브러리 기반 디자인 커스텀 하여 전체 페이지 화면 구현","모드 변경 스위치에 따라, 두가지의 테마 모드(라이트, 다크)변경 가능하도록 구현 작업","CSS의 전처리기인 SCSS를 활용하여 스타일 작업","레이아웃 샘플 가이드 작업 및 제공"]},{title:"SK_렌터카 EV Park 시스템 구축",startDate:"2022.04.20",endDate:"2022.7.31",role:"리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"palette",tech:"styled-component"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"},{icon:"javascript",tech:"Storybook.js"}],detail:["React.js 개발환경에서 Material UI 라이브러리 기반 디자인 커스텀 작업","styled-component 활용하여 작업","Storybook.js를 활용하여 컴포넌트 활용 가이드 작업 및 제공","협업을 위한 마크업 컨벤션 규칙 제공 및 안내"]},{title:"KT 무선망 NMS 개발 유지 보수",startDate:"2022.02.01",endDate:"2022.03.01",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["유지 보수 프로젝트로 PC, Mobile  반응형 화면 수정 및 웹 표준 반영 작업","신규 화면 요청 페이지 화면 구현"]},{title:"KT 2021 차세대\nIDC OSS Portal 구축",startDate:"2021.12.14",endDate:"2022.03.16",role:"서브 리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:["사용자, 관리자 단 사이트 구축 작업","Vue.js 개발 환경에서 Element UI 라이브러리 기반 디자인 커스텀 작업","사용자 단 : 페이지 화면 구현 및 PC, Mobile 반응형 작업","관리자 단  : 페이지 화면 구현 "]},{title:"KaKao Brain Openminicon\n컨퍼런스 사이트 구축",startDate:"2021.11.08",endDate:"2021.12.06",role:"서브 리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:["Vue.js 개발 환경에서 작업","전체 레이아웃, 일부 컨텐츠 인터렉션 담당 구현","메인 페이지 PC, Mobile 반응형 작업","웹 표준 및 크로스브라우징 작업"]},{title:"한진택배 차량 관제 시스템",startDate:"2021.10.12",endDate:"2021.10.29",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:["Vue.js 개발환경에서 Element UI 라이브러리 기반 디자인 반영 컴포넌트 작업","초기 셋팅 및 마크업 컨벤션 규칙 설정"]},{title:"LS_ITC 에너지 관제 시스템 구축",startDate:"2021.09.01",endDate:"2021.10.11",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:["Vue.js 개발환경에서 Vuetify UI 라이브러리 기반 디자인 반영 컴포넌트 작업","두가지 테마 모드(라이트, 다크) 중 라이트 모드 스타일 작업"]},{title:"Lotte_롯데렌탈 B2B온라인 채널",startDate:"2021.07.19",endDate:"2021.08.26",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["담당 파트 화면 구현 및 PC, Mobile 반응형 작업","CSS의 전처리기인 SCSS를 활용하여 스타일 작업","컴포넌트 가이드 작업 기여"]},{title:"KT 비대면 근무환경 정착을 위한\n전자서명 시스템 구축",startDate:"2021.06.17",endDate:"2021.10.01",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["전체 페이지 화면 구현, 특정 페이지 Mobile 반응형 작업","CSS의 전처리기인 SCSS를 활용하여 스타일 작업","추후 유지 보수를 위해 컴포넌트 가이드 작업","웹 표준 및 크로스브라우징 작업"]},{title:"KT 컴플라이언스 IT 시스템 유지보수",startDate:"2021.05.17",endDate:"2021.06.16",role:"리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["웹 표준 관련 및 화면 상 이슈 페이지  PC, Mobile 수정 작업","신규 화면 페이지 PC, Mobile  반응형 작업","웹 표준 및 크로스브라우징 작업"]},{title:"현대 하이브리드 모빌리티\n관제 시스템 구축",startDate:"2021.03.11",endDate:"2021.04.14",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:["React.js 개발 환경으로 전체 페이지 화면 구현","CSS의 전처리기인 SCSS를 활용하여 스타일 작업","추후 유지 보수를 위해 컴포넌트 가이드 작업","인터렉션 구현","웹 표준 및 크로스브라우징 작업"]},{title:"EBS 온라인 클래스",startDate:"2021.02.27",endDate:"2021.04.30",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"vue",tech:"Vue.js"}],detail:["Vue.js 개발환경으로 작업된 프로젝트의 화면상의 이슈 수정 작업","화면 QA 작업및 이슈 등록"]},{title:"KT 영업전산\nCloud 전환 · ERP 재구축",startDate:"2020.12.14",endDate:"2021.05.14",role:"서브 리더",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["담당 파트 페이지 화면 구현","리더로 투입되신 분의 부재(비상주 작업)으로 대신하여, 나머지 팀원들에게 작업 가이드","웹 표준 및 크로스브라우징 작업"]},{title:"KNAT 국립재활원\n노인.장애인 보조기기연구 개발 사업",startDate:"2020.12.01",endDate:"2020.12.11",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["전체 페이지 화면 구현 및 PC, Mobile 반응형 작업","웹접근성에 맞는 시멘틱 태그를 활용하여 마크업 작업","웹 표준 및 크로스브라우징 작업"]},{title:"금성 초등교과서 과학 이러닝\n(디지털 교과서)",startDate:"2020.10.19",endDate:"2020.11.26",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["금성 디지털 교과서 초등학교 과학 3학년 파트 작업"]},{title:"KT 컴플라이언스 IT 시스템 구축",startDate:"2020.08.31",endDate:"2020.10.16",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업","추후 유지 보수를 위해 컴포넌트 가이드 작업","웹 표준 및 크로스브라우징 작업"]},{title:"KT LMS 시스템 구축",startDate:"2020.08.31",endDate:"2020.10.30",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업","추후 유지 보수를 위해 컴포넌트 가이드 작업","웹 표준 및 크로스브라우징 작업"]},{title:"현대 계정 사이트 구축",startDate:"2020.08.20",endDate:"2020.08.28",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:["React.js 개발 환경에서 Bootstrap UI 기반 디자인 커스텀 작업","전체 화면 구현 및 PC, Mobile 반응형 작업","CSS의 전처리기인 SCSS를 활용하여 스타일 작업","추후 유지 보수를 위해 컴포넌트 가이드 작업"]},{title:"기아 계정 사이트 구축",startDate:"2020.08.06",endDate:"2020.08.19",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"react",tech:"React.js"}],detail:["React.js 개발 환경에서 전체 페이지 화면 구현","CSS의 전처리기인 SCSS를 활용하여 스타일 작업","추후 유지 보수를 위해 컴포넌트 가이드 제공"]},{title:"스포큐브 그룹수업 모바일 시스템",startDate:"2020.06.17",endDate:"2020.07.30",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"}],detail:["전체 페이지 화면 구현","CSS의 전처리기인 SCSS를 활용하여 스타일 작업"]},{title:"MINTIT 민팃 웹사이트 리뉴얼 용역",startDate:"2020.04.19",endDate:"2020.06.19",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업","[민팃 ATM 체험하기] 파트 페이지 인터랙션 작업","CSS의 전처리기인 SCSS를 활용하여 스타일 작업","컴포넌트 가이드 작업 기여","웹 표준 및 크로스브라우징 작업"]},{title:"SHIPDA 수입 물류 포워딩 플랫폼",startDate:"2020.04.20",endDate:"2020.06.17",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["전체 페이지 화면 구현 및 PC, Mobile 반응형 작업","웹 표준 및 크로스브라우징 작업"]},{title:"WCBUY 크로스보더 이커머스",startDate:"2020.03.02",endDate:"2020.03.31",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["전체 페이지 화면 구현 및 PC, Mobile 반응형 작업","웹 표준 및 크로스브라우징 작업"]},{title:"WEMEET24/7 모임 예약 플랫폼",startDate:"2020.02.03",endDate:"2020.04.17",role:"단독 진행",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["전체 페이지 화면 구현 및 PC, Mobile 반응형 작업","웹 표준 및 크로스브라우징 작업"]},{title:"KNAT 국립재활원\n2020년 중앙보조기기센터 개선",startDate:"2019.11.04",endDate:"2020.01.31",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["웹 접근성에 맞추어 개선, 일부 메뉴 페이지 수정 작업","웹 접근성, 웹 표준에 맞는 신규 메뉴 페이지 마크업 및 화면 구현"]},{title:"Bioapp 바이오앱 사이트 구축",startDate:"2019.07.04",endDate:"2019.10.15",role:"팀원",spec:[{icon:"html5",tech:"HTML5"},{icon:"css3",tech:"CSS"},{icon:"sass",tech:"Scss"},{icon:"javascript",tech:"javascript"},{icon:"javascript",tech:"jQuery"}],detail:["사용자, 관리자 단 사이트 구축 작업","사용자 단 : 페이지 화면 구현 및 PC, Mobile 반응형 작업","관리자 단  : 페이지 화면 구현","웹 표준 및 크로스브라우징 작업"]}]}}},o=e(43),component=Object(o.a)(l,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-pt-40"},[t._m(0),t._v(" "),c("div",{staticClass:"ly-section"},[t._m(1),t._v(" "),c("div",{staticClass:"ly-section-container"},[c("Skill",{attrs:{skillList:t.skillList}})],1)]),t._v(" "),c("div",{staticClass:"ly-section"},[c("div",{staticClass:"ly-section-header"},[c("h2",{staticClass:"title-h2"},[t._v("\n        총\n        "),c("span",{staticClass:"ft-color-primary ft-weight__bold"},[t._v(t._s(this.projectList.length))]),t._v("건의 프로젝트 경험이 있어요\n      ")])]),t._v(" "),c("div",{staticClass:"ly-section-container"},[c("Project",{attrs:{projectList:t.projectList}})],1)])])}),[function(){var t=this,c=t._self._c;return c("div",{staticClass:"ly-title"},[c("h1",{staticClass:"title-h1"},[t._v("\n      안녕하세요, 김지현입니다."),c("br"),t._v("\n      협업을 바탕으로 UI/UX를 구현함으로서 사용자에게 접근과 사용이 편리한\n      화면을 제공하고자 합니다.\n    ")])])},function(){var t=this._self._c;return t("div",{staticClass:"ly-section-header"},[t("h2",{staticClass:"title-h2"},[this._v("이런 기술을 사용할수 있어요")])])}],!1,null,null,null);c.default=component.exports;installComponents(component,{Skill:e(269).default,Project:e(268).default})}}]);