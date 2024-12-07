export interface ConfirmationNotificationConfig {
  id: string | number;
  message: string;
  confirm: NotificationButtonConfig;
  cancel: NotificationButtonConfig;
}

export interface NotificationButtonConfig {
  text: string;
  clickHandler: (event: MouseEvent) => void;
  classList: string;
}
