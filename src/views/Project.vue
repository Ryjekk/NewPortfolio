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
      :info_element="projectContent.info_element"
      :project_img="projectContent.project_img"
      :text="projectContent.text"
      :text2="projectContent.text2"
      :btn_link="projectContent.btn_link"
      :btn_link2="projectContent.btn_link2"
      :hedding_left="projectContent.hedding_left"
      :content_left="projectContent.content_left"
      :hedding_midd="projectContent.hedding_midd"
      :content_midd="projectContent.content_midd"
      :hedding_right="projectContent.hedding_right"
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
            info_element: "Personal",
            // MID
            project_img: require("../assets/project/pic0.png"),
            text: "Check Code",
            text2: "Check Live",
            btn_link: "www.google.is",
            btn_link2: "www.onet.pl",
            // BOT
            hedding_left: "Project Purpose and Goal",
            content_left:
              "As the main purpose of this project was to improve my comprehension of SASS like also to build a page where I can show my projects. ",
            hedding_midd: "Stack explanation",
            content_midd:
              "For this project I used Vanila Javascript, HTML and CSS, just to fell more sure of way of using it, like also to imprve my skill in usinf Flexbox and CSS Grids.",
            hedding_right: "Problems and Future Improvements",
            content_right:
              "Main problems is taht this webside is ujisng plain simple HTML, therefore i decidet to build more complex website."
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
