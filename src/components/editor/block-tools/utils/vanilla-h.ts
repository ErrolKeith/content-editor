export function vh(
  tag: string,
  props?: Record<string, string>,
  children?: HTMLElement[] | string
) {
  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(props || {})) {
    element.setAttribute(key, value);
  }

  if (!children) return element;

  for (const child of children) {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  }

  return element;
}
