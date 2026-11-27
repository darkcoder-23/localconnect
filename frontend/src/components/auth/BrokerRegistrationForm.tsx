"use client";

import { useState } from "react";
import AccountFields from "@/components/auth/AccountFields";
import { FieldError, TextAreaField, TextField } from "@/components/auth/FormField";
import { DemoNotice, ValidationResult } from "@/components/auth/FormStatus";
import { useDemoForm } from "@/components/auth/useDemoForm";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { accommodationOptions } from "@/lib/search-options";
import { validateBroker } from "@/lib/validation";

export default function BrokerRegistrationForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const { formRef, errors, isValid, handleSubmit, handleChange } = useDemoForm(
    (data) => validateBroker(data, selected),
  );

  function toggle(value: string, checked: boolean) {
    handleChange();
    setSelected((current) =>
      checked ? [...current, value] : current.filter((item) => item !== value),
    );
  }

  return (
    <>
      <DemoNotice>Registration is not connected yet, so no account will be created.</DemoNotice>
      <form ref={formRef} method="post" noValidate onSubmit={handleSubmit} onChange={handleChange} className="grid gap-5 sm:grid-cols-2">
        <AccountFields errors={errors} />
        <TextField name="agencyName" label="Agency name (optional)" autoComplete="organization" maxLength={100} />
        <TextField name="experience" label="Years of experience" inputMode="numeric" maxLength={2} error={errors.experience} />
        <TextField name="serviceAreas" label="Areas you serve" maxLength={200} placeholder="Separate areas with commas" className="sm:col-span-2" error={errors.serviceAreas} />

        <fieldset
          tabIndex={-1}
          data-field="accommodationTypes"
          aria-describedby={errors.accommodationTypes ? "accommodationTypes-error" : undefined}
          className="outline-none sm:col-span-2"
        >
          <legend className="mb-3 text-sm font-medium">Accommodation types you handle</legend>
          <div className="grid gap-3 min-[420px]:grid-cols-2">
            {accommodationOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-700">
                <Checkbox
                  checked={selected.includes(option.value)}
                  onCheckedChange={(checked) => toggle(option.value, checked)}
                />
                {option.label}
              </label>
            ))}
          </div>
          <div className="mt-2">
            <FieldError name="accommodationTypes" error={errors.accommodationTypes} />
          </div>
        </fieldset>

        <TextAreaField name="brokerage" label="Brokerage charges" maxLength={300} placeholder="Explain how you charge customers" className="sm:col-span-2" error={errors.brokerage} />
        <Button type="submit" className="h-11 w-full bg-[#142B4A] text-white hover:bg-blue-800 sm:col-span-2">
          Check broker details
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
