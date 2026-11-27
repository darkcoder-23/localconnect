"use client";

import { useState } from "react";
import { TextField } from "@/components/auth/FormField";
import { DemoNotice, ValidationResult } from "@/components/auth/FormStatus";
import { useDemoForm } from "@/components/auth/useDemoForm";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { validateLogin } from "@/lib/validation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { formRef, errors, isValid, handleSubmit, handleChange } =
    useDemoForm(validateLogin);

  return (
    <>
      <DemoNotice>Sign-in is not connected yet.</DemoNotice>
      {/* method="post" keeps the password out of the URL if JavaScript has not loaded. */}
      <form ref={formRef} method="post" noValidate onSubmit={handleSubmit} onChange={handleChange} className="grid gap-5">
        <TextField name="email" label="Email address" type="email" autoComplete="email" maxLength={120} error={errors.email} />
        <TextField name="password" label="Password" type={showPassword ? "text" : "password"} autoComplete="current-password" maxLength={128} data-sensitive error={errors.password} />
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <Checkbox checked={showPassword} onCheckedChange={(checked) => setShowPassword(checked)} />
          Show password
        </label>
        <Button type="submit" className="h-11 w-full bg-[#142B4A] text-white hover:bg-blue-800">
          Log in
        </Button>
        <ValidationResult
          show={isValid}
          message="Your details passed the format check. You are not logged in, because authentication is not connected. Nothing was sent or saved."
        />
      </form>
    </>
  );
}
