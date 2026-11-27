import Link from "next/link";
import { Info, SearchX } from "lucide-react";

type SearchResultsEmptyProps = {
  filters: { label: string; value: string }[];
  hasInvalidFilter: boolean;
  noun: string;
  clearHref: string;
};

export default function SearchResultsEmpty({
  filters,
  hasInvalidFilter,
  noun,
  clearHref,
}: SearchResultsEmptyProps) {
  return (
    <div aria-live="polite">
      {hasInvalidFilter && (
        <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          A filter in this link was not recognised, so it has been ignored.
        </p>
      )}

      <dl className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <div
            key={filter.label}
            className="flex max-w-full gap-1 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs text-[#142B4A]"
          >
            <dt className="shrink-0 font-semibold">{filter.label}:</dt>
            <dd className="break-all">{filter.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
        <SearchX size={36} className="mx-auto text-blue-600" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-[#142B4A]">
          No {noun} listings to show yet
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          Listings are not connected to a data source yet, so these filters
          cannot return results. This does not mean there are no {noun}s in
          your area.
        </p>
        <Link
          href={clearHref}
          className="mt-6 inline-flex rounded-lg bg-[#142B4A] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Clear filters
        </Link>
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs text-slate-500">
        <Info size={15} className="mt-px shrink-0 text-teal-600" aria-hidden="true" />
        Demo interface: no sample or made-up profiles are displayed.
      </p>
    </div>
  );
}
