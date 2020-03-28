<template>
  <div class="skill__wrapper contact__wrapper">
    <div class="contact__frame">
      <img
        src="../assets/img/ig1.png"
        alt="instagram pic"
        class="contact__frame__item item__1"
      />
      <div class="contact__frame__duo">
        <img
          src="../assets/img/ig2.png"
          alt="instagram pic"
          class="contact__frame__item item__2"
        />
        <img
          src="../assets/img/ig3.png"
          alt="instagram pic"
          class="contact__frame__item item__3"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactGallery",
  props: {
    heddingContact: {
      type: String
    }
  }
};
</script>
