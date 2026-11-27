export const serviceCategories = [
  { value: "cook", label: "Cook" },
  { value: "home-and-kitchen-cleaning", label: "Home & Kitchen Cleaning" },
  { value: "washroom-cleaning", label: "Washroom Cleaning" },
  { value: "plumbing", label: "Plumbing" },
  { value: "electrician", label: "Electrician" },
  { value: "carpenter", label: "Carpenter" },
  { value: "rent-a-labour", label: "Rent a Labour" },
];

export const accommodationOptions = [
  { value: "single-room", label: "Single Room" },
  { value: "shared-room", label: "Shared Room" },
  { value: "pg", label: "PG" },
  { value: "hostel", label: "Hostel" },
  { value: "1-bhk", label: "1 BHK" },
  { value: "2-bhk", label: "2 BHK" },
  { value: "house-apartment", label: "House / Apartment" },
  { value: "commercial", label: "Commercial" },
];

export const budgetOptions = ["5000", "10000", "15000", "25000", "50000"].map(
  (value) => ({
    value,
    label: `Up to ₹${Number(value).toLocaleString("en-IN")}`,
  }),
);

/** Older slugs still used by some links on the site. */
const categoryAliases: Record<string, string> = {
  cleaning: "home-and-kitchen-cleaning",
  "home-kitchen-cleaning": "home-and-kitchen-cleaning",
  washroom: "washroom-cleaning",
  labour: "rent-a-labour",
};

export type RawSearchParams = Record<string, string | string[] | undefined>;

type Option = { value: string; label: string };

function first(value: string | string[] | undefined): string {
  return ((Array.isArray(value) ? value[0] : value) ?? "").trim();
}

function match(options: Option[], value: string): string {
  return options.some((option) => option.value === value) ? value : "";
}

export function labelFor(options: Option[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? "";
}

export function parseServiceSearch(params: RawSearchParams) {
  const rawCategory = first(params.category).toLowerCase();
  const category = match(
    serviceCategories,
    categoryAliases[rawCategory] ?? rawCategory,
  );

  return {
    category,
    location: first(params.location).slice(0, 100),
    hasInvalidFilter: rawCategory !== "" && category === "",
  };
}

export function parseBrokerSearch(params: RawSearchParams) {
  const rawType = (
    first(params.type) || first(params.accommodation)
  ).toLowerCase();
  const rawBudget = first(params.budget) || first(params.budget_max);
  const type = match(accommodationOptions, rawType);
  const budget = match(budgetOptions, rawBudget);

  return {
    location: first(params.location).slice(0, 100),
    type,
    budget,
    hasInvalidFilter:
      (rawType !== "" && type === "") || (rawBudget !== "" && budget === ""),
  };
}
