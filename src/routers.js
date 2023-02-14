import { createWebHashHistory, createRouter } from "vue-router";
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Service from './pages/Service.vue'
import Blog from './pages/Blog.vue'
import BlogDetails from './pages/BlogDetails.vue'
import ContactUs from './pages/ContactUs.vue';

const suffix = ' - PSIJ'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: 'Bienvenue sur PSIJ' + suffix,
    },
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Service',
    path: '/service',
    component: Service
  },
  {
    name: 'Blog',
    path: '/blog',
    component: Blog
  },
  {
    name: 'BlogDetails',
    path: '/blogdetails/:id',
    component: BlogDetails
  },

  {
    name: 'ContactUs',
    path: '/contactus',
    component: ContactUs
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;