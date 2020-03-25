<template>
  <div class="btn__wrapper">
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
      required: true
    },
    btn_link: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
