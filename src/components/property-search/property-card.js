import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Bath, Bed, Home } from "lucide-react";

export function PropertyCard({ property }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] relative">
        <Image
          src={property.imgSrc || "/placeholder.svg?height=400&width=600"}
          alt={property.address || "Property"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {property.address}
          </h3>
          <div className="flex items-center text-sm text-gray-500">
            <Home className="h-4 w-4 mr-1" />
            <span>
              {property.city}, {property.state}
            </span>
          </div>
        </div>

        <p className="text-2xl font-bold text-blue-600 mb-4">
          {formatPrice(property.price)}
        </p>

        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms || "N/A"} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms || "N/A"} Baths</span>
          </div>
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span>{property.squareFootage || "N/A"} sq ft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
