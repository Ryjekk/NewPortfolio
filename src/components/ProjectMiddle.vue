<template>
  <div class="middle__wrapper">
    <div class="middle__wrapper__buttons">
      <Button
        :text="text"
        :btn_link="btn_link"
        :btn_show="true"
        class="project_button"
      />
      <Button
        :text="text2"
        :btn_link="btn_link2"
        :btn_show="true"
        class="project_button"
      />
    </div>
    <div>
      <img :src="project_img" alt="Project" class="project_pic" />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "ProjectMiddle",
  components: {
    Button
  },
  props: {
    project_img: {
      type: String
    },
    text: {
      type: String
    },
    text2: {
      type: String
    },
    btn_link: {
      type: String
    },
    btn_link2: {
      type: String
    }
  }
};
</script>

<style></style>
