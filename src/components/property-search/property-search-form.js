"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function PropertySearchForm({ onSearch }) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && state) {
      onSearch(city, state);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 bg-white p-6 rounded-lg shadow-md"
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
            className="w-full"
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
            className="w-full"
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full md:w-auto mt-4 bg-blue-600 hover:bg-blue-700"
      >
        <Search className="w-4 h-4 mr-2" />
        Search Properties
      </Button>
    </form>
  );
}
