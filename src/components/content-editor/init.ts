import type { OutputBlockData } from "@editorjs/editorjs";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
// @ts-ignore
import CheckList from "@editorjs/checklist";
// @ts-ignore
import Marker from "@editorjs/marker";
import Image from "./blocks/Image";
import Callout from "./blocks/Callout";

import useFeatureFlags from "^/composables/useFeatureFlags";

const { flagIsEnabled } = useFeatureFlags();

export function initializeEditor(
  blocks: OutputBlockData[],
  props: {
    placeholder: string;
  }
): EditorJS {
  return new EditorJS({
    holder: "editor",
    placeholder: props.placeholder,
    inlineToolbar: true,
    tools: {
      image: Image,
      header: Header,
      list: List,
      table: Table,
      checkList: CheckList,
      quote: Quote,
      code: Code,
      inlineCode: InlineCode,
      marker: Marker,
      ...(flagIsEnabled("calloutblock") ? { callout: Callout } : undefined),
    },
    data: {
      blocks,
    },
  });
}
