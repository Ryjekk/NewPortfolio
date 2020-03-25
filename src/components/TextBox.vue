<template>
  <div class="holder">
    <h2 class="holder__hedding">
      {{ hedding1 }}
    </h2>
    <h2 class="holder__hedding">
      {{ hedding2 }}
    </h2>
    <p class="holder__content">
      {{ content1 }}
    </p>
    <p class="holder__content">
      {{ content2 }}
    </p>
    <p class="holder__content">
      {{ content3 }}
    </p>
    <Button :text="text" :btn_link="btn_link" :btn_show="btn_show" />
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "TextBox",
  components: {
    Button
  },
  props: {
    hedding1: {
      type: String,
      default: null
    },
    hedding2: {
      type: String,
      default: null
    },
    content1: {
      type: String,
      default: null
    },
    content2: {
      type: String,
      default: null
    },
    content3: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    btn_link: {
      type: String,
      required: true
    },
    btn_show: {
      type: Boolean
    }
  }
};
</script>

<style></style>
