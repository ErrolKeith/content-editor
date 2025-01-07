import type { CalloutData } from "./validationSchema";
import type { ToolSaver } from "../utils/editor-block-builder";

export const calloutToolSaver: ToolSaver<CalloutData> = (
  blockContent: HTMLElement
) => {
  return {
    calloutText: "",
  };
};
