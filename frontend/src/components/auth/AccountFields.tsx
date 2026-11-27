import { TextField } from "@/components/auth/FormField";
import type { FormErrors } from "@/lib/validation";

/** Fields shared by the two separate registration forms. */
export default function AccountFields({ errors }: { errors: FormErrors }) {
  return (
    <>
      <TextField name="fullName" label="Full name" autoComplete="name" maxLength={80} error={errors.fullName} />
      <TextField name="email" label="Email address" type="email" autoComplete="email" maxLength={120} error={errors.email} />
      <TextField name="phone" label="Mobile number" type="tel" autoComplete="tel" maxLength={16} placeholder="10-digit number" error={errors.phone} />
      <TextField name="city" label="City or locality" autoComplete="address-level2" maxLength={100} error={errors.city} />
      <TextField name="password" label="Password" type="password" autoComplete="new-password" maxLength={128} data-sensitive error={errors.password} />
      <TextField name="confirmPassword" label="Confirm password" type="password" autoComplete="new-password" maxLength={128} data-sensitive error={errors.confirmPassword} />
    </>
  );
}
