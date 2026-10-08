import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Bath, Bed, Home } from "lucide-react";

export function PropertyCard({ property }) {
  const formatPrice = (price) => {
    if (price == null) return "Price unavailable";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const body = (
    <>
      <div className="relative aspect-[4/3] bg-stone-100">
        {property.imgSrc ? (
          <Image
            src={property.imgSrc}
            alt={property.address || "Property"}
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-stone-400">
            No photo
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-ink">
          {property.address}
        </h3>
        <p className="mb-3 flex items-center text-sm text-stone-500">
          <Home className="mr-1 h-4 w-4" />
          {property.city}, {property.state}
        </p>
        <p className="mb-4 text-2xl font-semibold text-pine">
          {formatPrice(property.price)}
        </p>
        <div className="grid grid-cols-3 gap-2 text-sm text-stone-600">
          <span className="flex items-center">
            <Bed className="mr-1 h-4 w-4" />
            {property.bedrooms ?? "—"} bd
          </span>
          <span className="flex items-center">
            <Bath className="mr-1 h-4 w-4" />
            {property.bathrooms ?? "—"} ba
          </span>
          <span>
            {property.squareFootage
              ? `${Number(property.squareFootage).toLocaleString()} sf`
              : "— sf"}
          </span>
        </div>
      </CardContent>
    </>
  );

  return (
    <Card className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
      {property.href ? (
        <a href={property.href} target="_blank" rel="noopener noreferrer">
          {body}
        </a>
      ) : (
        body
      )}
    </Card>
  );
}
