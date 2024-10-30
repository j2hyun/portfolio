<template>
  <div class="ly-card-group">
    <div
      class="card card__rounded"
      v-for="(skill, index) in skillList"
      :key="index"
    >
      <div class="card-header">
        <h3 class="title-h4">{{ skill.title }}</h3>
      </div>
      <div class="card-container">
        <ul class="card-list">
          <li
            class="card-list-item"
            v-for="(item, index) in skill.list"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skillList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
