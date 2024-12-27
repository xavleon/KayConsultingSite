import { Hero } from "@/components/mortgage-calculator/hero";
import { MortgageCalculator } from "@/components/mortgage-calculator/calculator";

export const metadata = {
  title: "Mortgage Calculator",
};

export default function MortgageCalculatorPage() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <MortgageCalculator />
        </div>
      </section>
    </main>
  );
}
