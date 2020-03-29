<template>
  <div class="holder">
    <h2 class="holder__hedding" v-html="hedding1"></h2>
    <h2 class="holder__hedding">
      {{ hedding2 }}
    </h2>
    <p class="holder__content" v-html="content1"></p>
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
      type: String
    },
    hedding2: {
      type: String
    },
    content1: {
      type: String
    },
    content2: {
      type: String
    },
    content3: {
      type: String
    },
    text: {
      type: String
    },
    btn_link: {
      type: String
    },
    btn_show: {
      type: Boolean
    }
  }
};
</script>
