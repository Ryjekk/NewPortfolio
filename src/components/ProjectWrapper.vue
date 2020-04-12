<template>
  <div class="project__wraper">
    <ProjectTop
      class="project__wraper__top"
      :hedding1="hedding1"
      :content1="content1"
      :info_element="info_element"
    />
    <ProjectMiddle
      class="project__wraper__middle"
      :project_img="project_img"
      :text="text"
      :text2="text2"
      :btn_link="btn_link"
      :btn_link2="btn_link2"
    />
    <ProjectBottom
      class="project__wraper__bottom"
      :hedding_left="hedding_left"
      :content_left="content_left"
      :hedding_midd="hedding_midd"
      :content_midd="content_midd"
      :hedding_right="hedding_right"
      :content_right="content_right"
    />
  </div>
</template>

<script>
import ProjectTop from "../components/ProjectTop";
import ProjectMiddle from "../components/ProjectMiddle";
import ProjectBottom from "../components/ProjectBottom";

export default {
  name: "ProjectWrapper",
  components: {
    ProjectTop,
    ProjectMiddle,
    ProjectBottom
  },
  props: {
    // TOP
    hedding1: {
      type: String
    },
    content1: {
      type: String
    },
    info_element: {
      type: String
    },
    // MID
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
    },
    // BOT
    hedding_left: {
      type: String
    },
    content_left: {
      type: String
    },
    hedding_midd: {
      type: String
    },
    content_midd: {
      type: String
    },
    hedding_right: {
      type: String
    },
    content_right: {
      type: String
    }
  }
};
</script>

<style></style>
