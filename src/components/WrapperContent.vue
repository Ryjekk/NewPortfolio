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
      <Picture
        v-show="pic_show"
        :elipse__background="elipse__background"
        :pic_show="pic_show"
      />
      <SkillGallery v-show="skill_show" />
    </div>
  </div>
</template>

<script>
import Picture from "../components/Picture";
import TextBox from "../components/TextBox";
import SkillGallery from "../components/SkillGallery";

export default {
  name: "WrapperContent",
  components: {
    Picture,
    TextBox,
    SkillGallery
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
    },
    pic_show: {
      type: Boolean
    },
    skill_show: {
      type: Boolean
    },
    elipse__background: {
      type: Object
    }
  }
};
</script>

<style></style>
