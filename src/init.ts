import { createApp } from "vue";
import App from "./App.vue";

export function initializeUi(uiOptions: { mountId: string }) {
  const application = createApp(App);
  application.mount(uiOptions.mountId);
}
