import type { SubscribeData } from "./validationSchema";
import type { ToolSaver } from "../utils/editor-block-builder";

export const subscribeToolSaver: ToolSaver<SubscribeData> = (
  blockContent: HTMLElement
) => {
  const button = blockContent.querySelector(
    "button"
  ) as HTMLAnchorElement | null;

  return {
    calloutText: "",
    buttonText: button?.href ?? "",
  };
};
