import { make } from "@editorjs/dom";
import { buildSection } from "../../utils/editor-block-builder";
import { CalloutData } from "../validationSchema";
import { API } from "@editorjs/editorjs";

const calloutSectionClassname = "callout";

export function renderCalloutToolSection(data: CalloutData, api: API) {
  const callout = make("p", "callout-text", {});

  callout.innerHTML = data.calloutText ?? "Sample callout with emphasis info!";

  const section = buildSection(calloutSectionClassname, [callout]);

  return section;
}
