<template>
  <div class="pic__wrapper">
    <div class="elipse elipse__background" :style="elipse__background"></div>
    <img src="../assets/img/marcin.svg" alt="me" class="picture__profile" />
  </div>
</template>

<script>
// import { gsap } from "gsap";

export default {
  name: "Picture",
  props: {
    elipse__background: {
      type: Object
    }
  }
  // mounted() {
  //   gsap.fromTo(
  //     "img",
  //     {
  //       opacity: 0,
  //       y: 30
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 2
  //     }
  //   );
  // }
};
</script>
