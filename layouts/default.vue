<template>
  <div :class="`ly-wrap ${dark ? 'dark-mode' : 'light-mode'}`">
    <header class="ly-header">
        <div class="ly-switch">
          <div class="txt-caption">Switch Theme</div>
          <div class="switch">
            <input type="checkbox" id="switch" /><label for="switch" @click="switchTheme">Toggle</label>
          </div>
        </div>
    </header>
    <div class="ly-inner">
      <div class="ly-container">
        <nuxt />
      </div>
      <button class="btn-floating">
        <span class="txt-btn">
        <i class="icon-triangle"></i>
        <span class="txt">Top</span>
        </span>

      </button>
    </div>
    <footer class="ly-footer">
      <div class="footer">
        &copy; All Rights Reserved By. Ji Hyun Kim
      </div>
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
  methods:{
    switchTheme(){
     this.dark = !this.dark
    }
  }
};
</script>

<style></style>
