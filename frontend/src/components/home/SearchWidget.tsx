
"use client";

import { useState } from "react";

export default function SearchWidget() {
  const [mode, setMode] = useState("services");

  return (
    <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
      <div className="mb-5 flex gap-3">
        <button
          type="button"
          onClick={() => setMode("services")}
          className={`flex-1 rounded-lg px-4 py-3 font-semibold ${
            mode === "services"
              ? "bg-[#142B4A] text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Home Services
        </button>

        <button
          type="button"
          onClick={() => setMode("brokers")}
          className={`flex-1 rounded-lg px-4 py-3 font-semibold ${
            mode === "brokers"
              ? "bg-[#142B4A] text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          Find Brokers
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          type="text"
          placeholder="Enter city or locality"
          className="rounded-lg border border-slate-200 px-4 py-4 outline-none focus:border-blue-500"
        />

        {mode === "services" ? (
          <select className="rounded-lg border border-slate-200 px-4 py-4">
            <option>All Home Services</option>
            <option>Cook</option>
            <option>Cleaning</option>
            <option>Plumbing</option>
            <option>Electrician</option>
            <option>Carpenter</option>
            <option>Rent a Labour</option>
          </select>
        ) : (
          <select className="rounded-lg border border-slate-200 px-4 py-4">
            <option>Any Accommodation Type</option>
            <option>Single Room</option>
            <option>Shared Room</option>
            <option>PG</option>
            <option>Hostel</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>House / Apartment</option>
            <option>Commercial</option>
          </select>
        )}
      </div>

      {mode === "brokers" && (
        <select className="mt-3 w-full rounded-lg border border-slate-200 px-4 py-4">
          <option>Any Monthly Budget</option>
          <option>Up to ₹5,000</option>
          <option>Up to ₹10,000</option>
          <option>Up to ₹15,000</option>
          <option>Up to ₹25,000</option>
          <option>Up to ₹50,000</option>
        </select>
      )}

      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
