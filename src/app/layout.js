import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallButton } from "@/components/mobile-call-button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Kay Leon Bookkeeping & Realty",
    template: "%s | Kay Leon Bookkeeping & Realty",
  },
  description:
    "Professional bookkeeping and real estate services in Long Island, NY",
  keywords: [
    "bookkeeping",
    "real estate",
    "Long Island",
    "financial services",
    "property management",
  ],
  authors: [{ name: "Kay Leon" }],
  creator: "Kay Leon",
  metadataBase: new URL("https://kaybookkeeping.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaybookkeeping.com",
    title: "Kay Leon Bookkeeping & Realty",
    description:
      "Professional bookkeeping and real estate services in Long Island, NY",
    siteName: "Kay Leon Bookkeeping & Realty",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
