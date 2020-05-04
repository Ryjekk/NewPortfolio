<template>
  <div class="topbar">
    <div class="topbar__wrapper">
      <a href="#main" class="topbar__left">
        <p class="topbar__left__top">Marcin</p>
        <p class="topbar__left__bottom">Ryjewsky</p>
      </a>
      <div class="topbar__right" v-if="showMenu">
        <a href="/" class="topbar__right__item">Home</a>
        <a href="#about" class="topbar__right__item">About</a>
        <a href="#skills" class="topbar__right__item">Skills</a>
        <a href="#projects" class="topbar__right__item">Projects</a>
        <a href="#contact" class="topbar__right__item">Contact</a>
        <!-- <a href="" class="topbar__right__item">Dark Mode</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    showMenu: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
@import "../styles/components/topbar.scss";
</style>
