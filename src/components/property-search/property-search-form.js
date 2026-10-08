"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function PropertySearchForm({ onSearch }) {
  const [city, setCity] = useState("Mineola");
  const [state, setState] = useState("NY");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && state) {
      onSearch(city, state);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-3xl border border-stone-200 bg-white p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City
          </label>
          <Input
            id="city"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            State
          </label>
          <Input
            id="state"
            type="text"
            placeholder="Enter state (e.g., NY)"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        className="mt-4 h-12 rounded-full bg-pine px-6 text-white hover:bg-[#14332f]"
      >
        <Search className="w-4 h-4 mr-2" />
        Search Properties
      </Button>
    </form>
  );
}
