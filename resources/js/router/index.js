import { createRouter, createWebHistory } from "vue-router"
// admin
import homeAdminIndex from '../components/admin/home/index.vue'
// pages
import homePagesIndex from '../components/pages/home/index.vue'
// not found
import notFound from '../components/notFound.vue'
const routes = [
  // admin
  { path: '/admin/home', component: homeAdminIndex },
  // pages
  { path: '/', component: homePagesIndex },
  // not found
  { path: '/:pathMatch(.*)*', component: notFound },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router