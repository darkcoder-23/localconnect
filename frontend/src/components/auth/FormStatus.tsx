import { CheckCircle2, Info } from "lucide-react";

export function DemoNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
      <Info size={17} className="mt-1 shrink-0" aria-hidden="true" />
      <span>
        <strong>Demo only.</strong> {children} Please do not enter a real
        password.
      </span>
    </p>
  );
}

export function ValidationResult({ show, message }: { show: boolean; message: string }) {
  return (
    <div role="status">
      {show && (
        <p className="flex items-start gap-2 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm leading-6 text-teal-900">
          <CheckCircle2 size={17} className="mt-1 shrink-0" aria-hidden="true" />
          {message}
        </p>
      )}
    </div>
  );
}
