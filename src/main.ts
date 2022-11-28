import Vue, { h } from "vue";
import App from "./app.vue";

import { VueQueryPlugin } from '@tanstack/vue-query'

const app = new Vue({
  render(h) {
    return h(App);
  },
});

Vue.use(VueQueryPlugin)

app.$mount("#app");
