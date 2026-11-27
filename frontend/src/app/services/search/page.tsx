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
  labelFor,
  parseServiceSearch,
  serviceCategories,
  type RawSearchParams,
} from "@/lib/search-options";

export const metadata: Metadata = { title: "Search Home Services" };

export default function ServiceSearchPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8FAFC]">
        <PageHero
          eyebrow="LOCALCONNECT / HOME SERVICES"
          title="Search home service professionals"
          description="Choose a service category and enter your city or locality."
        />
        <section className="mx-auto max-w-[1200px] px-5 py-10">
          <Suspense fallback={<Skeleton className="h-96 w-full rounded-2xl" />}>
            <ServiceSearchContent searchParams={searchParams} />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}

async function ServiceSearchContent({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const { category, location, hasInvalidFilter } = parseServiceSearch(
    await searchParams,
  );

  return (
    <>
      <form
        key={`${category}|${location}`}
        action="/services/search"
        method="GET"
        className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_1fr_auto] md:items-end"
      >
        <div className="grid gap-2">
          <Label htmlFor="category">Service category</Label>
          <NativeSelect
            id="category"
            name="category"
            defaultValue={category}
            placeholder="All home services"
            options={serviceCategories}
          />
        </div>
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
        <Button type="submit" className="h-11 bg-blue-600 px-6 text-white hover:bg-blue-700">
          <Search aria-hidden="true" /> Search
        </Button>
      </form>

      <SearchResultsEmpty
        noun="professional"
        clearHref="/services/search"
        hasInvalidFilter={hasInvalidFilter}
        filters={[
          { label: "Service", value: labelFor(serviceCategories, category) || "All home services" },
          { label: "Location", value: location || "Any location" },
        ]}
      />
    </>
  );
}
