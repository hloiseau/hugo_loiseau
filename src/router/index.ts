import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../components/Home.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects/:id",
    name: "Projects",
    component: Projects,
    props: true,
  },
  {
    path: "/skills/:id",
    name: "Skills",
    component: Skills,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
