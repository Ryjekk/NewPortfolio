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
  name: "ProjectTattoo",
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
            hedding1: "Sparrow INK.",
            content1:
              "Sparrow Ink is a simple form build for local tattoo artist based in Reykjavik. This form makes bokking appointment easier for coustomers.",
            info_element_type: "Personal",
            info_element_code:
              '<a href="https://github.com/Ryjekk/Form-Tattoo"><strong>Repository</strong></a>',
            info_element_live:
              '<a href="https://kreskianny.netlify.app/"><strong>View website</strong></a>',
            info_element_stack: ["HTML", "CSS", "Netlify", "Firebase"],
            // MID
            project_img: require("../assets/project/pic3.png"),
            btn_link: "https://github.com/Ryjekk/Form-Tattoo",
            btn_link2: "https://kreskianny.netlify.app/",
            // BOT
            content_left:
              "As a main goal of this project was to create simple clear apply form for Local Tattoo artist to make a booking easier.",
            content_midd:
              "Since this project was one of my first project I decided to use simple CSS and HTML to create simple form. I decided to use Firebase / Netlify form notification to post all request straight to email of Artist",
            content_right:
              "I could be nice to have dynamicly fetch IG pictures like also since Design is really simpbe it could be more modern"
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
