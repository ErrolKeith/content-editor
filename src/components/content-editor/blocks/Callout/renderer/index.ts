import "../index.css";

import type { ContentRenderer } from "../../utils/editor-block-builder";
import type { API } from "@editorjs/editorjs";
import type { CalloutData } from "../validationSchema";

import { make } from "@editorjs/dom";
import { buildSection } from "../../utils/editor-block-builder";

const calloutSectionClassname = "callout";

export const calloutToolRenderer: ContentRenderer<CalloutData> = (
  wrapper: HTMLElement,
  data: CalloutData,
  api: API
) => {
  wrapper.appendChild(renderCalloutToolSection(data, api));
  return wrapper;
};

function renderCalloutToolSection(data: CalloutData, api: API) {
  const callout = make("p", "callout-text", {});
  callout.innerHTML = data.calloutText ?? "Sample callout with emphasis info!";

  const section = buildSection(calloutSectionClassname, [callout]);

  return section;
}
