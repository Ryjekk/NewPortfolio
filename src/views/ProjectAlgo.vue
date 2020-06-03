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
  name: "ProjectAlgo",
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
            hedding1: "Sort Algorithms",
            content1:
              "Project Sort Algorithms is nice way to visualize basics sort algorithms",
            info_element_type: "Personal",
            info_element_code:
              '<a href="https://github.com/Ryjekk/Sort_algorytms"><strong>Repository</strong></a>',
            info_element_live:
              '<a href="https://inuk.netlify.app/"><strong>View website TO DO !!!</strong></a>',
            info_element_stack: ["HTML", "CSS", "React JS", "Netlify"],
            // MID
            project_img: require("../assets/project/pic0.png"),
            btn_link: "https://github.com/Ryjekk/Sort_algorytms",
            btn_link2: "#",
            // BOT
            content_left:
              "Sort Algorithms was a project pulled just after starting my journey with React JS. Goal of this project was to try build real life aplication using React JS freamework as a main tool",
            content_midd:
              "React JS is perfeect choose for this type of SPA aplication. I used it just to try my skills of it after some short time of learning it. Of cousre this aplication could be written in more then React. As a natural choose I could use P5.js libary to make draving on canvas easier",
            content_right:
              "For the future improvments we could count to applying React Hooks, implementing better visualisation or even expanding amount of sort algorithms"
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
