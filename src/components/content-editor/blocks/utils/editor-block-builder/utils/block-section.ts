import { make } from "@editorjs/dom";

const sectionClassname = "section";

export function buildSection(classname: string, children: HTMLElement[]) {
  const section = make("div", [sectionClassname, classname]);

  children.forEach((child) => () => {
    section.appendChild(child);
  });

  return section;
}
