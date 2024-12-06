import { it, expect } from "vitest";
import { vh } from "./vanilla-h";

it("can make DOM Elements", () => {
  const div = vh("div", { class: "fake-class" }, "hello");
  expect(div.textContent).toEqual("hello");
  expect(div.classList).toContain("fake-class");
  expect(div).toMatchSnapshot();
});
