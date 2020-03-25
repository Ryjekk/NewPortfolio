<template>
  <div class="pic__wrapper">
    <div class="elipse elipse__background" :style="elipse__background"></div>
    <img src="../assets/img/marcin.svg" alt="me" class="picture__profile" />
  </div>
</template>

<script>
export default {
  name: "Picture",
  props: {
    elipse__background: {
      type: Object
    }
  }
};
</script>

<style></style>
