import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileCallButton } from "@/components/mobile-call-button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Kay Leon Business Solutions",
    template: "%s | Kay Leon Business Solutions",
  },
  description:
    "Professional bookkeeping, real estate services, and business automation solutions in Long Island, NY",
  keywords: [
    "bookkeeping",
    "real estate",
    "business automation",
    "Long Island",
    "financial services",
    "property management",
  ],
  authors: [{ name: "Kay Leon" }],
  creator: "Kay Leon",
  metadataBase: new URL("https://keybykay.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keybykay.com",
    title: "Kay Leon Business Solutions",
    description:
      "Professional bookkeeping, real estate services, and business automation solutions in Long Island, NY",
    siteName: "Kay Leon Business Solutions",
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
