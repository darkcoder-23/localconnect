
import SearchWidget from "./SearchWidget";
import { ShieldCheck, Users, MapPin } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, text: "Verified profiles" },
  { icon: Users, text: "Local professionals" },
  { icon: MapPin, text: "Search by location" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[420px] w-[420px] rounded-full bg-teal-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            Your neighbourhood, connected
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[#142B4A] sm:text-5xl lg:text-[58px]">
            Find trusted local professionals,{" "}
            <span className="text-blue-600">without the hassle.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover home service professionals and local property brokers in
            one simple place. Search your area and connect directly.
          </p>

          <div className="mt-9">
            <SearchWidget />
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <Icon size={17} className="text-teal-700" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[440px] items-center justify-center lg:flex">
          <div className="absolute h-[390px] w-[390px] rounded-full bg-blue-100" />
          <div className="relative z-10 flex h-[350px] w-[350px] items-center justify-center rounded-[40px] border border-white bg-gradient-to-br from-[#142B4A] to-blue-700 p-10 shadow-2xl">
            <div className="text-center text-white">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-4xl">
                <MapPin size={42} />
              </div>
              <p className="text-3xl font-bold">Local help.</p>
              <p className="mt-2 text-3xl font-bold text-blue-200">Made simple.</p>
              <p className="mx-auto mt-5 max-w-[230px] text-sm leading-6 text-blue-100">
                One platform to discover local services and connect with brokers.
              </p>
            </div>
          </div>
          <div className="absolute bottom-5 right-0 z-20 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
            <p className="text-sm font-bold text-[#142B4A]">Search locally</p>
            <p className="mt-1 text-xs text-slate-500">Connect directly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
