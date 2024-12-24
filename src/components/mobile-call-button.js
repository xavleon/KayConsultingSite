"use client";

import { Phone } from "lucide-react";

export function MobileCallButton() {
  return (
    <a
      href="tel:+1-917-767-2870"
      className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 hover:bg-blue-700 text-white py-4 flex items-center justify-center gap-2 lg:hidden transition-colors"
      aria-label="Call Us Now"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold">Call Us Now</span>
    </a>
  );
}
