import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SavingsRecommendation({ income, expenses }) {
  const calculateSavings = () => {
    const remainingBudget = income - expenses;
    const emergencyFund = income * 0.1; // 10% of income for emergency fund
    const retirement = income * 0.15; // 15% of income for retirement
    const shortTermSavings = remainingBudget * 0.5; // 50% of remaining budget for short-term savings

    return {
      emergencyFund: emergencyFund.toFixed(2),
      retirement: retirement.toFixed(2),
      shortTermSavings: shortTermSavings.toFixed(2),
    };
  };

  const savings = calculateSavings();

  return (
    <Card className="mt-4 bg-gray-50 shadow-lg border border-gray-200">
      <CardHeader className="bg-[#101827] text-white p-4 rounded-t-lg">
        <CardTitle className="text-lg font-semibold">
          Savings Recommendation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700">
          Based on your income and expenses, we recommend the following savings
          plan:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li className="text-blue-600 font-semibold">
            Emergency Fund: ${savings.emergencyFund}
          </li>
          <li className="text-blue-600 font-semibold">
            Retirement: ${savings.retirement}
          </li>
          <li className="text-blue-600 font-semibold">
            Short-term Savings: ${savings.shortTermSavings}
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          <span className="font-semibold text-[#101827]">Note:</span> These are
          general recommendations. Please consult with a financial advisor for
          personalized advice.
        </p>
      </CardContent>
    </Card>
  );
}
