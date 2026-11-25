import Link from "next/link";
import Header from "@/components/layout/Header";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  { name: "Cook", description: "Daily, monthly and part-time cooking services", icon: "🍳" },
  { name: "Home & Kitchen Cleaning", description: "Keep your home clean and organised", icon: "🧹" },
  { name: "Washroom Cleaning", description: "Professional bathroom cleaning", icon: "🚿" },
  { name: "Plumbing", description: "Find local plumbing professionals", icon: "🔧" },
  { name: "Electrician", description: "Electrical repair and installation", icon: "💡" },
  { name: "Carpenter", description: "Furniture repair and carpentry work", icon: "🪚" },
  { name: "Rent a Labour", description: "Find workers for daily or hourly work", icon: "👷" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8FAFC]">
        <section className="bg-[#142B4A] px-5 py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-4 text-sm font-semibold text-blue-200">
              LOCALCONNECT / HOME SERVICES
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Find the right professional for your home
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
              Discover local cooks, cleaners, electricians, plumbers and
              other home service professionals. Connect with them directly.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#142B4A]">
              Explore Home Services
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose a category to discover professionals in your area.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={`/services/search?category=${encodeURIComponent(service.name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and"))}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold text-[#142B4A]">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm font-semibold text-blue-600">
                  Explore service
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-teal-100 bg-teal-50 p-6 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#142B4A]">
                Are you a home service professional?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Create your professional profile and get discovered locally.
              </p>
            </div>

            <Link
              href="/join-as-provider"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 md:mt-0"
            >
              Join as Professional <ArrowRight size={17} />
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 size={15} className="text-teal-600" />
            Contact professionals directly. No booking payment required.
          </p>
        </section>
      </main>
    </>
  );
}