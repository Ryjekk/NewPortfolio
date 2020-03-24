<template>
  <div class="home">
    <Navigation @showDropdown="passEvent" />
    <TopBar :showMenu="showMenu" />
    <WrapperContent />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import WrapperContent from "../components/WrapperContent";

export default {
  name: "Home",
  components: {
    Navigation,
    TopBar,
    WrapperContent
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
