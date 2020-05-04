<template>
  <div class="bottom__wrapper">
    <!-- lefrt side -->
    <div class="bottom__wrapper__content">
      <h2 class="holder__hedding">Project Purpose and Goal</h2>
      <p class="holder__content">{{ content_left }}</p>
      <p class="holder__content">{{ content_left_one }}</p>
      <p class="holder__content">{{ content_left_two }}</p>
    </div>
    <!-- middle side -->
    <div class="bottom__wrapper__content">
      <h2 class="holder__hedding">Stack explanation</h2>
      <p class=" holder__content">{{ content_midd }}</p>
      <p class=" holder__content">{{ content_midd_two }}</p>
    </div>
    <!-- right side -->
    <div class="bottom__wrapper__content">
      <h2 class="holder__hedding">Problems and Future Improvements</h2>
      <p class=" holder__content">{{ content_right }}</p>
      <p class=" holder__content">{{ content_right_one }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBottom",
  props: {
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
