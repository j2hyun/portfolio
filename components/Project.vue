<template>
  <div class="ly-card">
    <div class="card" v-for="(project, index) in projectList" :key="index">
      <div class="card-header">
        <h3 class="title-h3 card-title">{{ project.title }}</h3>
        <div class="ly-card-desc">
          <div class="period">
            <span>{{ project.startDate }}</span> ~
            <span
              :class="`${
                project.endDate === '진행중'
                  ? 'ft-color-primary ft-weight__medium'
                  : ''
              }`"
              >{{ project.endDate }}</span
            >
          </div>
          <div class="ly-chip-group ly-pt-8">
            <div :class="classObject(project.role)">
              <span>{{ project.role }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card-desc">
          <h4 class="title-h4">Tech Spec</h4>
          <div class="card-desc-content">
            <ul class="ly-chip-group">
              <li
                class="chip chip-info"
                v-for="(spec, index) in project.spec"
                :key="index"
              >
                <i :class="`icon-logo-${spec.icon}`"></i>
                <span>{{ spec.tech }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-desc">
          <h4 class="title-h4">What I did</h4>
          <div class="card-desc-detail">
            <ul class="card-desc-detail-list">
              <li
                class="card-desc-detail-item"
                v-for="(item, index) in project.detail"
                :key="index"
              >
                <span>
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    classObject(role) {
      let classNm = ["chip", "chip-role"];

      switch (role) {
        case "단독 진행":
          classNm.push("chip-done");
          break;
        case "팀원":
          classNm.push("chip-default");
          break;
        case "서브 리더":
          classNm.push("chip-secondary");
          break;
        case "리더":
          classNm.push("chip-primary");
          break;
        default:
          classNm.push("chip-default");
          break;
      }

      return classNm.join(" ");
    },
  },
};
</script>

<style></style>
