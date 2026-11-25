
import Link from "next/link";
import Header from "@/components/layout/Header";
import {
  MapPin,
  Search,
  Building2,
  CheckCircle2,
  ArrowRight,
  Users,
  ShieldCheck,
  Phone,
} from "lucide-react";

const accommodationTypes = [
  { name: "Single Room", value: "single-room", icon: "🛏️" },
  { name: "Shared Room", value: "shared-room", icon: "👥" },
  { name: "PG", value: "pg", icon: "🏠" },
  { name: "Hostel", value: "hostel", icon: "🏢" },
  { name: "1 BHK", value: "1-bhk", icon: "🏡" },
  { name: "2 BHK", value: "2-bhk", icon: "🏘️" },
  { name: "House / Apartment", value: "house-apartment", icon: "🏠" },
  { name: "Commercial", value: "commercial", icon: "🏬" },
];

export default function FindBrokersPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8FAFC]">
        <section className="relative overflow-hidden bg-[#142B4A] px-5 py-16 text-white md:py-24">
          <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100">
                <Building2 size={15} />
                LOCAL BROKER DISCOVERY
              </div>

              <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
                Find local property brokers you can connect with.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-blue-100">
                Discover brokers based on your location, accommodation
                requirements and budget. Compare their profiles and contact
                them directly.
              </p>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-blue-100">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} /> Verified profiles
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={17} /> Direct contact
                </span>
              </div>
            </div>

            <BrokerSearch />
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#142B4A]">
              What are you looking for?
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose an accommodation type to find brokers who handle it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accommodationTypes.map((type) => (
              <Link
                key={type.value}
                href={`/find-brokers/search?type=${type.value}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {type.icon}
                </div>
                <h3 className="font-bold text-[#142B4A]">{type.name}</h3>
                <div className="mt-4 flex items-center justify-between text-sm font-semibold text-blue-600">
                  Find brokers
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-3">
            <Feature
              icon={<Search size={23} />}
              title="Search your way"
              description="Filter broker profiles by city, locality, accommodation type and budget."
            />
            <Feature
              icon={<Users size={23} />}
              title="Compare broker profiles"
              description="Explore experience, service areas, handled accommodation types and brokerage details."
            />
            <Feature
              icon={<Phone size={23} />}
              title="Connect directly"
              description="Call or WhatsApp brokers directly. No customer contact fee."
            />
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-14">
          <div className="rounded-2xl bg-teal-50 p-8 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#142B4A]">
                Are you a property broker?
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Create your profile and help customers discover your brokerage services.
              </p>
            </div>

            <Link
              href="/join-as-broker"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 md:mt-0"
            >
              Join as Broker <ArrowRight size={17} />
            </Link>
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 size={15} className="text-teal-600" />
            LocalConnect helps customers discover brokers; it does not list individual rental properties.
          </p>
        </section>
      </main>
    </>
  );
}

function BrokerSearch() {
  return (
    <form
      action="/find-brokers/search"
      method="GET"
      className="rounded-2xl bg-white p-5 text-slate-900 shadow-2xl sm:p-7"
    >
      <h2 className="mb-5 text-xl font-bold text-[#142B4A]">
        Find Brokers
      </h2>

      <label className="mb-4 block">
        <span className="mb-2 block text-xs font-semibold text-slate-600">
          City or locality
        </span>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
          <MapPin size={18} className="text-blue-600" />
          <input
            name="location"
            placeholder="Enter city or locality"
            className="h-12 w-full bg-transparent text-sm outline-none"
          />
        </div>
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block text-xs font-semibold text-slate-600">
          Accommodation type
        </span>
        <select
          name="type"
          defaultValue=""
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-blue-500"
        >
          <option value="">Any accommodation type</option>
          {accommodationTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
      </label>

      <label className="mb-5 block">
        <span className="mb-2 block text-xs font-semibold text-slate-600">
          Monthly budget
        </span>
        <select
          name="budget"
          defaultValue=""
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-blue-500"
        >
          <option value="">Any budget</option>
          <option value="5000">Up to ₹5,000</option>
          <option value="10000">Up to ₹10,000</option>
          <option value="15000">Up to ₹15,000</option>
          <option value="25000">Up to ₹25,000</option>
          <option value="50000">Up to ₹50,000</option>
        </select>
      </label>

      <button
        type="submit"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <Search size={18} />
        Search Brokers
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        Free search · Direct broker contact
      </p>
    </form>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="font-bold text-[#142B4A]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}
