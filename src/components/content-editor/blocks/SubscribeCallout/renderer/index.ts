import "../index.css";

import type { ContentRenderer } from "../../utils/editor-block-builder";
import type { API } from "@editorjs/editorjs";
import type { SubscribeData } from "../validationSchema";
import { make } from "@editorjs/dom";
import { renderSubscribeForm } from "./section/form";
import { buildSection } from "../../utils/editor-block-builder";

const subscribeSectionClassname = "subscribe-callout";

export const subscribeToolRenderer: ContentRenderer<SubscribeData> = (
  wrapper: HTMLElement,
  data: SubscribeData,
  api: API
) => {
  wrapper.appendChild(renderSubscribeToolSection(data, api));
  return wrapper;
};

function renderSubscribeToolSection(data: SubscribeData, api: API) {
  const callout = make("p", "subscribe-callout-text", {});
  callout.innerHTML = data.calloutText ?? "Subscribe to the newsletter!";

  const subscribeForm = renderSubscribeForm(data, api);

  const section = buildSection(subscribeSectionClassname, [
    callout,
    subscribeForm,
  ]);

  return section;
}
