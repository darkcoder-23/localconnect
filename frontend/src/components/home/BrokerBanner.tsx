
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function BrokerBanner() {
    return (
        <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#142B4A] to-blue-700 px-6 py-10 text-white sm:px-10">
                <div className="relative z-10 max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100">
                        <MapPin size={14} />
                        Local property brokers
                    </span>

                    <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                        Find the Right Broker for Your Needs
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
                        Discover local brokers based on your location, accommodation
                        requirements and budget range.
                    </p>

                    <Link
                        href="/find-brokers"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-bold text-[#142B4A] transition hover:bg-teal-300"
                    >
                        Find Brokers <ArrowRight size={17} />
                    </Link>
                </div>

                <div className="pointer-events-none absolute -bottom-20 -right-12 hidden h-72 w-72 rounded-full border-[35px] border-white/10 lg:block" />
                <div className="pointer-events-none absolute right-28 top-10 hidden h-32 w-32 rounded-full bg-white/10 lg:block" />
            </div>
        </section>
    );
}
