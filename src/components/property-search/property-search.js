"use client";

import { useState, useEffect } from "react";
import { PropertySearchForm } from "./property-search-form";
import { PropertyList } from "./property-list";
import { Loader2 } from "lucide-react";

export function PropertySearch() {
  const [properties, setProperties] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState({ city: "Mineola", state: "NY" });
  const [offset, setOffset] = useState(0);

  const fetchProperties = async (city, state, offsetNum) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/properties?city=${encodeURIComponent(city)}&state=${encodeURIComponent(
          state
        )}&offset=${offsetNum}&limit=9`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch properties");
      }

      const nextProperties = Array.isArray(data.properties) ? data.properties : [];
      setTotal(data.total || 0);
      setProperties((prev) =>
        offsetNum === 0 ? nextProperties : [...prev, ...nextProperties]
      );
    } catch (err) {
      setError(err.message || "Failed to load properties. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties("Mineola", "NY", 0);
  }, []);

  const handleSearch = (city, state) => {
    const nextQuery = {
      city: city.trim(),
      state: state.trim().toUpperCase(),
    };
    setQuery(nextQuery);
    setOffset(0);
    fetchProperties(nextQuery.city, nextQuery.state, 0);
  };

  const loadMore = () => {
    const newOffset = offset + 9;
    setOffset(newOffset);
    fetchProperties(query.city, query.state, newOffset);
  };

  const hasMore = properties.length > 0 && properties.length < total;

  return (
    <div>
      <PropertySearchForm onSearch={handleSearch} />
      <p className="mb-6 text-sm text-stone-500">
        Active homes for sale. This is separate from the{" "}
        <a
          href="https://karlaleon.kw.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pine underline-offset-4 hover:underline"
        >
          Keller Williams site
        </a>
        .
      </p>
      {error ? (
        <div className="rounded-2xl bg-red-50 p-4 text-center text-red-700">
          {error}
        </div>
      ) : (
        <>
          {isLoading && offset === 0 ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-pine" />
            </div>
          ) : (
            <>
              <PropertyList properties={properties} />
              {hasMore && (
                <div className="mt-8 pb-8 text-center">
                  <button
                    onClick={loadMore}
                    disabled={isLoading}
                    className="rounded-full bg-pine px-6 py-3 text-white hover:bg-[#14332f] disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading...
                      </span>
                    ) : (
                      "Load more"
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
