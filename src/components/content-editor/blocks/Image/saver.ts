import type { ImageData } from "./validationSchema";
import type { ToolSaver } from "../block-builder/types";

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
    withBorder: img.classList.contains("with-border"),
    withCorners: img.classList.contains("with-corners"),
    withShadow: img.classList.contains("with-shadow"),
  };
};
