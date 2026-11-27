import type { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import BrokerRegistrationForm from "@/components/auth/BrokerRegistrationForm";

export const metadata: Metadata = { title: "Join as Broker" };

export default function JoinAsBrokerPage() {
  return (
    <AuthLayout
      eyebrow="LOCALCONNECT / FOR BROKERS"
      title="Join as a property broker"
      description="Share your service areas, accommodation types and brokerage details."
      links={
        <>
          <p>Offer home services? <Link href="/join-as-provider" className="font-semibold text-blue-600 hover:underline">Join as Professional</Link></p>
          <p>Already have an account? <Link href="/login" className="font-semibold text-blue-600 hover:underline">Log in</Link></p>
        </>
      }
    >
      <BrokerRegistrationForm />
    </AuthLayout>
  );
}
