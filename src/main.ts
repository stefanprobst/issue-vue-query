import { createApp } from "vue";
import App from "./app.vue";

import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App);

app.use(VueQueryPlugin)

app.mount("#app");
