"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { ExpenseList } from "./expense-list";
import { SavingsRecommendation } from "./savings-recommendation";

export function ExpenseTracker() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: "", amount: "" });
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);

  useEffect(() => {
    const total = expenses.reduce(
      (sum, expense) => sum + parseFloat(expense.amount),
      0
    );
    setTotalExpenses(total);
    setRemainingBudget(income ? parseFloat(income) - total : 0);
  }, [expenses, income]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newExpense.name && newExpense.amount) {
      setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
      setNewExpense({ name: "", amount: "" });
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-50 shadow-lg border border-gray-200 rounded-lg">
      <CardHeader className="bg-[#101827] text-white p-6 rounded-t-lg">
        <CardTitle className="text-3xl font-bold text-center">
          Expense Tracker & Savings Planner
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Section: Add Expenses */}
          <div>
            <Label htmlFor="income" className="text-gray-700 font-semibold">
              Bi-weekly Paycheck
            </Label>
            <Input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Enter your bi-weekly income"
              className="mt-2 ml-2 bg-gray-100 border-gray-300 text-gray-800 w-full md:w-1/2"
            />

            <form onSubmit={handleAddExpense} className="mt-6">
              <Label
                htmlFor="expenseName"
                className="text-gray-700 font-semibold"
              >
                New Expense
              </Label>
              <div className="flex flex-wrap gap-2 mt-2 text-black">
                <Input
                  id="expenseName"
                  type="text"
                  value={newExpense.name}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, name: e.target.value })
                  }
                  placeholder="Expense name"
                  className="flex-1 bg-gray-100 border-gray-300 "
                />
                <Input
                  type="number"
                  value={newExpense.amount}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, amount: e.target.value })
                  }
                  placeholder="Amount"
                  className="flex-1 bg-gray-100 border-gray-300"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-[#101827] text-white hover:bg-blue-600"
                >
                  <PlusCircle className="h-5 w-5" />
                </Button>
              </div>
            </form>

            {/* Expense List */}
            <div className="mt-6">
              <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
            </div>
          </div>

          {/* Right Section: Summary & Recommendations */}
          <div>
            <Card className="bg-blue-50 border border-blue-100 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#101827]">
                  Summary
                </h3>
                <p className="text-gray-700">
                  Monthly Income:{" "}
                  <span className="font-semibold text-blue-600">
                    ${income ? parseFloat(income * 2).toFixed(2) : ""}
                  </span>
                </p>
                <p className="text-gray-700">
                  Total Expenses:{" "}
                  <span className="font-semibold text-blue-600">
                    ${totalExpenses ? totalExpenses.toFixed(2) : ""}
                  </span>
                </p>
                <div>
                  <span
                    className={`font-bold mt-4 ${
                      remainingBudget >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {remainingBudget >= 0
                      ? `Remaining Budget: $${remainingBudget.toFixed(2)}`
                      : `Over Budget: $${remainingBudget.toFixed(2)}`}
                  </span>
                  {remainingBudget < 0 && (
                    <p className="text-red-600 mt-2">
                      You should{" "}
                      <a href="tel:+9177672870">
                        <span>
                          {" "}
                          <u>call me </u>{" "}
                        </span>
                      </a>{" "}
                      at your earliest convenience. <br />
                      We can develop a game plan.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Savings Recommendation */}
            <div className="mt-6">
              <SavingsRecommendation
                income={parseFloat(income) || 0}
                expenses={totalExpenses || 0}
              />
            </div>

            {/* Print Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => window.print()}
                className="p-2 bg-blue-600 text-white rounded"
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
