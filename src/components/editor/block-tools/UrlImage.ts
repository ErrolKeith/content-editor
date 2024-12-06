import {
  BlockToolConstructorOptions,
  OutputBlockData,
} from "@editorjs/editorjs";
import { cdxIconImage } from "@wikimedia/codex-icons";
import { vh } from "./utils/vanilla-h";

const imageIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><!----><g><path d="M16 17H2l3.5-4.5 2.5 3 3.5-4.5.5.67V8H8V6H2a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-6h-5.75z"></path><path d="M16 4V0h-2v4h-4v2h4v4h2V6h4V4z"></path></g></svg>';

const linkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15.728 3.884c1.434-1.44 3.532-1.47 4.694-.304c1.164 1.168 1.132 3.28-.303 4.72l-2.424 2.433a.75.75 0 0 0 1.063 1.059l2.424-2.433c1.91-1.919 2.15-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.818 7.692c-1.912 1.919-2.152 4.982-.303 6.837a.75.75 0 1 0 1.062-1.058c-1.163-1.168-1.132-3.28.303-4.72z"/><path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304c-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.837" opacity="0.5"/></svg>`;

export class UrlImage {
  private data: OutputBlockData["data"];
  private settings: { name: string; icon: string }[];
  private settingsWrapper: HTMLElement;

  constructor(options: BlockToolConstructorOptions) {
    this.data = options.data;
    this.settings = [
      {
        name: "image-url",
        icon: linkIcon,
      },
    ];
    this.settingsWrapper = document.createElement("div");
  }

  static get toolbox() {
    return {
      title: "Image",
      icon: imageIcon,
    };
  }

  private settingsAreOpen() {
    return this.settingsWrapper.querySelector(".__settings-container");
  }

  render() {
    const img = this.data.url
      ? vh("img", {
          src: this.data.url,
          width: "300",
          height: "300",
        })
      : undefined;

    const wrapper = vh("div", { class: "__simple-image-url-tool" }, [
      vh("input", {
        placeholder: "Paste an image URL...",
        value: this.data.url ? this.data.url : "",
        class: "__simple-image-url-tool-input",
      }),
    ]);

    if (img) wrapper.appendChild(img);

    return wrapper;
  }

  save(blockContent: HTMLElement) {
    const input = blockContent.querySelector(
      ".__simple-image-url-tool-input"
    ) as HTMLInputElement;

    if (!input) {
      return {
        url: "",
      };
    }
    return {
      url: input.value,
    };
  }

  renderSettings() {
    this.settings.forEach((tune) => {
      const icon = vh("div", {
        class: "ce-popover-item__icon ce-popover-item__icon--tool",
      });

      icon.innerHTML = tune.icon;

      const tuneSettingsContainer = vh("div", { class: "ce-popover-item" }, [
        icon,
        vh("div", { class: "ce-popover-item__title" }, "Set URL"),
      ]);

      tuneSettingsContainer.addEventListener("click", () => {
        const settingsAreOpen = this.settingsAreOpen();

        if (settingsAreOpen) {
          settingsAreOpen.remove();
          return;
        }

        const settingsContainer = vh("div", { class: "__settings-container" }, [
          vh("input", {
            placeholder: "Paste an image URL...",
            value: this.data.url ? this.data.url : "",
            class: "",
          }),
        ]);

        this.settingsWrapper.appendChild(settingsContainer);
      });

      this.settingsWrapper.appendChild(tuneSettingsContainer);
    });

    return this.settingsWrapper;
  }
}
