<template>
  <p class="ly-tooltip">
    <span class="tooltip">{{ msg }}</span>
    <slot/>
  </p>
</template>
<script>
export default {
  props: {
    msg: {
      type: String
    },
  },
};
</script>
<style scoped>

</style>