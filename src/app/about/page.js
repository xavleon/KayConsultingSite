import { Hero } from "@/components/about/hero";
import { Content } from "@/components/about/content";
import { Services } from "@/components/about/services";
export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-100">
      {" "}
      //bg-gray-100 is a tailwindcss class that contributes to dark gray color
      on top of mobile menu
      <Hero />
      <Services />
    </main>
  );
}
