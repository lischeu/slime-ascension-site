import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/main.sass";
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).use(router, AOS.init()).mount("#app");