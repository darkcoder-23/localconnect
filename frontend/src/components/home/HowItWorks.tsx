
import { Search, Users, Phone } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Search",
        description: "Find what you need in your locality.",
    },
    {
        number: "02",
        icon: Users,
        title: "Explore Profiles",
        description: "Compare professionals and their details.",
    },
    {
        number: "03",
        icon: Phone,
        title: "Contact Directly",
        description: "Connect directly by phone or WhatsApp.",
    },
];

export default function HowItWorks() {
    return (
        <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#F0F5FF] px-5 py-10 sm:px-10">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#142B4A]">
                        How It Works?
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Find. Connect. Get it Done.
                    </p>
                </div>

                <div className="mt-9 grid gap-8 md:grid-cols-3">
                    {steps.map(({ number, icon: Icon, title, description }) => (
                        <div key={number} className="flex flex-col items-center text-center">
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                                <Icon size={28} />
                                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#142B4A] text-xs font-bold text-white">
                                    {number}
                                </span>
                            </div>

                            <h3 className="mt-4 font-bold text-[#142B4A]">{title}</h3>
                            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
