import { make } from "@editorjs/dom";

const sectionClassname = "section";

export function buildSection(classname: string, children: HTMLElement[]) {
  const section = make("div", [sectionClassname, classname]);

  for (let i = 0; i < children.length; i++) {
    section.appendChild(children[i]);
  }

  return section;
}
