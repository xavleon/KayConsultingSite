import { PropertySearch } from "@/components/property-search/property-search";

export const metadata = {
  title: "Property Search",
  description:
    "Search for properties with Kay Leon's comprehensive property search tool.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Real estate
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Property search
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Search active homes for sale by city. Open a listing for the full
            details, or use the Keller Williams site for Karla&apos;s own
            inventory.
          </p>
        </header>
        <div className="mt-10">
          <PropertySearch />
        </div>
      </div>
    </main>
  );
}
