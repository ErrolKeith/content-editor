import type { NotificationComposable } from "./types";
import {
  notifyConfirmation,
  notifyError,
  notifyGeneral,
  notifySuccess,
  removeNotification,
} from "./notifications";

import "vue3-toastify/dist/index.css";

export default function useNotificationSystem(): NotificationComposable {
  return {
    notifyError,
    notifySuccess,
    notifyGeneral,
    notifyConfirmation,
    removeNotification,
  };
}
