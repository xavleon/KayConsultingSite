export function formatMoney(value) {
  const amount = Number.isFinite(Number(value)) ? Number(value) : 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function getSavingsSplit(monthlyIncome, totalExpenses) {
  const remaining = monthlyIncome - totalExpenses;
  return {
    remaining,
    emergencyFund: monthlyIncome * 0.1,
    retirement: monthlyIncome * 0.15,
    shortTermSavings: Math.max(0, remaining * 0.5),
  };
}

const rows = [
  {
    key: "emergencyFund",
    label: "Emergency fund",
    detail: "10% of monthly income",
  },
  {
    key: "retirement",
    label: "Retirement",
    detail: "15% of monthly income",
  },
  {
    key: "shortTermSavings",
    label: "Short-term",
    detail: "Half of what's left",
  },
];

export function SavingsRecommendation({ monthlyIncome, totalExpenses }) {
  const split = getSavingsSplit(monthlyIncome, totalExpenses);
  const hasIncome = monthlyIncome > 0;

  return (
    <div>
      <h3 className="text-lg font-semibold text-ink">A starting split</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">
        {hasIncome
          ? "A rough way to divide the month. It is an estimate, not a plan."
          : "Add a paycheck and the split will fill in."}
      </p>
      <dl className="mt-5 space-y-4">
        {rows.map((row) => (
          <div key={row.key} className="flex items-baseline justify-between gap-4">
            <div>
              <dt className="text-sm font-medium text-ink">{row.label}</dt>
              <dd className="text-xs text-stone-500">{row.detail}</dd>
            </div>
            <dd className="text-sm font-semibold text-pine">
              {hasIncome ? formatMoney(split[row.key]) : "—"}
            </dd>
          </div>
        ))}
      </dl>
      {hasIncome && split.remaining < 0 && (
        <p className="mt-5 text-sm leading-6 text-stone-600">
          This month is already short, so treat the split as a target for a
          later month.
        </p>
      )}
    </div>
  );
}
