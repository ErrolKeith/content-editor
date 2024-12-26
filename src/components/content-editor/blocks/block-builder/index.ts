import type { BlockConfig } from "./types";
import type {
  API,
  BlockAPI,
  BlockTool,
  BlockToolConstructorOptions,
  BlockToolData,
} from "@editorjs/editorjs";
import { make } from "@editorjs/dom";
import { dataValidator } from "^/utils/validation";

export function buildBlock<T extends object = any, C extends object = any>(
  config: BlockConfig<T>
) {
  const { renderer, saver, toolbox, settingsRenderer, validationSchema } =
    config;

  return class CustomBlockTool implements BlockTool {
    private data: BlockToolData<T>;
    private api: API;
    private block: BlockAPI;
    private wrapper: HTMLElement;

    constructor({ data, api, block }: BlockToolConstructorOptions<T, C>) {
      this.data = data;
      this.api = api;
      this.block = block;
      this.wrapper = make("div", this.api.styles.block, {});
    }

    public static get toolbox() {
      return toolbox;
    }

    public render() {
      return renderer(this.wrapper, this.data, this.api);
    }

    public save(blockContent: HTMLElement) {
      return saver(blockContent);
    }

    public validate(data: unknown) {
      return dataValidator(data, validationSchema);
    }

    public renderSettings() {
      return settingsRenderer(this.block);
    }
  };
}
