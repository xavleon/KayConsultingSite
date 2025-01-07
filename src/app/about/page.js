import { Hero } from "@/components/about/hero";
import { Content } from "@/components/about/content";
import { Services } from "@/components/about/services";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navbar Background with Gray Accent */}
      <div className="bg-gray-900 text-white pt-24">
        {/* Hero Section */}
        <Hero />
      </div>

      {/* White Section for Content and Services */}
      <div className="bg-white text-gray-900">
        <Services />
      </div>
    </main>
  );
}
