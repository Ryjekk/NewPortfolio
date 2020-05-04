<template>
  <div class="skill__wrapper">
    <!-- <img src="../assets/skills/tail.svg" alt="me" class="picture__profile" /> -->
    <div class="skill__frame">
      <svg class="skill__frame__item">
        <use xlink:href="../assets/skills/sprite.svg#css3"></use>
      </svg>
      <svg class="skill__frame__item">
        <use xlink:href="../assets/skills/sprite.svg#html5"></use>
      </svg>
      <svg class="skill__frame__item">
        <use xlink:href="../assets/skills/sprite.svg#sass"></use>
      </svg>
    </div>

    <div class="skill__frame">
      <svg class="skill__frame__item icon_tailwind">
        <use xlink:href="../assets/skills/sprite.svg#tailwind"></use>
      </svg>
      <svg class="skill__frame__item">
        <use xlink:href="../assets/skills/sprite.svg#github"></use>
      </svg>
      <svg class="skill__frame__item icon_js">
        <use xlink:href="../assets/skills/sprite.svg#javascript"></use>
      </svg>
    </div>

    <div class="skill__frame">
      <svg class="skill__frame__item">
        <use xlink:href="../assets/skills/sprite.svg#vue"></use>
      </svg>
      <svg class="skill__frame__item icon_nuxt">
        <use xlink:href="../assets/skills/sprite.svg#nuxt"></use>
      </svg>
      <!-- <svg class="skill__frame__item">
        <use xlink:href="../assets/skills/sprite.svg#react"></use>
      </svg> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillGallery"
};
</script>
