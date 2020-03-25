<template>
  <div class="home home__lines">
    <Navigation @showDropdown="passEvent" />
    <TopBar :showMenu="showMenu" />
    <!-- MAIN -->
    <WrapperContent
      v-for="homeContent in content.home"
      :key="homeContent.id"
      :hedding1="homeContent.hedding1"
      :hedding2="homeContent.hedding2"
      :content1="homeContent.content1"
      :content2="homeContent.content2"
      :content3="homeContent.content3"
      :text="homeContent.text"
      :btn_link="homeContent.btn_link"
      :btn_show="homeContent.btn_show"
      :pic_show="homeContent.pic_show"
      :elipse__background="homeContent.elipse__background"
    />
    <!-- ABOUT -->
    <WrapperContent
      v-for="aboutContent in content.about"
      :key="aboutContent.id"
      :hedding1="aboutContent.hedding1"
      :content1="aboutContent.content1"
      :content2="aboutContent.content2"
      :pic_show="aboutContent.pic_show"
      :elipse__background="aboutContent.elipse__background"
    />
    <!-- SKILLS -->
    <WrapperContent
      v-for="skillContent in content.skill"
      :key="skillContent.id"
      :hedding1="skillContent.hedding1"
      :content1="skillContent.content1"
      :skill_show="skillContent.skill_show"
    />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import WrapperContent from "../components/WrapperContent";

export default {
  name: "Home",
  components: {
    Navigation,
    TopBar,
    WrapperContent
  },
  data() {
    return {
      showMenu: false,
      content: {
        home: [
          {
            hedding1: "Hello I'm <strong>Inuk</strong>",
            hedding2: "Front End Developer",
            content1:
              "I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application.",
            content2:
              "I've always have had a big interest in new technologies therefore I have started programming on my own.",
            content3:
              "I'm looking forward to the future with excitement, seeing the potential and possibilities we have these days thanks to the progress of science.",
            text: "Contact",
            btn_link: "mailto:ryjewski@gmail.com?Subject=Hello%20Marcin",
            btn_show: true,
            pic_show: true,
            elipse__background: {
              background:
                "linear-gradient(180deg, rgb(165, 165, 165) 0%, rgba(196, 196, 196, 0) 80%)"
            }
          }
        ],
        about: [
          {
            hedding1: "Little bit about me",
            content1:
              "I've always have had a big interest in new technologies therefore I have started programming on my own to create beautiful websites and applications, which can be both functional and pleasing for users. ",
            content2:
              "I prefer to code from scratch, which allows me to find new paths and solutions for displaying projects in my way. During the last months, I finished multiple online and domestic courses which allowed me to build functional applications.",
            pic_show: true,
            elipse__background: {
              background:
                "linear-gradient(180deg, rgb(186, 144, 144) 0%, rgba(196, 196, 196, 0) 80%)"
            }
          }
        ],
        skill: [
          {
            hedding1: "My skills",
            content1: `During my adventure with programiming I was able to finish chapters of "Responsive Web Design" and "Javascript Algorithms And Data Structures" on <strong>FreeCodeCamp</strong>, like also "Practical JavaScript" on <strong>Watch and Code</strong> and <strong>CodeCademy</strong>, beside I've taken a number of online courses such as <strong>The Complete Javascript Course, Advanced CSS & Sass, Javascript 30, Vue, Vuetify & Nuxt</strong>. Currently I'm taking PHP for Beginners and Laravel 6.`,
            skill_show: true
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
