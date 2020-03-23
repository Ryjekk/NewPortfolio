<template>
  <div class="bar">
    <span class="bar__item bar__item__dropdown" @click="toggleMenu">
      <img
        src="../assets/ico/burger.svg"
        class="bar__item__wrap__icon"
        alt="Dark mode"
      />
    </span>
    <div class="bar__item">
      <a href="" class="bar__item__wrap">
        <img
          src="../assets/ico/github.svg"
          class="bar__item__wrap__icon"
          alt="Github icon"
        />
      </a>
      <a href="" class="bar__item__wrap">
        <img
          src="../assets/ico/mail.svg"
          class="bar__item__wrap__icon"
          alt="Mail icon"
        />
      </a>
      <a href="" class="bar__item__wrap">
        <img
          src="../assets/ico/instagram.svg"
          class="bar__item__wrap__icon"
          alt="Instagram Icon"
        />
      </a>
    </div>
    <div class="bar__item text__wrapper">
      <p class="bar__item__text">DOWN</p>
      <img src="../assets/ico/arrow.svg" class="bar__item__wrap" alt="Arrow" />
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
