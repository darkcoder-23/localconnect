import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NativeSelectProps = ComponentProps<"select"> & {
  placeholder: string;
  options: { value: string; label: string }[];
};

export default function NativeSelect({
  placeholder,
  options,
  className,
  ...props
}: NativeSelectProps) {
  return (
    <select
      className={cn(
        "h-11 w-full min-w-0 rounded-lg border border-input bg-white px-3 text-base text-slate-800 outline-none focus-visible:border-blue-500 focus-visible:ring-3 focus-visible:ring-blue-100 aria-invalid:border-destructive md:text-sm",
        className,
      )}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
