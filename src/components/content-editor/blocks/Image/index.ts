import type { ImageData } from "./validationSchema";
import { buildBlock } from "../utils/editor-block-builder";
import { imageToolConfig } from "./config";

export default buildBlock<ImageData, {}>(imageToolConfig);
