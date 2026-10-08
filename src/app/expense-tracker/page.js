import { Hero } from "@/components/expense-tracker/hero";
import { ExpenseTracker } from "@/components/expense-tracker/expense-tracker";

export const metadata = {
  title: "Expense Tracker",
};

export default function ExpenseTrackerPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Hero />
        <div className="mt-10">
          <ExpenseTracker />
        </div>
      </div>
    </main>
  );
}
