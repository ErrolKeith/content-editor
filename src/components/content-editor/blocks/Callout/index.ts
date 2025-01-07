import type { CalloutData } from "./validationSchema";
import { buildBlock } from "../utils/editor-block-builder";
import { calloutToolConfig } from "./config";

export default buildBlock<CalloutData, {}>(calloutToolConfig);
