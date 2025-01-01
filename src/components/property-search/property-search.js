"use client";

import { useState, useEffect } from "react";
import { PropertySearchForm } from "./property-search-form";
import { PropertyList } from "./property-list";
import { Loader2 } from "lucide-react";

export function PropertySearch() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const fetchProperties = async (
    city = "New York",
    state = "NY",
    offsetNum = 0
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/rentcast-properties?city=${encodeURIComponent(
          city
        )}&state=${state}&offset=${offsetNum}&limit=10`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }

      const data = await response.json();

      if (data && Array.isArray(data)) {
        setProperties((prevProperties) =>
          offsetNum === 0 ? data : [...prevProperties, ...data]
        );
      } else {
        setError("No properties found for this location");
      }
    } catch (err) {
      setError("Failed to load properties. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSearch = (city, state) => {
    setOffset(0);
    fetchProperties(city, state, 0);
  };

  const loadMore = () => {
    const newOffset = offset + 10;
    setOffset(newOffset);
    fetchProperties(undefined, undefined, newOffset);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <PropertySearchForm onSearch={handleSearch} />
      {error ? (
        <div className="text-center text-red-500 p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      ) : (
        <>
          {isLoading && offset === 0 ? (
            <div className="flex justify-center items-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          ) : (
            <>
              <PropertyList properties={properties} />
              {properties.length > 0 && (
                <div className="mt-8 text-center pb-8">
                  <button
                    onClick={loadMore}
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading...
                      </div>
                    ) : (
                      "Load More Properties"
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
