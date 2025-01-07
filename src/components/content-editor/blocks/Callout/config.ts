import type { CalloutData } from "./validationSchema";
import type { BlockConfig } from "../utils/editor-block-builder";
import { calloutToolRenderer } from "./renderer";
import { calloutDataSchema } from "./validationSchema";
import { calloutToolToolbox } from "./toolbox";
import { calloutToolSettingsRenderer } from "./settingsRenderer";
import { calloutToolSaver } from "./saver";

export const calloutToolConfig: BlockConfig<CalloutData> = {
  toolbox: calloutToolToolbox,
  renderer: calloutToolRenderer,
  settingsRenderer: calloutToolSettingsRenderer,
  saver: calloutToolSaver,
  validationSchema: calloutDataSchema,
};
