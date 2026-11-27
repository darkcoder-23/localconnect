export type FormErrors = Record<string, string>;

function text(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function checkEmail(data: FormData, errors: FormErrors) {
  const email = text(data, "email");
  if (!email) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Enter a valid email address, like name@example.com.";
}

export function validateLogin(data: FormData): FormErrors {
  const errors: FormErrors = {};
  checkEmail(data, errors);
  if (!data.get("password")) errors.password = "Enter your password.";
  return errors;
}

function validateAccount(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (text(data, "fullName").length < 2)
    errors.fullName = "Enter your full name (at least 2 characters).";

  checkEmail(data, errors);

  // Indian mobile number: 10 digits starting 6-9, optionally prefixed with +91.
  const phone = text(data, "phone").replace(/[\s-]/g, "");
  if (!/^(\+91)?[6-9]\d{9}$/.test(phone))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";

  if (text(data, "city").length < 2)
    errors.city = "Enter your city or locality.";

  const password = String(data.get("password") ?? "");
  if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password))
    errors.password = "Use at least 8 characters with a letter and a number.";

  const confirm = String(data.get("confirmPassword") ?? "");
  if (!confirm) errors.confirmPassword = "Confirm your password.";
  else if (confirm !== password)
    errors.confirmPassword = "Passwords do not match.";

  return errors;
}

function checkExperience(data: FormData, errors: FormErrors) {
  const experience = text(data, "experience");
  if (!/^\d{1,2}$/.test(experience) || Number(experience) > 60)
    errors.experience = "Enter whole years from 0 to 60.";
}

export function validateProvider(data: FormData): FormErrors {
  const errors = validateAccount(data);
  if (!text(data, "category")) errors.category = "Select a service category.";
  checkExperience(data, errors);
  if (text(data, "about").length < 20)
    errors.about = "Describe your services in at least 20 characters.";
  return errors;
}

export function validateBroker(
  data: FormData,
  accommodationTypes: string[],
): FormErrors {
  const errors = validateAccount(data);
  checkExperience(data, errors);
  if (text(data, "serviceAreas").length < 2)
    errors.serviceAreas = "Enter at least one area you serve.";
  if (accommodationTypes.length === 0)
    errors.accommodationTypes = "Select at least one accommodation type.";
  if (text(data, "brokerage").length < 2)
    errors.brokerage = "Describe your brokerage charges.";
  return errors;
}
