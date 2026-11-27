"use client";

import { useLayoutEffect, useRef, useState, type FormEvent } from "react";
import type { FormErrors } from "@/lib/validation";

/**
 * Client-side validation only. Nothing is sent, stored or logged.
 * Connect a real API here when the backend is ready.
 */
export function useDemoForm(validate: (data: FormData) => FormErrors) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);

  // With cacheComponents, Next.js can keep a page's state after you navigate
  // away. Clear password fields whenever the page is hidden.
  useLayoutEffect(() => {
    const form = formRef.current;
    return () => {
      form
        ?.querySelectorAll<HTMLInputElement>("input[data-sensitive]")
        .forEach((input) => (input.value = ""));
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(new FormData(form));
    const invalidNames = Object.keys(nextErrors);
    setErrors(nextErrors);
    setIsValid(invalidNames.length === 0);

    if (invalidNames.length === 0) {
      form
        .querySelectorAll<HTMLInputElement>("input[data-sensitive]")
        .forEach((input) => (input.value = ""));
      return;
    }

    // Move focus to the first invalid field in page order.
    const target = Array.from(
      form.querySelectorAll<HTMLElement>("[data-field]"),
    ).find((element) => invalidNames.includes(element.dataset.field ?? ""));
    target?.focus();
  }

  function handleChange() {
    setIsValid(false);
  }

  return { formRef, errors, isValid, handleSubmit, handleChange };
}
