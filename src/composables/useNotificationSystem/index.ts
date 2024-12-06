import {
  notifyConfirmation,
  notifyError,
  notifyGeneral,
  notifySuccess,
  removeNotification,
} from "./notifications";

export default function useNotificationSystem() {
  return {
    notifyError,
    notifySuccess,
    notifyGeneral,
    notifyConfirmation,
    removeNotification,
  };
}
