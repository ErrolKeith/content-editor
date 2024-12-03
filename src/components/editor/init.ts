import type { OutputBlockData } from "@editorjs/editorjs";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";
import { SimpleImage } from "./block-tools/SimpleImage";
// @ts-ignore types missing
import CheckList from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";

export function initializeEditor(blocks: OutputBlockData[]): EditorJS {
  return new EditorJS({
    holder: "editor",
    placeholder: "Start writing great content.....",
    tools: {
      header: Header,
      list: List,
      table: Table,
      image: SimpleImage,
      checkList: CheckList,
      quote: Quote,
      code: Code,
    },
    data: {
      blocks,
    },
  });
}

//   embed: require('@editorjs/embed'),

//   image: require('@editorjs/image'),
//   inlineCode: require('@editorjs/inline-code'),
//   quote: require('@editorjs/quote'),
//   marker: require('@editorjs/marker'),
//   linkTool: require('@editorjs/link'),
//   delimiter: require('@editorjs/delimiter'),
//   raw: require('@editorjs/raw'),
//   warning: require('@editorjs/warning'),
