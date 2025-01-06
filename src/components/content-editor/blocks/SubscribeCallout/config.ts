import type { SubscribeData } from "./validationSchema";
import type { BlockConfig } from "../utils/editor-block-builder";
import { subscribeToolRenderer } from "./renderer";
import { subscribeDataSchema } from "./validationSchema";
import { subscribeToolToolbox } from "./toolbox";
import { subscribeToolSettingsRenderer } from "./settingsRenderer";
import { subscribeToolSaver } from "./saver";

export const subscribeToolConfig: BlockConfig<SubscribeData> = {
  toolbox: subscribeToolToolbox,
  renderer: subscribeToolRenderer,
  settingsRenderer: subscribeToolSettingsRenderer,
  saver: subscribeToolSaver,
  validationSchema: subscribeDataSchema,
};
