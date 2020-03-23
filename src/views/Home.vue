<template>
  <div class="home">
    <Navigation @showDropdown="passEvent" />
    <TopBar :showMenu="showMenu" />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";

export default {
  name: "Home",
  components: {
    Navigation,
    TopBar
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    passEvent() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
