"use client"; // Add this at the top of the file

import React, { useState } from "react";

export function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full text-left p-4 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

export function AccordionTrigger({ children, className }) {
  return (
    <button
      className={`w-full text-left p-4 font-semibold focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export function AccordionContent({ children, className }) {
  return <div className={`p-4 text-gray-700 ${className}`}>{children}</div>;
}
export function AccordionItem({ children, value, className }) {
  return (
    <div className={`border-b ${className}`} data-value={value}>
      {children}
    </div>
  );
}
