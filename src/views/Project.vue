<template>
  <div class="home home__lines">
    <Navigation @showDropdown="passEvent" />
    <TopBar :showMenu="showMenu" />
    <!-- CONTENT -->
    <ProjectWrapper
      v-for="projectContent in project.content"
      :key="projectContent.id"
      :hedding1="projectContent.hedding1"
      :content1="projectContent.content1"
      :info_element_type="projectContent.info_element_type"
      :info_element_code="projectContent.info_element_code"
      :info_element_live="projectContent.info_element_live"
      :info_element_stack="projectContent.info_element_stack"
      :project_img="projectContent.project_img"
      :btn_link="projectContent.btn_link"
      :btn_link2="projectContent.btn_link2"
      :content_left="projectContent.content_left"
      :content_midd="projectContent.content_midd"
      :content_right="projectContent.content_right"
    />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import ProjectWrapper from "../components/ProjectWrapper";

export default {
  name: "Project",
  components: {
    Navigation,
    TopBar,
    ProjectWrapper
  },
  data() {
    return {
      showMenu: false,
      project: {
        content: [
          {
            // TOP
            hedding1: "My piervious portfolio",
            content1:
              "My piervious portfolia is a project I put together after learing Sass. This webiste was the perfect way to improve my understanding of implementing structured CSS code.",
            info_element_type: "Personal",
            info_element_code:
              '<a href="https://github.com/Ryjekk/Inuk-Website"><strong>Repository</strong></a>',
            info_element_live:
              '<a href="https://inuk.netlify.app/"><strong>View website</strong></a>',
            info_element_stack: [
              "HTML",
              "CSS",
              "Sass",
              "Netlify",
              "JavaScript"
            ],
            // MID
            project_img: require("../assets/project/pic0.png"),
            btn_link: "https://github.com/Ryjekk/Inuk-Website",
            btn_link2: "https://inuk.netlify.app/",
            // BOT
            content_left:
              "As the main purpose of this project was to improve my comprehension of SASS like also to build a page where I can show my projects. ",
            content_midd:
              "For this project I used Vanila Javascript, HTML and CSS, just to fell more sure of way of using it, like also to imprve my skill in usinf Flexbox and CSS Grids. I hosted it through Netlify, because its easy, free and how I've hosted many of my projects.",
            content_right:
              "Main problems is taht this webside is ujisng plain simple HTML. Because of that I decidet to build more complex website."
          }
        ]
      }
    };
  },
  methods: {
    passEvent() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
