import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import TaskList from "@/views/TaskList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/task",
    name: "task",
    component: TaskList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
