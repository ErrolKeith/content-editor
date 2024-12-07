import type {
  ConfirmationNotificationConfig,
  NotificationButtonConfig,
} from "./types";
import type { Content, ToastOptions } from "vue3-toastify";
import { h } from "vue";
import { toast as notify } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

/**
 * Due to the concept of confirmation notifications being added to the notification system, we should NOT allow
 * [blind removal of all notifications](https://vue3-toastify.js-bridge.com/usage/remove-toast-programmatically.html).
 *
 * It seems logical to assume that every confirmation would require some sort of response
 * and we don't want to allow the forementioned behavior.
 *
 * NOTE: Use this function instead of `toast.remove()` directly.
 *
 * @param notificationId The id of the notification to remove.
 */
export const removeNotification = (notificationId: string | number) => {
  notify.remove(notificationId);
};

/**
 * Confirmation notifications leave their implementation up to the implementer
 * by design. This utility function can be used to create consistent/tested
 * content for confirmation notifications based on the configuration.
 *
 * NOTE: The supplied id can be used to programmatically
 * remove a notification. {@link removeNotification}.
 *
 * @param config
 * @returns
 */
export function makeConfirmContent(config: ConfirmationNotificationConfig) {
  const confirmButton = makeNotificationButton(config.confirm);
  const cancelButton = makeNotificationButton(config.cancel);
  return h("div", [
    h("p", config.message),
    h("div", { class: "confirm-button-container" }, [
      confirmButton,
      cancelButton,
    ]),
  ]);
}

/**
 * `makeNotificationButton` can be used to create consistent/tested
 * content based on the configuration.
 *
 * @param config
 * @returns
 */
export function makeNotificationButton(config: NotificationButtonConfig) {
  return h(
    "button",
    {
      onClick: config.clickHandler,
      class: config.classList,
    },
    config.text
  );
}

/**
 * Displays an error notification.
 *
 * @param content
 * @param options [ToastOptions](https://vue3-toastify.js-bridge.com/api/toast.html)
 */
export const notifyError = (
  content: Content,
  options?: NotificationOptions
) => {
  notify.error(content, options);
};

/**
 * Displays a success notification
 *
 * @param content
 * @param options [ToastOptions](https://vue3-toastify.js-bridge.com/api/toast.html)
 */
export const notifySuccess = (content: Content, options?: ToastOptions) => {
  notify.success(content, options);
};

/**
 * Displays a general info notification
 *
 * @param content
 * @param options [ToastOptions](https://vue3-toastify.js-bridge.com/api/toast.html)
 */
export const notifyInfo = (content: Content, options?: ToastOptions) => {
  notify.info(content, options);
};

/**
 * Displays a confirmation notification.
 *
 * Preset `ToastOptions` Options:
 * - `autoClose: false`
 * - `closeOnClick: false`
 * - `closeButton: false`
 *
 * NOTE: These options are disabled by default to allow better reliablility
 * in receiving user input from confirmation messages.
 * There may be unintended consequences by altering these options, such as
 * expecting a confirmation response and the close button not being tied to a
 * confirmation response handler.
 *
 * @param config
 * @param options [ToastOptions](https://vue3-toastify.js-bridge.com/api/toast.html)
 */
export const notifyConfirmation = (
  config: ConfirmationNotificationConfig,
  options?: ToastOptions
) => {
  const confirmOptions = {
    toastId: config.id,
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    ...options,
  };
  notify.warning(makeConfirmContent(config), confirmOptions);
};
