import type { ImageData } from "./validationSchema";
import type { ToolSaver } from "../block-builder/types";
import { camelCaseToKebabCase } from "^/utils/string-utils";

export const imageToolSaver: ToolSaver<ImageData> = (
  blockContent: HTMLElement
) => {
  const img = blockContent.querySelector("img");

  if (!img) {
    return {
      url: "",
    };
  }

  return {
    url: img.src,
    withBorder: img.classList.contains(camelCaseToKebabCase("withBorder")),
    withCorners: img.classList.contains(camelCaseToKebabCase("withCorners")),
  };
};
