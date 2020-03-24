<template>
  <div class="holder">
    <h2 class="holder__hedding">
      {{ hedding }}
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
    <Button />
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "TextBox",
  components: {
    Button
  }
};
</script>

<style></style>
