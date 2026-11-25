
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
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <span className="mb-6 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-700">
            Your neighbourhood, connected
          </span>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#142B4A] sm:text-5xl lg:text-[58px]">
            Find trusted local professionals,{" "}
            <span className="text-blue-600">without the hassle.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            Discover home service professionals and local property brokers in
            one simple place. Search your area and connect directly.
          </p>

          <div className="mt-9">
            <SearchWidget />
          </div>

          <div className="mt-7 flex flex-wrap gap-6">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-600">
                <Icon size={17} className="text-teal-700" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden min-h-[400px] items-center justify-center lg:flex">
          <div className="flex h-[350px] w-[350px] items-center justify-center rounded-[40px] bg-gradient-to-br from-[#142B4A] to-blue-700 p-10 text-center text-white shadow-2xl">
            <div>
              <MapPin size={52} className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold">Local help.</h2>
              <h2 className="mt-2 text-3xl font-bold text-blue-200">
                Made simple.
              </h2>
              <p className="mt-5 text-sm leading-6 text-blue-100">
                One platform to discover local services and connect with brokers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
