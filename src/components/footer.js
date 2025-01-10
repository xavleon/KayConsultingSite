import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Vertical Divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-600"></div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-y-8 gap-x-16">
          {/* Column 1: Business Information */}
          <div className="text-left lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Kay Leon Business Solutions
            </h3>
            <p className="text-gray-300 w-2/3">
              Professional bookkeeping, real estate services, and business
              automation solutions for individuals, entrepreneurs, and small
              businesses.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mortgage-calculator"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Mortgage Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-left lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300">Long Island, NY</p>
              <p className="text-gray-300">
                Phone:{" "}
                <a
                  href="tel:9179922528"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  (917) 992-2528
                </a>
              </p>
              <p className="text-gray-300">
                Email:{" "}
                <a
                  href="mailto:info@keybykay.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors "
                >
                  info@keybykay.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 pb-16 md:pb-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kay Leon Business Solutions. All
            rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Website developed by{" "}
            <Link
              href="https://excilify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Excilify Inc.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
