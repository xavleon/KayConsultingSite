import { Hero } from "@/components/about/hero";
import { Services } from "@/components/about/services";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <Services />
    </main>
  );
}
