<template>
  <div class="bar">
    <span class="bar__item bar__item__dropdown" @click="toggleMenu">
      <svg class="bar__item__wrap__icon">
        <use xlink:href="../assets/ico/sprite.svg#burger"></use>
      </svg>
    </span>
    <div class="bar__item">
      <a
        href="https://github.com/Ryjekk"
        target="_blank"
        class="bar__item__wrap"
      >
        <svg class="bar__item__wrap__icon">
          <use xlink:href="../assets/ico/sprite.svg#github"></use>
        </svg>
      </a>
      <a
        href="mailto:ryjewski@gmail.com?Subject=Hello%20Marcin"
        class="bar__item__wrap"
      >
        <svg class="bar__item__wrap__icon">
          <use xlink:href="../assets/ico/sprite.svg#mail"></use>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/gitnuk_/"
        target="_blank"
        class="bar__item__wrap"
      >
        <svg class="bar__item__wrap__icon">
          <use xlink:href="../assets/ico/sprite.svg#instagram"></use>
        </svg>
      </a>
    </div>
    <div class="bar__item text__wrapper">
      <p class="bar__item__text">DOWN</p>
      <img src="../assets/ico/arrow.svg" class="bar__item__wrap" alt="Arrow" />
      <!-- TODO FIX ARROW SIZE -->
      <!-- <svg class="bar__item__wrap">
        <use xlink:href="../assets/ico/sprite.svg#arrow"></use>
      </svg> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    toggleMenu() {
      this.$emit("showDropdown");
    }
  }
};
</script>

<style lang="scss">
@import "../styles/components/navbar.scss";
</style>
