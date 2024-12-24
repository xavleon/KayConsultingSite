import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Kay Leon Business Solutions
            </h3>
            <p className="text-gray-300">
              Professional bookkeeping, real estate services, and business
              automation solutions for individuals, entrepreneurs, and small
              businesses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Quick Links
            </h3>
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
                  href="/faq"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  FAQs
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
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300">Long Island, NY</p>
              <p className="text-gray-300">Phone: (516) 123-4567</p>
              <p className="text-gray-300">Email: info@keybykay.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center space-y-2">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kay Leon Business Solutions. All
            rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
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
