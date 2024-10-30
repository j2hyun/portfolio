<template>
  <ul class="ly-chip-group">
    <li class="chip chip-info -large" v-for="(skill, index) in skills" :key="index">
      <i :class="`icon-logo-${skill.icon}`"></i>
      <span>{{skill.tech}}</span>
    </li>
  </ul>
</template>
<script>
  export default {
    props: {
      skills:{
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>