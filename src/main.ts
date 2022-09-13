import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";
import router from "./router/index";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(ViewUIPlus).use(router).use(pinia).mount("#app");
