import type { Content, ToastOptions } from "vue3-toastify";

export type Notification = (content: Content, options?: ToastOptions) => void;

export interface ConfirmationNotificationConfig {
  id: string | number;
  message: string;
  confirm: NotificationActionConfig;
  cancel: NotificationActionConfig;
}

export interface NotificationActionConfig {
  text: string;
  clickHandler: (event: MouseEvent) => void;
  classList: string;
}
