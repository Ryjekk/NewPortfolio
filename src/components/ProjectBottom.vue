<template>
  <div class="bottom__wrapper">
    <!-- lefrt side -->
    <div class="bottom__wrapper__content">
      <h2 class="holder__hedding">{{ hedding_left }}</h2>
      <p class="holder__content">{{ content_left }}</p>
    </div>
    <!-- middle side -->
    <div class="bottom__wrapper__content">
      <h2 class="holder__hedding">{{ hedding_midd }}</h2>
      <p class=" holder__content">{{ content_midd }}</p>
    </div>
    <!-- right side -->
    <div class="bottom__wrapper__content">
      <h2 class="holder__hedding">{{ hedding_right }}</h2>
      <p class=" holder__content">{{ content_right }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBottom",
  props: {
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
