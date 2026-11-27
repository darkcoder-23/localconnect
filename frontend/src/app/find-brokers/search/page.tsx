import { Suspense } from "react";
import type { Metadata } from "next";
import { Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import NativeSelect from "@/components/shared/NativeSelect";
import SearchResultsEmpty from "@/components/search/SearchResultsEmpty";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  accommodationOptions,
  budgetOptions,
  labelFor,
  parseBrokerSearch,
  type RawSearchParams,
} from "@/lib/search-options";

export const metadata: Metadata = { title: "Search Property Brokers" };

export default function BrokerSearchPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8FAFC]">
        <PageHero
          eyebrow="LOCALCONNECT / FIND BROKERS"
          title="Search local property brokers"
          description="Filter by location, accommodation type and monthly budget."
        />
        <section className="mx-auto max-w-[1200px] px-5 py-10">
          <Suspense fallback={<Skeleton className="h-96 w-full rounded-2xl" />}>
            <BrokerSearchContent searchParams={searchParams} />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}

async function BrokerSearchContent({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const { location, type, budget, hasInvalidFilter } = parseBrokerSearch(
    await searchParams,
  );

  return (
    <>
      <form
        key={`${location}|${type}|${budget}`}
        action="/find-brokers/search"
        method="GET"
        className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
      >
        <div className="grid gap-2">
          <Label htmlFor="location">City or locality</Label>
          <Input
            id="location"
            name="location"
            defaultValue={location}
            maxLength={100}
            placeholder="Enter city or locality"
            className="h-11"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="type">Accommodation type</Label>
          <NativeSelect
            id="type"
            name="type"
            defaultValue={type}
            placeholder="Any accommodation type"
            options={accommodationOptions}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="budget">Monthly budget</Label>
          <NativeSelect
            id="budget"
            name="budget"
            defaultValue={budget}
            placeholder="Any budget"
            options={budgetOptions}
          />
        </div>
        <Button type="submit" className="h-11 self-end bg-blue-600 px-6 text-white hover:bg-blue-700">
          <Search aria-hidden="true" /> Search
        </Button>
      </form>

      <SearchResultsEmpty
        noun="broker"
        clearHref="/find-brokers/search"
        hasInvalidFilter={hasInvalidFilter}
        filters={[
          { label: "Location", value: location || "Any location" },
          { label: "Type", value: labelFor(accommodationOptions, type) || "Any type" },
          { label: "Budget", value: labelFor(budgetOptions, budget) || "Any budget" },
        ]}
      />
    </>
  );
}
