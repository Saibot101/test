import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import CV from "../views/CV.vue";
import Contact from "../views/Contacts.vue";
import CloudPortfolio from "../views/portfolio/CloudPortfolio.vue";
import TelegramPortfolio from "../views/portfolio/TelegramPortfolio.vue";
import PdfReader from "../views/PDFReader.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/cv",
    name: "CV",
    component: CV,
  },
  {
    path: "/contact",
    name: "Contacts",
    component: Contact,
  },
  {
    path: "/pdfReader",
    name: "PDFReader",
    component: PdfReader,
  },
  {
    path: "/portfolio/cloud",
    component: CloudPortfolio,
  },
  {
    path: "/portfolio/telegram",
    component: TelegramPortfolio,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
