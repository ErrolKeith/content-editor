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

export function initializeEditor(
  blocks: OutputBlockData[],
  props: {
    placeholder: string;
  }
): EditorJS {
  return new EditorJS({
    holder: "editor",
    placeholder: props.placeholder,
    inlineToolbar: ["bold", "italic", "link", "inlineCode", "marker"],
    tools: {
      header: Header,
      list: List,
      table: Table,
      checkList: CheckList,
      quote: Quote,
      code: Code,
      inlineCode: InlineCode,
      marker: Marker,
    },
    data: {
      blocks,
    },
  });
}
