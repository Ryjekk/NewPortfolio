<template>
  <div class="top__wrapper">
    <!-- lefrt side -->
    <div class="top__wrapper__left">
      <h2 class="holder__hedding">{{ hedding1 }}</h2>
      <p class="holder__content">{{ content1 }}</p>
    </div>
    <!-- right side -->
    <div class="top__wrapper__right">
      <h2 class="holder__hedding">Inforamtion about project</h2>
      <!-- info about project -->
      <div class="list__box">
        <div class="list__wrapper">
          <h6 class="list__heading">
            Type
          </h6>
          <ul class="list">
            <li class="list__el holder__content">{{ info_element_type }}</li>
          </ul>
        </div>
        <div class="list__wrapper">
          <h6 class="list__heading">
            Stack
          </h6>
          <ul class="list">
            <li
              v-for="el in info_element_stack"
              :key="el.id"
              class="list__el holder__content"
            >
              {{ el }}
            </li>
          </ul>
        </div>
        <div class="list__wrapper">
          <h6 class="list__heading">
            Code
          </h6>
          <ul class="list">
            <li
              class="list__el holder__content"
              v-html="info_element_code"
            ></li>
          </ul>
        </div>
        <div class="list__wrapper">
          <h6 class="list__heading">
            Live
          </h6>
          <ul class="list">
            <li
              class="list__el holder__content"
              v-html="info_element_live"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTop",
  props: {
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
    }
  }
};
</script>

<style></style>
