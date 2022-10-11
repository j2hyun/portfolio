<template>
<div class="ly-card">
  <div class="card" v-for="(project, index) in projectList" :key="index">
    <div class="card-header">
      <div class="title-h3">{{project.title}}</div>
      <div class="period ly-pt-10"><span>{{project.startDate}}</span> ~ <span :class="`${project.endDate==='진행중'?'ft-color-blue':''}`">{{project.endDate}}</span></div>
      <div class="ly-pt-5">
        <div class="chip chip-default">
          <span>{{project.role}}</span>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card-desc">
        <h4 class="title-h4">Tech Spec</h4>
        <div class="card-desc-content">
          <ul class="ly-chip-group">
            <li class="chip chip-info" v-for="(spec, index) in project.spec" :key="index">
              <i :class="`icon-logo-${spec.icon}`"></i>
              <span>{{spec.tech}}</span>
            </li>
          </ul>
          </div>
        </div>
      <div class="card-desc">
        <h4 class="title-h4">What I did</h4>
        <div class="card-desc-content">
          <div class="txt">
            {{project.detail}}
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:{
    projectList:{
      type: Array,
      default: () => [],
    }
  }
};
</script>

<style></style>
