import { PropertySearch } from "@/components/property-search/property-search";

export const metadata = {
  title: "Property Search | Kay Leon Business Solutions",
  description:
    "Search for properties with Kay Leon's comprehensive property search tool.",
};

export default function PropertiesPage() {
  console.log();
  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Property Search
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300 mb-12">
            Find your dream property with our comprehensive search tool. Browse
            listings from Keller Williams' extensive database.
          </p>

          <PropertySearch />
        </div>
      </section>
    </main>
  );
}
