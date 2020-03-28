<template>
  <div class="btn__wrapper" v-if="btn_show">
    <a :href="btn_link">
      <button type="button" class="btn">
        {{ text }}
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: false
    },
    btn_link: {
      type: String,
      required: false
    },
    btn_show: {
      type: Boolean
    }
  }
};
</script>

<style></style>
