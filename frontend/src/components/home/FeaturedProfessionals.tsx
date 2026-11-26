
import { MapPin, Star, UserRound } from "lucide-react";

const professionals = [
    {
        name: "Home Service Professional",
        category: "Cook",
        location: "Local area",
        rating: "Demo rating",
    },
    {
        name: "Cleaning Professional",
        category: "Home Cleaning",
        location: "Local area",
        rating: "Demo rating",
    },
    {
        name: "Electrical Professional",
        category: "Electrician",
        location: "Local area",
        rating: "Demo rating",
    },
];

export default function FeaturedProfessionals() {
    return (
        <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#142B4A]">
                    Featured Professionals
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                    Discover service professionals in your area
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {professionals.map((professional) => (
                    <article
                        key={professional.category}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                <UserRound size={28} />
                            </div>

                            <div>
                                <span className="text-xs font-semibold text-blue-600">
                                    Demo profile
                                </span>
                                <h3 className="font-bold text-[#142B4A]">
                                    {professional.name}
                                </h3>
                                <p className="text-xs text-slate-500">
                                    {professional.category}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                                <MapPin size={14} />
                                {professional.location}
                            </span>

                            <span className="flex items-center gap-1">
                                <Star size={14} />
                                {professional.rating}
                            </span>
                        </div>

                        <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
                            Illustrative profile — real professional details will appear
                            when provider registration and backend integration are ready.
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
