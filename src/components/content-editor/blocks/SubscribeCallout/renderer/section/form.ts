import type { SubscribeData } from "../../validationSchema";
import type { API } from "@editorjs/editorjs";
import { make } from "@editorjs/dom";
import { emailSchema } from "^/utils/validation";

const subscribeFormClassname = "subscribe-form";
const emailInputClassname = "subscribe-email-input";
const submitButtonClassname = "subscribe-form-submit-button";

export function renderSubscribeForm(data: SubscribeData, api: API) {
  const form = make("form", subscribeFormClassname) as HTMLFormElement;

  form.addEventListener("submit", (e: Event) => {
    subscribeFormHandler(e, form);
  });

  const emailInput = make("input", [emailInputClassname, api.styles.input], {
    type: "email",
  }) as HTMLInputElement;

  emailInput.placeholder = "Enter email";

  const subscribeButton = make("button", [
    submitButtonClassname,
    api.styles.button,
  ]) as HTMLButtonElement;

  subscribeButton.innerHTML = data.buttonText ?? "Subscribe";

  form.appendChild(emailInput);
  form.appendChild(subscribeButton);

  return form;
}

export function subscribeFormHandler(e: Event, form: HTMLFormElement) {
  e.preventDefault();
  const emailInput = form.querySelector(
    `.${emailInputClassname}`
  ) as HTMLInputElement | null;

  if (!emailInput) return;

  const validEmail = emailSchema.safeParse(emailInput.value);

  if (!validEmail.success) return;

  form.submit();
}
