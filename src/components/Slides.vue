<template>
  <div id="slides">
    <div class="slideImage" :id="image.id" :style="setBackgroundImage"></div>
  </div>
</template>

<script>
export default {
  name: "Slides",
  props: {
    image: {
      type: Object
    }
  },
  computed: {
    setBackgroundImage() {
      return {
        backgroundImage: "url('" + this.image.url + "')"
      };
    }
  }
};
</script>
