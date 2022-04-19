import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MovieDetail from "../views/MovieDetail.vue";

const routes = [
  { path: "/", component: HomePage, meta: { title: "Главная" } },
  { path: "/movie/all", component: HomePage, meta: { title: "Все фильмы" } },
  { path: "/movie/:id", component: MovieDetail },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const DEFAULT_TITLE = "Poison Ivy";
router.afterEach((to, from) => {
  document.title = to.meta.title
    ? DEFAULT_TITLE + " | " + to.meta.title
    : DEFAULT_TITLE;
});

export default router;
