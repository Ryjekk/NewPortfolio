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
  name: "ProjectWeather",
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
            hedding1: "Weather App",
            content1:
              "Weather App is a project I put together after learning the basics of Vue. This application was the perfect way to improve my understanding of making queries and managing larger sets of data. In this project, I utilized OpenWeatherMap API to gather the weather data",
            info_element_type: "Personal",
            info_element_code:
              '<a href="https://github.com/Ryjekk/WeatherApp"><strong>Repository</strong></a>',
            info_element_live:
              '<a href="https://weathero.netlify.app/"><strong>View website</strong></a>',
            info_element_stack: ["Vue JS", "JavaScript", "Tailwind CSS"],
            // MID
            project_img: require("../assets/project/pic2.png"),
            btn_link: "https://github.com/Ryjekk/WeatherApp",
            btn_link2: "https://weathero.netlify.app/",
            // BOT
            content_left:
              "As the main purpose of this project was to improve my comprehension of Vue.js and APIs in general, I spend a good amount of time making sure I was using the best practices of state management and data manipulation. Besides this, I also wanted to make this a weather application that I would enjoy using, meaning it had to be visually pleasing and allow the user to see their weather status at a quick glance.",
            content_midd:
              "For this project I used VueJS, but many different Javascript libraries could've been used, and even vanilla Javascript could have been easily implemented. I chose to use VueJS because of its ease of use and the ability to smoothly manipulate states without having to re-render the pages. To publish the application, I hosted it through Netlify, because its easy, free and how I've hosted many of my projects.",
            content_right:
              "I still have a few features I would love to implement with this project. I'd really like to update the background images so that they display based on what the weather status currently is, so that the application has the feel of the weather they're currently experiencing. I also have plans to preserve search for displaying last searched place"
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
