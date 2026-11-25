
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";

type SearchMode = "services" | "brokers";

export default function SearchWidget() {
  const [mode, setMode] = useState<SearchMode>("services");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [budget, setBudget] = useState("");

  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());

    if (mode === "services") {
      if (category) params.set("category", category);
      router.push(`/services/search?${params.toString()}`);
    } else {
      if (accommodation) params.set("type", accommodation);
      if (budget) params.set("budget", budget);
      router.push(`/find-brokers/search?${params.toString()}`);
    }
  }

  return (
    <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)] sm:p-5">
      <div className="mb-5 flex gap-2 rounded-xl bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode("services")}
          className={`flex-1 rounded-lg px-3 py-3 text-sm font-semibold transition ${
            mode === "services"
              ? "bg-[#142B4A] text-white shadow-sm"
              : "text-slate-600 hover:bg-white"
          }`}
        >
          Home Services
        </button>
        <button
          type="button"
          onClick={() => setMode("brokers")}
          className={`flex-1 rounded-lg px-3 py-3 text-sm font-semibold transition ${
            mode === "brokers"
              ? "bg-[#142B4A] text-white shadow-sm"
              : "text-slate-600 hover:bg-white"
          }`}
        >
          Find Brokers
        </button>
      </div>

      <form onSubmit={handleSearch}>
        <div className={`grid gap-3 ${mode === "services" ? "md:grid-cols-[1fr_1fr_auto]" : "md:grid-cols-[1fr_1fr_1fr_auto]"}`}>
          <label className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500">
            <MapPin size={19} className="shrink-0 text-blue-600" />
            <span className="min-w-0 flex-1">
              <span className="mb-1 block text-xs font-semibold text-slate-500">Location</span>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City or locality"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </span>
          </label>

          {mode === "services" ? (
            <label className="flex min-w-0 flex-col justify-center rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500">
              <span className="mb-1 text-xs font-semibold text-slate-500">Service category</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full bg-transparent text-sm text-slate-700 outline-none"
              >
                <option value="">All home services</option>
                <option value="cook">Cook</option>
                <option value="cleaning">Home & Kitchen Cleaning</option>
                <option value="washroom-cleaning">Washroom Cleaning</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrician">Electrician</option>
                <option value="carpenter">Carpenter</option>
                <option value="labour">Rent a Labour</option>
              </select>
            </label>
          ) : (
            <>
              <label className="flex min-w-0 flex-col justify-center rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500">
                <span className="mb-1 text-xs font-semibold text-slate-500">Accommodation type</span>
                <select
                  value={accommodation}
                  onChange={(event) => setAccommodation(event.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 outline-none"
                >
                  <option value="">Any type</option>
                  <option value="single-room">Single Room</option>
                  <option value="shared-room">Shared Room</option>
                  <option value="pg">PG</option>
                  <option value="hostel">Hostel</option>
                  <option value="1-bhk">1 BHK</option>
                  <option value="2-bhk">2 BHK</option>
                  <option value="house-apartment">House / Apartment</option>
                  <option value="commercial">Commercial</option>
                </select>
              </label>

              <label className="flex min-w-0 flex-col justify-center rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500">
                <span className="mb-1 text-xs font-semibold text-slate-500">Monthly budget</span>
                <select
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 outline-none"
                >
                  <option value="">Any budget</option>
                  <option value="5000">Up to ₹5,000</option>
                  <option value="10000">Up to ₹10,000</option>
                  <option value="15000">Up to ₹15,000</option>
                  <option value="25000">Up to ₹25,000</option>
                  <option value="50000">Up to ₹50,000</option>
                </select>
              </label>
            </>
          )}

          <button
            type="submit"
            className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Search size={18} />
            Search
          </button>
        </div>
      </form>

      <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <SlidersHorizontal size={14} />
        {mode === "services"
          ? "Find local professionals and contact them directly."
          : "Discover brokers who handle your preferred accommodation type and budget."}
      </p>
    </div>
  );
}
