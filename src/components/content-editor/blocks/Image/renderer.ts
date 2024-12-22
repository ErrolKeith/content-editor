import "./index.css";

import type { ContentRenderer } from "../block-builder/types";
import type { API } from "@editorjs/editorjs";
import type { ImageData } from "./validationSchema";
import { make } from "@editorjs/dom";
import { urlSchema } from "^/utils/validation";

export const imageToolRenderer: ContentRenderer<ImageData> = (
  wrapper: HTMLElement,
  data: ImageData,
  api: API
) => {
  const imgClassList = [];

  if (data.withBorder) imgClassList.push("with-border");
  if (data.withCorners) imgClassList.push("with-corners");

  const img = make("img", imgClassList, {
    src: data.url ?? "",
  }) as HTMLImageElement;

  const inputWrapper = make("div");

  const urlInput = make("input", [api.styles.input], {
    placeholder: "Enter image URL",
  }) as HTMLInputElement;

  urlInput.addEventListener("keyup", () => {
    const content = urlInput.value as unknown;
    const validInputContent = urlSchema.safeParse(content);
    if (!validInputContent.success) return;

    img.src = validInputContent.data;
  });

  urlInput.addEventListener("paste", (event) => {
    const pasteContent =
      event.clipboardData?.getData("text") ?? ("" as unknown);
    const validPasteContent = urlSchema.safeParse(pasteContent);
    if (!validPasteContent.success) return;
    img.src = validPasteContent.data;
  });

  urlInput.value = img.src;
  inputWrapper.appendChild(urlInput);

  img.style.cssText = "width:100%;height:auto;";

  wrapper.appendChild(inputWrapper);
  wrapper.appendChild(img);
  return wrapper;
};
