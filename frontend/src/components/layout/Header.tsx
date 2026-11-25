import Link from "next/link";
import { Menu } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Home Services", href: "/services" },
  { label: "Find Brokers", href: "/find-brokers" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142B4A] text-lg font-bold text-white">
            L
          </span>
          <span className="text-xl font-bold tracking-tight text-[#142B4A]">
            Local<span className="text-blue-600">Connect</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[#142B4A] hover:bg-slate-100"
          >
            Log in
          </Link>
          <Link
            href="/join-as-provider"
            className="rounded-lg bg-[#142B4A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Join as Professional
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-[#142B4A]">
            <Menu size={21} />
          </summary>
          <div className="absolute right-0 top-12 flex w-64 flex-col gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Log in
            </Link>
            <Link href="/join-as-provider" className="rounded-lg bg-[#142B4A] px-3 py-3 text-sm font-semibold text-white">
              Join as Professional
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

