
import {
    CookingPot,
    Sparkles,
    Droplets,
    Zap,
    Hammer,
    HardHat,
    ArrowRight,
} from "lucide-react";

const services = [
    { name: "Cook", icon: CookingPot, color: "bg-orange-50 text-orange-600" },
    { name: "Cleaning", icon: Sparkles, color: "bg-teal-50 text-teal-600" },
    { name: "Washroom", icon: Droplets, color: "bg-blue-50 text-blue-600" },
    { name: "Electrician", icon: Zap, color: "bg-amber-50 text-amber-600" },
    { name: "Carpenter", icon: Hammer, color: "bg-orange-50 text-orange-700" },
    { name: "Labour", icon: HardHat, color: "bg-purple-50 text-purple-600" },
];

export default function PopularServices() {
    return (
        <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-[#142B4A]">
                        Popular Home Services
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Find professionals for your everyday needs
                    </p>
                </div>

                <a
                    href="/services"
                    className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                    View All <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {services.map(({ name, icon: Icon, color }) => (
                    <a
                        key={name}
                        href={`/services?category=${encodeURIComponent(name.toLowerCase())}`}
                        className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    >
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                            <Icon size={27} />
                        </div>
                        <span className="mt-3 text-sm font-semibold text-slate-800">
                            {name}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
