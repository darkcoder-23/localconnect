import type { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Log In" };

export default function LoginPage() {
  return (
    <AuthLayout
      narrow
      eyebrow="LOCALCONNECT / ACCOUNT"
      title="Log in to LocalConnect"
      description="Enter your email address and password."
      links={
        <>
          <p>Home service professional? <Link href="/join-as-provider" className="font-semibold text-blue-600 hover:underline">Join as Professional</Link></p>
          <p>Property broker? <Link href="/join-as-broker" className="font-semibold text-blue-600 hover:underline">Join as Broker</Link></p>
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}
