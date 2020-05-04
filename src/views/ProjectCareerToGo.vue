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
      :content_left_one="projectContent.content_left_one"
      :content_left_two="projectContent.content_left_two"
      :content_midd="projectContent.content_midd"
      :content_midd_two="projectContent.content_midd_two"
      :content_right="projectContent.content_right"
      :content_right_one="projectContent.content_right_one"
    />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import ProjectWrapper from "../components/ProjectWrapper";

export default {
  name: "ProjectCareerToGo",
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
            hedding1: "Career to Go",
            content1:
              "Career to Go is a Vue Application built to make job hunting easier for students and post-graduates in Denmark. I built this project from scratch with team alongside a designer with Vue, Laravel, and SQL.",
            info_element_type: "Internship",
            info_element_code: "-----",
            info_element_live:
              '<a href="mailto:ryjewski@gmail.com?Subject=Hello%20CTGwiev"><strong>Email for Beta Access</strong></a>',
            info_element_stack: [
              "Vue JS",
              "Tailwind CSS",
              "Laravel 6",
              "PHP",
              "SQL"
            ],
            // MID
            project_img: require("../assets/project/pic1.png"),
            btn_link: "mailto:ryjewski@gmail.com?Subject=Hello%20CTGwiev",
            btn_link2: "mailto:ryjewski@gmail.com?Subject=Hello%20CTGwiev",
            // BOT
            content_left:
              "This project included several phases. Main purpose of this projest wast to make jobsearching in Denmark easier for Students and postgraduates.",
            content_left_one:
              "The user can search for a Job, Events like also for interesting Comapnies.",
            content_left_two:
              "Our website have also specail funcionality of Coffe invitation which Employer can saend to User and therefore invite him gor small chat in person about jobs oppurtunity",
            content_midd:
              "For this project I used Vue, but many different Javascript libraries could've been used. I chose to use Vue because of its ease of use and the ability to smoothly manipulate states without having to re-render the pages. Like also Vue is new fast growing Freamework.",
            content_midd_two:
              "We decidet to use a Tailwind CSS bescaue its the easier way to understand styling fot peole who are not familiar with frontend work. For back-end of website we used PHP with Laravel 6 and SQL to easli model data.",
            content_right:
              "Like most projects, I ran into a few bumps along the way, one particularly difficult area was organization and structure of the code. Because of this project's size, I realized how important maintaining an organized structure would be.",
            content_right_one:
              "I worked hard to keep components as reusable as possible and utilized props for many slight variations."
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
