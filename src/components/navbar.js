"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Tools",
    submenu: [
      { name: "Mortgage Calculator", href: "/mortgage-calculator" },
      { name: "Expense Tracker", href: "/expense-tracker" },
      { name: "Document Submission", href: "/document-submission" },
    ],
  },
  {
    name: "Property Search",
    href: "/properties",
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

  useEffect(() => {
    if (!dropdownOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownOpen(null);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setDropdownOpen(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dropdownOpen]);

  const handleDropdownToggle = (name) => {
    setDropdownOpen((prev) => (prev === name ? null : name));
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const handleMobileDropdownToggle = () => {
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-stone-200/80 bg-paper/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
          <div className="flex items-center gap-3 lg:flex-1">
            <img
              src="/logo3.png"
              alt=""
              className="h-10 w-10 rounded-md object-cover"
            />
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-ink"
            >
              Kay Leon
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ink"
              onClick={() => toggleMobileMenu()}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-4 xl:gap-x-6">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative dropdown-container">
                  <button
                    type="button"
                    className="flex items-center py-2 text-sm font-medium text-stone-600 transition-colors hover:text-pine"
                    aria-expanded={dropdownOpen === item.name}
                    aria-haspopup="true"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ease-out ${
                        dropdownOpen === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    inert={dropdownOpen === item.name ? undefined : true}
                    aria-hidden={dropdownOpen === item.name ? undefined : true}
                    className={`absolute left-0 top-full z-50 mt-2 w-56 origin-top rounded-2xl border border-stone-200 bg-white py-2 shadow-[0_18px_40px_-24px_rgba(28,25,23,0.55)] transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      dropdownOpen === item.name
                        ? "visible translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none invisible -translate-y-2 scale-95 opacity-0"
                    }`}
                  >
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        style={{
                          transitionDelay:
                            dropdownOpen === item.name
                              ? `${index * 45}ms`
                              : "0ms",
                        }}
                        className={`block px-4 py-2.5 text-sm text-stone-700 transition-all duration-200 hover:bg-paper hover:text-pine ${
                          dropdownOpen === item.name
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-0"
                        }`}
                        onClick={closeDropdown}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="py-2 text-sm font-medium text-stone-600 transition-colors hover:text-pine"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              asChild
              className="rounded-full bg-pine px-5 text-white hover:bg-[#14332f]"
            >
              <Link href="/contact">Book a consultation</Link>
            </Button>
          </div>
        </nav>
      </header>

      <div
        inert={mobileMenuOpen ? undefined : true}
        aria-hidden={mobileMenuOpen ? undefined : true}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="fixed inset-0 bg-ink/30"
          onClick={() => toggleMobileMenu(false)}
        />

        <div
          className="fixed inset-x-0 top-0 w-full overflow-hidden bg-paper transition-all duration-300 ease-in-out"
          style={{
            height: "100vh",
            clipPath: mobileMenuOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          }}
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-ink"
              onClick={() => toggleMobileMenu(false)}
            >
              Kay Leon
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-ink"
              onClick={() => toggleMobileMenu(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 px-6 pb-28">
            <div className="space-y-1">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={handleMobileDropdownToggle}
                      aria-expanded={mobileDropdownOpen}
                      className="flex w-full items-center justify-between py-3 text-base font-medium text-ink"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ease-out ${
                          mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        mobileDropdownOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="mb-2 space-y-1 border-l border-stone-300 pl-4">
                          {item.submenu.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              style={{
                                transitionDelay: mobileDropdownOpen
                                  ? `${index * 40}ms`
                                  : "0ms",
                              }}
                              className={`block py-2 text-sm text-stone-600 transition-all duration-300 ${
                                mobileDropdownOpen
                                  ? "translate-y-0 opacity-100"
                                  : "-translate-y-1 opacity-0"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-base font-medium text-ink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-base font-medium text-ink"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <div className="mt-6 border-t border-stone-200 pt-6">
              <Button
                asChild
                className="h-12 w-full rounded-full bg-pine text-white hover:bg-[#14332f]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/contact">Book a consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
