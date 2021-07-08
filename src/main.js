import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faListUl,
  faCompass,
  faDice,
  faArrowLeft,
  faPlus,
  faCoffee,
  faSun,
  faMoon,
  faTimes,
  faPaperclip,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faListUl,
  faCompass,
  faDice,
  faArrowLeft,
  faPlus,
  faCoffee,
  faSun,
  faMoon,
  faPaperclip,
  faTimes,
  faSearch,
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount('#app')
