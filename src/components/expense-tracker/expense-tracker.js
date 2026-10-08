"use client";

import { useState } from "react";
import { ExpenseList } from "./expense-list";
import {
  SavingsRecommendation,
  formatMoney,
  getSavingsSplit,
} from "./savings-recommendation";

export function ExpenseTracker() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const paycheck = income ? parseFloat(income) : 0;
  const monthlyIncome = paycheck ? (paycheck * 26) / 12 : 0;
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const remainingBudget = monthlyIncome - totalExpenses;
  const spentShare =
    monthlyIncome > 0 ? Math.round((totalExpenses / monthlyIncome) * 100) : null;
  const split = getSavingsSplit(monthlyIncome, totalExpenses);
  const preparedOn = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const addExpense = () => {
    const amount = parseFloat(expenseAmount);
    if (!expenseName.trim() || !Number.isFinite(amount) || amount <= 0) return;
    setExpenses([
      ...expenses,
      { id: Date.now(), name: expenseName.trim(), amount },
    ]);
    setExpenseName("");
    setExpenseAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="expense-screen">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-stone-200 bg-white p-6">
              <label
                htmlFor="paycheck"
                className="text-sm font-medium text-ink"
              >
                Bi-weekly paycheck
              </label>
              <input
                id="paycheck"
                type="number"
                min="0"
                step="0.01"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="2,500"
                className="mt-3 h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine"
              />
              <p className="mt-3 text-sm text-stone-500">
                {paycheck
                  ? `About ${formatMoney(monthlyIncome)} a month, from 26 paychecks a year.`
                  : "A month is estimated as this paycheck × 26 ÷ 12."}
              </p>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-ink">Add an expense</h2>
              <form
                className="mt-4 flex flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  addExpense();
                }}
              >
                <input
                  type="text"
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                  placeholder="Rent, groceries…"
                  aria-label="Expense name"
                  className="h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine sm:flex-1"
                />
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  placeholder="0.00"
                  aria-label="Expense amount"
                  className="h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine sm:w-36"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-pine px-6 text-sm font-medium text-white hover:bg-[#14332f]"
                >
                  Add
                </button>
              </form>

              <div className="mt-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-sm font-medium text-ink">This month</h3>
                  <span className="text-sm text-stone-500">
                    {formatMoney(totalExpenses)}
                  </span>
                </div>
                <ExpenseList expenses={expenses} onDelete={deleteExpense} />
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <section className="rounded-3xl bg-pine p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e4d3b4]">
                {remainingBudget >= 0 ? "Left this month" : "Short this month"}
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                {formatMoney(Math.abs(remainingBudget))}
              </p>
              {spentShare != null && (
                <div className="mt-5">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-[#e4d3b4]"
                      style={{ width: `${Math.min(spentShare, 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-white/80">
                    Spending is {spentShare}% of monthly income.
                  </p>
                </div>
              )}
              <dl className="mt-6 space-y-2 border-t border-white/15 pt-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/75">Monthly income</dt>
                  <dd>{formatMoney(monthlyIncome)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/75">Expenses</dt>
                  <dd>{formatMoney(totalExpenses)}</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-white p-6">
              <SavingsRecommendation
                monthlyIncome={monthlyIncome}
                totalExpenses={totalExpenses}
              />
            </section>

            <button
              type="button"
              onClick={() => window.print()}
              className="h-12 w-full rounded-full border border-stone-300 bg-white text-sm font-medium text-ink hover:bg-paper"
            >
              Print snapshot
            </button>
          </aside>
        </div>
      </div>

      <article className="expense-print hidden">
        <p className="print-kicker">Kay Leon · Long Island</p>
        <h1 className="print-title">Monthly expense snapshot</h1>
        <p className="print-date">Prepared {preparedOn}</p>

        <div className="print-rule" />

        <p className="print-label">
          {remainingBudget >= 0 ? "Left this month" : "Short this month"}
        </p>
        <p className="print-amount">{formatMoney(Math.abs(remainingBudget))}</p>
        <p className="print-sub">
          {formatMoney(monthlyIncome)} in income
          {spentShare != null ? ` · spending is ${spentShare}%` : ""}
          {" · "}
          {formatMoney(totalExpenses)} in expenses
        </p>

        <h2>Income</h2>
        <table>
          <tbody>
            <tr>
              <td>Bi-weekly paycheck</td>
              <td>{paycheck ? formatMoney(paycheck) : "—"}</td>
            </tr>
            <tr>
              <td>Estimated month</td>
              <td>{formatMoney(monthlyIncome)}</td>
            </tr>
          </tbody>
        </table>
        <p className="print-note">26 paychecks a year, divided into 12 months.</p>

        <h2>Expenses</h2>
        {expenses.length > 0 ? (
          <table>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.name}</td>
                  <td>{formatMoney(expense.amount)}</td>
                </tr>
              ))}
              <tr className="print-total">
                <td>Total</td>
                <td>{formatMoney(totalExpenses)}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="print-note">No expenses listed.</p>
        )}

        <h2>A starting split</h2>
        <table>
          <tbody>
            <tr>
              <td>Emergency fund · 10% of income</td>
              <td>{formatMoney(split.emergencyFund)}</td>
            </tr>
            <tr>
              <td>Retirement · 15% of income</td>
              <td>{formatMoney(split.retirement)}</td>
            </tr>
            <tr>
              <td>Short-term · half of what&apos;s left</td>
              <td>{formatMoney(split.shortTermSavings)}</td>
            </tr>
          </tbody>
        </table>
        {remainingBudget < 0 && (
          <p className="print-note">
            This month is already short, so the split is a target for later,
            not cash on hand.
          </p>
        )}

        <p className="print-signoff">
          Estimates only, not financial advice.
          <br />
          keybykay.com
        </p>
      </article>
    </>
  );
}
