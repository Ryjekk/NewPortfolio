<template>
  <div class="content__out">
    <div class="content__in">
      <TextBox
        :hedding1="hedding1"
        :hedding2="hedding2"
        :content1="content1"
        :content2="content2"
        :content3="content3"
        :text="text"
        :btn_link="btn_link"
        :btn_show="btn_show"
      />
      <Picture />
    </div>
  </div>
</template>

<script>
import Picture from "../components/Picture";
import TextBox from "../components/TextBox";

export default {
  name: "WrapperContent",
  components: {
    Picture,
    TextBox
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
