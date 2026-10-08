import { Hero } from "@/components/mortgage-calculator/hero";
import { MortgageCalculator } from "@/components/mortgage-calculator/calculator";

export const metadata = {
  title: "Mortgage Calculator",
};

export default function MortgageCalculatorPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Hero />
        <div className="mt-10">
          <MortgageCalculator />
        </div>
      </div>
    </main>
  );
}
