
import { createApp } from "vue";
import App from "./App.vue"
import router from "./router/router";

import VIntersection from "@/directives/VIntersection";
import VFocus from "@/directives/VFocus";

const app = createApp(App)

app.use(router).mount('#app');
app.directive('intersection',VIntersection)
app.directive('focus',VFocus)