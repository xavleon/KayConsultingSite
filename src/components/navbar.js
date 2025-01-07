"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Financial Tools",
    submenu: [
      { name: "Mortgage Calculator", href: "/mortgage-calculator" },
      { name: "Expense Tracker", href: "/expense-tracker" },
      { name: "Document Submission", href: "/document-submission" },
    ],
  },
  {
    name: "Property Search",
    href: "https://karlaleon.kw.com/",
    external: true, // Flag for opening in a new tab
  },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMobileMenu = useCallback((open) => {
    if (open === false) {
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen((prev) => !prev);
    }
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (name) => {
    setDropdownOpen((prev) => (prev === name ? null : name)); // Toggle dropdown
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const handleMobileDropdownToggle = () => {
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-12">
          {/* Logo and Branding */}
          <div className="flex items-center lg:flex-1 space-x-4 pr-8">
            <img
              src="/logo3.png" // Replace with the actual path to your logo
              alt="Kay Services Logo"
              className="h-16 w-16 rounded-md" // Keeping size as 14 with subtle rounding
            />
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-2xl font-bold text-blue-600"
            >
              <span className="flex flex-col">
                <span>Kay Services</span>
                <span className="text-sm font-medium text-gray-600">
                  Bookkeeping • Real Estate • Business Automation
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-600"
              onClick={() => toggleMobileMenu()}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative">
                  <button
                    className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    {item.name}
                    <span className="ml-2">
                      {dropdownOpen === item.name ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </span>
                  </button>
                  {dropdownOpen === item.name && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={closeDropdown}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/25"
          onClick={() => toggleMobileMenu(false)}
        />

        <div
          className={`fixed inset-x-0 top-0 w-full bg-white overflow-hidden transition-all duration-300 ease-in-out`}
          style={{
            height: "100vh",
            clipPath: mobileMenuOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          }}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b">
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-2xl font-bold text-blue-600"
              onClick={() => toggleMobileMenu(false)}
            >
              <span className="flex flex-col">
                <span>Kay Leon</span>
                <span className="text-sm font-medium text-gray-600">
                  Bookkeeping • Real Estate • Business Automation
                </span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => toggleMobileMenu(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 px-6">
            <div className="space-y-1">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      onClick={handleMobileDropdownToggle}
                      className="flex w-full justify-between items-center text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                      <span>
                        {mobileDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                      </span>
                    </button>
                    {mobileDropdownOpen && (
                      <div className="mt-2 space-y-2 pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-gray-700 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <div className="mt-6 pt-6 border-t">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
