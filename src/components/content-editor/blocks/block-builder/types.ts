import type { API, BlockAPI, ToolboxConfigEntry } from "@editorjs/editorjs";
import type { MenuConfigItem } from "@editorjs/editorjs/types/tools";
import { z } from "zod";

export type ContentRenderer<T> = (
  wrapper: HTMLElement,
  data: T,
  api: API
) => HTMLElement;
export type SettingsRenderer = (block: BlockAPI) => MenuConfigItem[];
export type ToolSaver<T> = (blockContent: HTMLElement) => T;
export interface BlockConfig<T> {
  toolbox: ToolboxConfigEntry[];
  renderer: ContentRenderer<T>;
  settingsRenderer: SettingsRenderer;
  saver: ToolSaver<T>;
  validationSchema: z.ZodSchema<object>;
}
