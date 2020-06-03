import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import ProjectCareerToGo from "../views/ProjectCareerToGo.vue";
import ProjectWeather from "../views/ProjectWeather.vue";
import ProjectTattoo from "../views/ProjectTattoo.vue";
import ProjectStokkur from "../views/ProjectStokkur.vue";
import ProjectAlgo from "../views/ProjectAlgo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/project",
    name: "Project",
    component: Project
  },
  {
    path: "/projectCareerToGo",
    name: "ProjectCareerToGo",
    component: ProjectCareerToGo
  },
  {
    path: "/projectWeather",
    name: "ProjectWeather",
    component: ProjectWeather
  },
  {
    path: "/projectTattoo",
    name: "ProjectTattoo",
    component: ProjectTattoo
  },
  {
    path: "/projectStokkur",
    name: "ProjectStokkur",
    component: ProjectStokkur
  },
  {
    path: "/projectAlgo",
    name: "ProjectAlgo",
    component: ProjectAlgo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
