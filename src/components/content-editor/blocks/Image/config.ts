import type { ImageData } from "./validationSchema";
import type { BlockConfig } from "../block-builder/types";
import { imageToolSaver } from "./saver";
import { imageToolRenderer } from "./renderer";
import { imageDataSchema } from "./validationSchema";
import { imageToolSettingsRenderer } from "./settingsRenderer";
import { imageToolToolbox } from "./toolbox";

export const imageToolConfig: BlockConfig<ImageData> = {
  toolbox: imageToolToolbox,
  renderer: imageToolRenderer,
  settingsRenderer: imageToolSettingsRenderer,
  saver: imageToolSaver,
  validationSchema: imageDataSchema,
};
