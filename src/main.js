
import { createApp } from "vue";
import App from "./App.vue"
import router from "./router/router";

import VIntersection from "@/directives/VIntersection";
import VFocus from "@/directives/VFocus";
import store from "@/store";

const app = createApp(App)

app.use(router).use(store).mount('#app');
app.directive('intersection',VIntersection)
app.directive('focus',VFocus)