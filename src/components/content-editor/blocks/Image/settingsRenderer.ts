import type { BlockAPI, PopoverItemParams } from "@editorjs/editorjs";
import type { SettingsRenderer } from "../block-builder/types";
import type { MenuConfigItem } from "@editorjs/editorjs/types/tools";
import { IconAddBorder } from "@codexteam/icons";
import { IconImageShadow, IconRoundCorners } from "./icons";

export const imageToolSettingsRenderer: SettingsRenderer = (
  block: BlockAPI
) => {
  const withBorderMenuItemConfig: MenuConfigItem = {
    title: "Add Border",
    hint: { title: "Adds a border. Removes any shadow." },
    icon: IconAddBorder,
    toggle: "border-shadow",
    onActivate: (_item: PopoverItemParams, _event?: PointerEvent) => {
      const img = block.holder.querySelector("img");
      if (!img) return;
      if (img.classList.contains("with-border")) return;
      if (img.classList.contains("with-shadow"))
        img.classList.remove("with-shadow");
      img.classList.toggle("with-border");
    },
    isActive: () => {
      const img = block.holder.querySelector("img");
      if (!img) return false;
      return img.classList.contains("with-border");
    },
  };

  const withShadowMenuItemConfig: MenuConfigItem = {
    title: "Add Shadow",
    hint: {
      title: "Adds a shadow to the image. Removes any border.",
    },
    icon: IconImageShadow,
    toggle: "border-shadow",
    onActivate: (_item: PopoverItemParams, _event?: PointerEvent) => {
      const img = block.holder.querySelector("img");
      if (!img) return;
      if (img.classList.contains("with-shadow")) return;

      if (img.classList.contains("with-border"))
        img.classList.remove("with-border");

      img.classList.add("with-shadow");
    },
    isActive: () => {
      const img = block.holder.querySelector("img");
      if (!img) return false;
      return img.classList.contains("with-shadow");
    },
  };

  const withCornersMenuItemConfig: MenuConfigItem = {
    title: "Toggle Round Corners",
    hint: { title: "Toggles rounded and squared corners" },
    icon: IconRoundCorners,
    toggle: true,
    onActivate: (_item: PopoverItemParams, _event?: PointerEvent) => {
      const img = block.holder.querySelector("img");
      if (!img) return false;
      img.classList.toggle("with-corners");
    },
    isActive: () => {
      const img = block.holder.querySelector("img");
      if (!img) return false;
      return img.classList.contains("with-corners");
    },
  };

  return [
    withShadowMenuItemConfig,
    withBorderMenuItemConfig,
    withCornersMenuItemConfig,
  ];
};
