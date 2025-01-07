import type { CalloutData } from "./validationSchema";
import type { ToolSaver } from "../utils/editor-block-builder";

export const calloutToolSaver: ToolSaver<CalloutData> = (
  blockContent: HTMLElement
) => {
  const callout = blockContent.querySelector(".callout-text");
  return {
    calloutText: callout?.innerHTML ?? undefined,
  };
};
