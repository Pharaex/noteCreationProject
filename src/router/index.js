import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "NoteList",
    component: () => import("@/views/NoteList.vue"),
  },

  {
    path: "/Note/:id",
    name: "Note",
    component: () => import("@/views/NoteView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
