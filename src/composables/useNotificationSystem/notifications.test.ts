import { it, expect } from "vitest";
import { makeConfirmContent, makeNotificationButton } from "./notifications";
import {
  ConfirmationNotificationConfig,
  NotificationButtonConfig,
} from "./types";

const voidClickHandler = () => {};

it("can make a button notification button", () => {
  const testNotificationButtonConfig: NotificationButtonConfig = {
    text: "Test Button",
    classList: "test-button",
    clickHandler: voidClickHandler,
  };

  const testButton = makeNotificationButton(testNotificationButtonConfig);
  expect(testButton).toMatchSnapshot();
});

it("makes confirm content", () => {
  const testConfirmButtonConfig: NotificationButtonConfig = {
    text: "Confirm",
    classList: "confirm-test-button",
    clickHandler: voidClickHandler,
  };

  const testCancelButtonConfig: NotificationButtonConfig = {
    text: "Confirm",
    classList: "cancel-test-button",
    clickHandler: voidClickHandler,
  };

  const contentConfig: ConfirmationNotificationConfig = {
    id: "test-content",
    message: "test message",
    confirm: testConfirmButtonConfig,
    cancel: testCancelButtonConfig,
  };

  const confirmContent = makeConfirmContent(contentConfig);
  expect(confirmContent).toMatchSnapshot();
});
