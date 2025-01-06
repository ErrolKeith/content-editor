import type { SubscribeData } from "./validationSchema";
import { buildBlock } from "../utils/editor-block-builder";
import { subscribeToolConfig } from "./config";

export default buildBlock<SubscribeData, {}>(subscribeToolConfig);
