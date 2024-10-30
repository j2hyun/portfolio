<template>
  <div :class="`ly-wrap ${dark ? 'dark-mode' : 'light-mode'}`">
    <header class="ly-header">
      <div class="ly-switch">
        <div class="txt-caption">Switch Theme</div>
        <div class="switch">
          <input type="checkbox" id="switch" /><label
            for="switch"
            @click="switchTheme"
            >Switch Toggle</label
          >
        </div>
      </div>
    </header>
    <div class="ly-inner">
      <div class="ly-container">
        <nuxt />
      </div>
      <button class="btn-top" @click="scrollTop">
        <i class="icon">☝️</i>
      </button>
    </div>
    <footer class="ly-footer">
      <div class="footer">&copy; All Rights Reserved By. Ji Hyun Kim</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    switchTheme() {
      this.dark = !this.dark;
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
