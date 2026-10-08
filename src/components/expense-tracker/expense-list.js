import { Trash2 } from "lucide-react";
import { formatMoney } from "./savings-recommendation";

export function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <p className="rounded-2xl bg-paper px-4 py-8 text-center text-sm text-stone-500">
        Nothing listed yet. Add rent, groceries, or whatever repeats each month.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-stone-200">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex items-center gap-3 py-3">
          <span className="min-w-0 flex-1 truncate text-sm text-ink">
            {expense.name}
          </span>
          <span className="text-sm font-medium text-ink">
            {formatMoney(expense.amount)}
          </span>
          <button
            type="button"
            onClick={() => onDelete(expense.id)}
            className="rounded-full p-2 text-stone-400 transition-colors hover:bg-stone-100 hover:text-ink"
            aria-label={`Remove ${expense.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </li>
      ))}
    </ul>
  );
}
