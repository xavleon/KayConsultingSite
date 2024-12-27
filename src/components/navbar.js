"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Mortgage Calculator", href: "/mortgage-calculator" },
  //   { name: "FAQs", href: "/faqs" },
  // { name: "Contact", href: "#contact", isScroll: true }, is for onscroll contact same screen
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback((open) => {
    if (open === false) {
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen((prev) => !prev);
    }
  }, []);
  //The bottom up to 40 is for onscroll contact same screen

  //   const handleNavClick = (e, item, isMobile = false) => {
  //     if (item.isScroll) {
  //       e.preventDefault();
  //       const element = document.getElementById("contact");
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //     if (isMobile) {
  //       setMobileMenuOpen(false);
  //     }
  //   };

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-2xl font-bold text-blue-600"
            >
              <span className="flex flex-col">
                <span>Karla Leon</span>
                <span className="text-sm font-medium text-gray-600">
                  Bookkeeping • Real Estate • Business Automation
                </span>
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-600"
              onClick={() => toggleMobileMenu()}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors"
                // onClick={(e) => handleNavClick(e, item)} // for onscroll contact same screen
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              {/* Book a Consultation */}
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - rendered outside of header */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/25"
          aria-hidden="true"
          onClick={() => toggleMobileMenu(false)}
        />

        {/* Mobile menu panel */}
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
                <span>Karla Leon</span>
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  //   onClick={(e) => handleNavClick(e, item, true)} // for onscroll contact same screen
                  onClick={() => toggleMobileMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t">
              {/* <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white"> */}
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold"
                onClick={() => toggleMobileMenu(false)}
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
