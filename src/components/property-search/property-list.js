import { PropertyCard } from "./property-card";

export function PropertyList({ properties }) {
  if (!properties.length) {
    return (
      <div className="text-center text-gray-500 py-8">
        No properties found. Try adjusting your search criteria.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.property_id} property={property} />
      ))}
    </div>
  );
}
