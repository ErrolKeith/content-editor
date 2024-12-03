import type {
  ConfirmationNotificationConfig,
  Notification,
  NotificationActionConfig,
} from "./types";
import type { Content, ToastOptions } from "vue3-toastify";
import { h } from "vue";
import { toast as notify } from "vue3-toastify";

export const notifyError: Notification = (
  content: Content,
  options?: ToastOptions
) => {
  notify.error(content, options);
};

export const notifySuccess: Notification = (
  content: Content,
  options?: ToastOptions
) => {
  notify.success(content, options);
};

export const notifyGeneral: Notification = (
  content: Content,
  options?: ToastOptions
) => {
  notify.info(content, options);
};

export const notifyConfirmation: Notification = (
  config: ConfirmationNotificationConfig,
  options?: ToastOptions
) => {
  notify.info(makeConfirmContent(config), {
    toastId: config.id,
    autoClose: false,
    closeOnClick: false,
    ...options,
  });
};

export const removeNotification = (id: string | number) => {
  notify.remove(id);
};

function makeConfirmContent(config: ConfirmationNotificationConfig) {
  const confirmMessage = h("p", config.message);
  const confirmButton = makeNotificationAction(config.confirm);
  const cancelButton = makeNotificationAction(config.cancel);
  return h("div", [confirmMessage, confirmButton, cancelButton]);
}

function makeNotificationAction(config: NotificationActionConfig) {
  return h(
    "button",
    {
      onClick: config.clickHandler,
      class: config.classList,
    },
    config.text
  );
}
