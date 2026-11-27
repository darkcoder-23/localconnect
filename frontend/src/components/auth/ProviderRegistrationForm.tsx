"use client";

import AccountFields from "@/components/auth/AccountFields";
import { SelectField, TextAreaField, TextField } from "@/components/auth/FormField";
import { DemoNotice, ValidationResult } from "@/components/auth/FormStatus";
import { useDemoForm } from "@/components/auth/useDemoForm";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/search-options";
import { validateProvider } from "@/lib/validation";

export default function ProviderRegistrationForm() {
  const { formRef, errors, isValid, handleSubmit, handleChange } =
    useDemoForm(validateProvider);

  return (
    <>
      <DemoNotice>Registration is not connected yet, so no account will be created.</DemoNotice>
      <form ref={formRef} method="post" noValidate onSubmit={handleSubmit} onChange={handleChange} className="grid gap-5 sm:grid-cols-2">
        <AccountFields errors={errors} />
        <SelectField name="category" label="Service category" placeholder="Select a category" options={serviceCategories} error={errors.category} />
        <TextField name="experience" label="Years of experience" inputMode="numeric" maxLength={2} error={errors.experience} />
        <TextAreaField name="about" label="About your services" maxLength={500} className="sm:col-span-2" error={errors.about} />
        <Button type="submit" className="h-11 w-full bg-[#142B4A] text-white hover:bg-blue-800 sm:col-span-2">
          Check professional details
        </Button>
        <div className="sm:col-span-2">
          <ValidationResult
            show={isValid}
            message="All fields passed validation. No account or profile was created, and nothing was sent or saved."
          />
        </div>
      </form>
    </>
  );
}
