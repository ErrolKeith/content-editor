import { createApp } from "vue";
import App from "./App.vue";

/**
 * `initializeUi` should is the applications main entry point.
 * @param uiOptions
 */
export function initializeUi(uiOptions: { mountId: string }) {
  const application = createApp(App);
  application.mount(uiOptions.mountId);
}
