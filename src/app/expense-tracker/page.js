import { ExpenseTracker } from "@/components/expense-tracker/expense-tracker";

export const metadata = {
  title: "Expense Tracker & Savings Planner | Kay Leon Business Solutions",
  description:
    "Track your expenses and get personalized savings recommendations.",
};

export default function ExpenseTrackerPage() {
  return (
    <main className="text-white py-24">
      {/* Header Section */}
      <section className="bg-[#101827] text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Expense Tracker & Savings Planner
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            Simplify your finances. Track your expenses and get personalized
            savings recommendations based on your income.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Start Tracking Your Expenses
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Use our intuitive tracker to manage your spending, set savings
              goals, and take control of your financial future.
            </p>
            <ExpenseTracker />
          </div>
        </div>
      </section>
    </main>
  );
}
