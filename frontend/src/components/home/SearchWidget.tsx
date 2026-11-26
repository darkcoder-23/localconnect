
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search, Home, BriefcaseBusiness } from "lucide-react";

type SearchMode = "services" | "brokers";

export default function SearchWidget() {
  const router = useRouter();

  const [mode, setMode] = useState<SearchMode>("services");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [budget, setBudget] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (mode === "services") {
      if (category) {
        params.set("category", category);
      }

      router.push(`/services?${params.toString()}`);
      return;
    }

    if (accommodation) {
      params.set("accommodation", accommodation);
    }

    if (budget) {
      params.set("budget_max", budget);
    }

    router.push(`/find-brokers?${params.toString()}`);
  }

  function changeMode(nextMode: SearchMode) {
    setMode(nextMode);
    setCategory("");
    setAccommodation("");
    setBudget("");
  }

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">
      {/* Search Tabs */}
      <div className="mb-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => changeMode("services")}
          aria-pressed={mode === "services"}
          className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${mode === "services"
              ? "bg-[#142B4A] text-white shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
        >
          <Home size={17} />
          Home Services
        </button>

        <button
          type="button"
          onClick={() => changeMode("brokers")}
          aria-pressed={mode === "brokers"}
          className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${mode === "brokers"
              ? "bg-[#142B4A] text-white shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
        >
          <BriefcaseBusiness size={17} />
          Find Brokers
        </button>
      </div>

      <form onSubmit={handleSearch}>
        {/* Location */}
        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
          />

          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter city, locality or PIN code"
            aria-label="City, locality or PIN code"
            className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Home Services Filter */}
        {mode === "services" && (
          <div className="mt-3">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Select home service category"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All Home Services</option>
              <option value="cook">Cook</option>
              <option value="home-kitchen-cleaning">
                Home & Kitchen Cleaning
              </option>
              <option value="washroom-cleaning">Washroom Cleaning</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrician">Electrician</option>
              <option value="carpenter">Carpenter</option>
              <option value="rent-a-labour">Rent a Labour</option>
            </select>
          </div>
        )}

        {/* Broker Filters */}
        {mode === "brokers" && (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <select
              value={accommodation}
              onChange={(event) => setAccommodation(event.target.value)}
              aria-label="Accommodation type"
              className="h-12 min-w-0 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Any Accommodation Type</option>
              <option value="single-room">Single Room</option>
              <option value="shared-room">Shared Room</option>
              <option value="pg">PG</option>
              <option value="hostel">Hostel</option>
              <option value="1-bhk">1 BHK</option>
              <option value="2-bhk">2 BHK</option>
              <option value="house-apartment">House / Apartment</option>
              <option value="commercial">Commercial</option>
            </select>

            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              aria-label="Maximum monthly budget"
              className="h-12 min-w-0 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Any Monthly Budget</option>
              <option value="5000">Up to ₹5,000</option>
              <option value="10000">Up to ₹10,000</option>
              <option value="15000">Up to ₹15,000</option>
              <option value="25000">Up to ₹25,000</option>
              <option value="50000">Up to ₹50,000</option>
            </select>
          </div>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        >
          <Search size={18} />
          Search {mode === "services" ? "Services" : "Brokers"}
        </button>
      </form>
    </div>
  );
}
