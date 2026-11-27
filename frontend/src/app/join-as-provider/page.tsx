import type { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import ProviderRegistrationForm from "@/components/auth/ProviderRegistrationForm";

export const metadata: Metadata = { title: "Join as Professional" };

export default function JoinAsProviderPage() {
  return (
    <AuthLayout
      eyebrow="LOCALCONNECT / FOR PROFESSIONALS"
      title="Join as a home service professional"
      description="Tell customers what you do and where you work."
      links={
        <>
          <p>Are you a property broker? <Link href="/join-as-broker" className="font-semibold text-blue-600 hover:underline">Join as Broker</Link></p>
          <p>Already have an account? <Link href="/login" className="font-semibold text-blue-600 hover:underline">Log in</Link></p>
        </>
      }
    >
      <ProviderRegistrationForm />
    </AuthLayout>
  );
}
