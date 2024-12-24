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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Kay Leon Business Solutions",
    statusBarStyle: "default",
  },
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
