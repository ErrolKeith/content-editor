import "../index.css";

import type { ContentRenderer } from "../../utils/editor-block-builder";
import type { API } from "@editorjs/editorjs";
import type { CalloutData } from "../validationSchema";
import { renderCalloutToolSection } from "./section";

export const calloutToolRenderer: ContentRenderer<CalloutData> = (
  wrapper: HTMLElement,
  data: CalloutData,
  api: API
) => {
  wrapper.appendChild(renderCalloutToolSection(data, api));
  return wrapper;
};
