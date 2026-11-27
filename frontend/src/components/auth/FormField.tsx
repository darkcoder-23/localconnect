import type { ComponentProps } from "react";
import NativeSelect from "@/components/shared/NativeSelect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type BaseProps = {
  name: string;
  label: string;
  error?: string;
  className?: string;
};

function a11y(name: string, error?: string) {
  return {
    id: name,
    name,
    "data-field": name,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
  };
}

export function FieldError({ name, error }: { name: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${name}-error`} className="text-xs text-red-600">
      {error}
    </p>
  );
}

export function TextField({
  name,
  label,
  error,
  className,
  ...props
}: BaseProps & Omit<ComponentProps<"input">, "name" | "className">) {
  return (
    <div className={`grid content-start gap-2 ${className ?? ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <Input {...props} {...a11y(name, error)} className="h-11 bg-white" />
      <FieldError name={name} error={error} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  error,
  className,
  ...props
}: BaseProps & { placeholder: string; options: { value: string; label: string }[] }) {
  return (
    <div className={`grid content-start gap-2 ${className ?? ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <NativeSelect {...props} {...a11y(name, error)} defaultValue="" />
      <FieldError name={name} error={error} />
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  error,
  className,
  ...props
}: BaseProps & Omit<ComponentProps<"textarea">, "name" | "className">) {
  return (
    <div className={`grid content-start gap-2 ${className ?? ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <Textarea {...props} {...a11y(name, error)} className="min-h-24 bg-white" />
      <FieldError name={name} error={error} />
    </div>
  );
}
