<template>
  <div :class="`ly-wrap ${dark ? 'dark-mode' : 'light-mode'}`">
    <div class="ly-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
};
</script>

<style></style>
