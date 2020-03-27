import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";

import Notes from "@/views/notes";
import NotesList from "@/components/notes/notes-list";
import NoteDetails from "@/components/notes/notes-details";

import About from "@/views/about";
import AboutDetails from "@/components/about/about-details";

import Search from "@/views/search";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

//axios.interceptors.response.use(config => config);

Vue.use(VueRouter);

const routes = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      component: Notes,
      children: [
        {
          path: "/",
          name: "Home",
          component: NotesList
        },
        {
          path: "/details/:id",
          props: true,
          name: "NotesDetails",
          component: NoteDetails
        }
      ]
    },
    {
      path: "/about",
      component: About,
      children: [{ path: "/", component: AboutDetails, name: "About" }]
    },
    {
      path: "/search",
      component: Search,
      name: "Search"
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router: routes,
  render: h => h(App)
}).$mount("#app");
