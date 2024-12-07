import {
  notifyConfirmation,
  notifyError,
  notifyInfo,
  notifySuccess,
  removeNotification,
} from "./notifications";

export default function useNotificationSystem() {
  return {
    notifyError,
    notifySuccess,
    notifyInfo,
    notifyConfirmation,
    removeNotification,
  };
}
