"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Financial Tools",
    submenu: [
      {
        name: "Mortgage Calculator",
        href: "/financial-tools/mortgage-calculator",
      },
      { name: "Expense Tracker", href: "/financial-tools/expense-tracker" },
      {
        name: "Document Submission",
        href: "/financial-tools/document-submission",
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Brand */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-2xl font-bold text-blue-600"
          >
            <span className="flex flex-col">
              <span>Karla Leon</span>
              <span className="text-sm font-medium text-gray-600">
                Bookkeeping · Real Estate · Business Automation
              </span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors">
                  {item.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={8} align="start">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem asChild key={subItem.name}>
                      <Link href={subItem.href} className="block px-4 py-2">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact">
            <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
              Book a Consultation
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
