<template>
  <div class="project__wraper">
    <ProjectTop
      class="project__wraper__top"
      :hedding1="hedding1"
      :content1="content1"
      :info_element_type="info_element_type"
      :info_element_code="info_element_code"
      :info_element_live="info_element_live"
      :info_element_stack="info_element_stack"
    />
    <ProjectMiddle
      class="project__wraper__middle"
      :project_img="project_img"
      :btn_link="btn_link"
      :btn_link2="btn_link2"
    />
    <ProjectBottom
      class="project__wraper__bottom"
      :content_left="content_left"
      :content_left_one="content_left_one"
      :content_left_two="content_left_two"
      :content_midd="content_midd"
      :content_midd_two="content_midd_two"
      :content_right="content_right"
      :content_right_one="content_right_one"
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
    info_element_type: {
      type: String
    },
    info_element_live: {
      type: String
    },
    info_element_stack: {
      type: Array
    },
    info_element_code: {
      type: String
    },
    // MID
    project_img: {
      type: String
    },
    btn_link: {
      type: String
    },
    btn_link2: {
      type: String
    },
    // BOT
    content_left: {
      type: String
    },
    content_left_one: {
      type: String
    },
    content_left_two: {
      type: String
    },
    content_midd: {
      type: String
    },
    content_midd_two: {
      type: String
    },
    content_right: {
      type: String
    },
    content_right_one: {
      type: String
    }
  }
};
</script>

<style></style>
