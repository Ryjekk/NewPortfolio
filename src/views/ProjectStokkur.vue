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
  name: "ProjectStokkur",
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
            hedding1: "Reykjavik Concerts",
            content1:
              "Reykjavik Concerts is an Assigment for company named STOKKUR based in Reykjavik",
            info_element_type: "Assigment",
            info_element_code: "-----",
            info_element_live:
              '<a href="mailto:ryjewski@gmail.com?Subject=Hello%20STOKKwiev"><strong>Email for Beta Access</strong></a>',
            info_element_stack: ["HTML", "CSS", "Netlify", "JavaScript"],
            // MID
            project_img: require("../assets/project/pic5.png"),
            btn_link: "mailto:ryjewski@gmail.com?Subject=Hello%20STOKKwiev",
            btn_link2: "mailto:ryjewski@gmail.com?Subject=Hello%20STOKKwiev",
            // BOT
            content_left:
              "As a purpose was to face oppurtunity to build project from scratch in limited time. Main Goal was to make simple app which can display data fetched from API about concerts in Reykjavik",
            content_midd:
              "In this project I was told to use any stack, so I decidet to use plain Vanila JavaScript, CSS and HTML. Of course this app could be build in any JS freamework , but at this period of time i was focused to improve JS skills.",
            content_right:
              "As a first real world project I faced many problems, especailly witch caching data, but during this project i gain more knowledge about how to solve this tasks. App can require more improvments from new design to moving to some JavaScrip frameworks to make app more efficient"
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
