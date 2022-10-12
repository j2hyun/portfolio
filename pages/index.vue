<template>
  <div class="ly-pt-40">
    <div class="ly-title">
      <h1 class="title-h1">
        안녕하세요, 김지현입니다.<br />
        기획과 디자인을 바탕으로 UI/UX를 구현함으로서 사용자에게 보다 접근과
        사용이 편리한 화면을 제공하고자 합니다.
      </h1>
    </div>
    <div class="ly-section">
      <div class="ly-section-header">
        <h2 class="title-h2">이런 기술을 사용할수 있어요</h2>
      </div>
      <div class="ly-section-container">
        <Skill :skillList="skillList" />
      </div>
    </div>
    <div class="ly-section">
      <div class="ly-section-header">
        <h2 class="title-h2">
          총
          <span class="ft-color-primary ft-weight__bold">{{
            this.projectList.length
          }}</span
          >건의 프로젝트 경험이 있어요
        </h2>
      </div>
      <div class="ly-section-container">
        <Project :projectList="projectList" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import Skill from "../components/Skill.vue";
export default {
  components: { Skill, Project },
  name: "IndexPage",
  data() {
    return {
      skillList: [
        {
          title: "Mark Up",
          list: ["HTML5"],
        },
        {
          title: "Style",
          list: ["CSS/CSS3", "Scss", "styled-component"],
        },
        {
          title: "Script",
          list: ["javascript", "jQuery", "React.js", "Vue.js", "Storybook.js"],
        },
      ],
      projectList: [
        {
          title: "LS E-Link 관제 시스템 구축",
          startDate: "2022.08.04",
          endDate: "진행중",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "vue", tech: "Vue.js" },
          ],
          detail:
            "Vue.js 개발환경에서 Vuetify UI 라이브러리 기반 디자인 커스텀 하여 전체 페이지 화면 구현\n모드 변경 스위치에 따라, 두가지의 테마 모드(라이트, 다크)변경 가능하도록 구현 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n레이아웃 샘플 가이드 작업 및 제공",
        },
        {
          title: "SK_렌터카 EV Park 시스템 구축",
          startDate: "2022.04.20",
          endDate: "2022.7.31",
          role: "리더",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "palette", tech: "styled-component" },
            { icon: "javascript", tech: "javascript" },
            { icon: "react", tech: "React.js" },
            { icon: "javascript", tech: "Storybook.js" },
          ],
          detail:
            "React.js 개발환경에서 Material UI 라이브러리 기반 디자인 커스텀 작업\n조건에 따른 스타일 적용을 위해 styled-component 활용하여 작업\n협업을 위해 마크업 규칙 제공 및 안내\nStorybook.js를 활용하여 컴포넌트 활용 가이드 작업 및 제공",
        },
        {
          title: "KT 무선망 NMS 개발 유지 보수",
          startDate: "2022.02.01",
          endDate: "2022.03.01",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "유지 보수 프로젝트로 PC, Mobile  반응형 화면 수정 및 웹 표준 반영 작업\n신규 화면 요청 페이지 화면 구현",
        },
        {
          title: "KT 2021 차세대\nIDC OSS Portal 구축",
          startDate: "2021.12.14",
          endDate: "2022.03.16",
          role: "서브 리더",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "vue", tech: "Vue.js" },
          ],
          detail:
            "사용자, 관리자 단 사이트 구축 작업\nVue.js 개발 환경에서 Element UI 라이브러리 기반 디자인 커스텀 작업\n사용자 단 : 페이지 화면 구현 및 PC, Mobile 반응형 작업\n관리자 단  : 페이지 화면 구현 ",
        },
        {
          title: "KaKao Brain Openminicon\n컨퍼런스 사이트 구축",
          startDate: "2021.11.08",
          endDate: "2021.12.06",
          role: "서브 리더",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "vue", tech: "Vue.js" },
          ],
          detail:
            "Vue.js 개발 환경에서 작업\n전체 레이아웃, 일부 컨텐츠 인터렉션 담당 구현\n메인 페이지 PC, Mobile 반응형 작업\n웹 표준에 따라 IE , Safari 대응 작업 ",
        },
        {
          title: "한진택배 차량 관제 시스템",
          startDate: "2021.10.12",
          endDate: "2021.10.29",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "vue", tech: "Vue.js" },
          ],
          detail:
            "Vue.js 개발환경에서 Element UI 라이브러리 기반 디자인 커스텀 작업\n추후 담당하실 분을 위해 마크업 규칙 등 전반적인 초기 셋팅, 컴포넌트 작업",
        },
        {
          title: "LS_ITC 에너지 관제 시스템 구축",
          startDate: "2021.09.01",
          endDate: "2021.10.11",
          role: "팀원",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "vue", tech: "Vue.js" },
          ],
          detail:
            "Vue.js 개발환경에서 Vuetify UI 라이브러리 기반 디자인 커스텀 작업\n두가지 테마 모드(라이트, 다크) 중 라이트 모드 스타일 작업",
        },
        {
          title: "Lotte_롯데렌탈 B2B온라인 채널",
          startDate: "2021.07.19",
          endDate: "2021.08.26",
          role: "팀원",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "담당 파트 화면 구현 및 PC, Mobile 반응형 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업 기여",
        },
        {
          title: "KT 비대면 근무환경 정착을 위한\n전자서명 시스템 구축",
          startDate: "2021.06.17",
          endDate: "2021.10.01",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "전체 페이지 화면 구현, 특정 페이지 Mobile 반응형 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "KT 컴플라이언스 IT 시스템 유지보수",
          startDate: "2021.05.17",
          endDate: "2021.06.16",
          role: "리더",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "유지 보수 프로젝트로  웹 표준 관련 및 화면 상 이슈 페이지  PC, Mobile 수정 작업\n신규 화면 페이지 PC, Mobile  반응형 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "현대 하이브리드 모빌리티\n관제 시스템 구축",
          startDate: "2021.03.11",
          endDate: "2021.04.14",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "react", tech: "React.js" },
          ],
          detail:
            "React.js 개발 환경으로 전체 페이지 화면 구현\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n디자이너의 요청으로 일부 인터렉션 구현\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "EBS 온라인 클래스",
          startDate: "2021.02.27",
          endDate: "2021.04.30",
          role: "팀원",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "vue", tech: "Vue.js" },
          ],
          detail:
            "Vue.js 개발환경으로 작업된 프로젝트의 화면상의 이슈 수정 작업\n화면 QA 작업및 이슈 등록",
        },
        {
          title: "KT 영업전산\nCloud 전환 · ERP 재구축",
          startDate: "2020.12.14",
          endDate: "2021.05.14",
          role: "서브 리더",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "담당 파트 페이지 화면 구현\n리더로 투입되신 분의 부재(비상주 작업)으로 대신하여, 나머지 팀원들에게 작업 가이드\n웹표준에 맞추어 IE 대응 작업",
        },
        {
          title: "KNAT 국립재활원\n노인.장애인 보조기기연구 개발 사업",
          startDate: "2020.12.01",
          endDate: "2020.12.11",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹접근성에 맞는 시멘틱 태그를 활용하여 마크업 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "금성 초등교과서 과학 이러닝\n(디지털 교과서)",
          startDate: "2020.10.19",
          endDate: "2020.11.26",
          role: "팀원",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail: "금성 디지털 교과서 초등학교 과학 3학년 파트 작업",
        },
        {
          title: "KT 컴플라이언스 IT 시스템 구축",
          startDate: "2020.08.31",
          endDate: "2020.10.16",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "KT LMS 시스템 구축",
          startDate: "2020.08.31",
          endDate: "2020.10.30",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "현대 계정 사이트 구축",
          startDate: "2020.08.20",
          endDate: "2020.08.28",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "react", tech: "React.js" },
          ],
          detail:
            "React.js 개발 환경에서 Bootstrap UI 기반 디자인 커스텀 작업\n전체 화면 구현 및 PC, Mobile 반응형 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업",
        },
        {
          title: "기아 계정 사이트 구축",
          startDate: "2020.08.06",
          endDate: "2020.08.19",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "react", tech: "React.js" },
          ],
          detail:
            "React.js 개발 환경에서 전체 페이지 화면 구현\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 제공",
        },
        {
          title: "스포큐브 그룹수업 모바일 시스템",
          startDate: "2020.06.17",
          endDate: "2020.07.30",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
          ],
          detail:
            "전체 페이지 화면 구현\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업",
        },
        {
          title: "MINTIT 민팃 웹사이트 리뉴얼 용역",
          startDate: "2020.04.19",
          endDate: "2020.06.19",
          role: "팀원",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "담당 파트 페이지 화면 구현 및 PC, Mobile 반응형 작업\n[민팃 ATM 체험하기] 파트 페이지 인터랙션 작업\nCSS의 전처리기인 SCSS를 활용하여 스타일 작업\n추후 유지 보수를 위해 컴포넌트 가이드 작업 기여\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "SHIPDA 수입 물류 포워딩 플랫폼",
          startDate: "2020.04.20",
          endDate: "2020.06.17",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "WCBUY 크로스보더 이커머스",
          startDate: "2020.03.02",
          endDate: "2020.03.31",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "WEMEET24/7 모임 예약 플랫폼",
          startDate: "2020.02.03",
          endDate: "2020.04.17",
          role: "단독 진행",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "전체 페이지 화면 구현 및 PC, Mobile 반응형 작업\n웹 표준에 맞추어 IE 대응 작업",
        },
        {
          title: "KNAT 국립재활원\n2020년 중앙보조기기센터 개선",
          startDate: "2019.11.04",
          endDate: "2020.01.31",
          role: "팀원",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "유지 보수 프로젝트로 웹 접근성에 맞추어 개선, 일부 메뉴 페이지 수정 작업\n웹 접근성, 웹 표준에 맞는 신규 메뉴 페이지 마크업 및 화면 구현",
        },
        {
          title: "Bioapp 바이오앱 사이트 구축",
          startDate: "2019.07.04",
          endDate: "2019.10.15",
          role: "팀원",
          spec: [
            { icon: "html5", tech: "HTML5" },
            { icon: "css3", tech: "CSS" },
            { icon: "sass", tech: "Scss" },
            { icon: "javascript", tech: "javascript" },
            { icon: "javascript", tech: "jQuery" },
          ],
          detail:
            "사용자, 관리자 단 사이트 구축 작업\n사용자 단 : 페이지 화면 구현 및 PC, Mobile 반응형 작업\n관리자 단  : 페이지 화면 구현\n웹 표준에 맞추어 IE, Safari 대응 작업",
        },
      ],
    };
  },
};
</script>
