<template>
  <div class="gallery__wrapper">
    <Slides :image="images[choseImage]" />
    <div class="arrow__box">
      <div @click="nextImage">
        <svg class="arrow">
          <use xlink:href="../assets/ico/sprite.svg#right"></use>
        </svg>
      </div>
      <div @click="previousImage">
        <svg class="arrow">
          <use xlink:href="../assets/ico/sprite.svg#left"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Slides from "../components/Slides";

export default {
  name: "ProjectGallery",
  components: {
    Slides
  },
  data() {
    return {
      images: [
        {
          id: "0",
          url: require("../assets/project/pic0.png")
        },
        {
          id: "1",
          url: require("../assets/project/pic1.png")
        },
        {
          id: "2",
          url: require("../assets/project/pic2.png")
        },
        {
          id: "3",
          url: require("../assets/project/pic3.png")
        },
        {
          id: "4",
          url: require("../assets/project/pic4.png")
        }
      ],
      choseImage: 0
    };
  },
  methods: {
    nextImage() {
      this.choseImage < 4
        ? (this.choseImage = this.choseImage + 1)
        : (this.choseImage = 0);

      this.$emit("getImgId", this.choseImage);
    },
    previousImage() {
      if (this.choseImage > 0) {
        this.choseImage = this.choseImage - 1;
      } else {
        this.choseImage = 4;
      }

      this.$emit("getImgId", this.choseImage);
    }
  }
};
</script>
