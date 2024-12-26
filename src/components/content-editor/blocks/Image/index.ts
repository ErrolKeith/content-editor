import type { ImageData } from "./validationSchema";
import { buildBlock } from "../block-builder";
import { imageToolConfig } from "./config";

export default buildBlock<ImageData, {}>(imageToolConfig);
