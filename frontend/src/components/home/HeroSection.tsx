
import SearchWidget from "./SearchWidget";
import { ShieldCheck, Users, MapPin } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, text: "Verified Professionals" },
  { icon: Users, text: "Direct Contact" },
  { icon: MapPin, text: "Local Support" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#EAF3FF]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        {/* Hero Content */}
        <div className="relative z-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-800 shadow-sm">
            <MapPin size={14} />
            Your neighbourhood, connected
          </span>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#142B4A] sm:text-5xl lg:text-[58px]">
            Find Trusted Professionals{" "}
            <span className="text-blue-600">Near You</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Discover skilled service providers and local brokers.
            Connect easily with professionals in your area.
          </p>

          <div className="mt-7">
            <SearchWidget />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-xs font-medium text-slate-600"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <Icon size={15} />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-teal-200/40 blur-3xl" />

          <div
            className="relative h-[300px] overflow-hidden rounded-[28px] bg-cover bg-center shadow-xl sm:h-[380px] lg:h-[420px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85')",
            }}
            role="img"
            aria-label="Local professionals working together"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#142B4A]/35 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-sm font-bold text-[#142B4A]">
                Local help. Made simple.
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Find professionals near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
