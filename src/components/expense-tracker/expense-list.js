import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function ExpenseList({ expenses, onDelete }) {
  return (
    <Table className="mt-4 bg-gray-50 shadow-md border border-gray-200 rounded-lg">
      <TableHeader className="bg-[#101827] text-white rounded-t-lg">
        <TableRow>
          <TableHead className="text-left px-4 py-3">Expense</TableHead>
          <TableHead className="text-left px-4 py-3">Amount</TableHead>
          <TableHead className="text-left px-4 py-3 w-[50px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <TableRow
              key={expense.id}
              className="even:bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <TableCell className="px-4 py-3 text-gray-800">
                {expense.name}
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-800">
                ${parseFloat(expense.amount).toFixed(2)}
              </TableCell>
              <TableCell className="px-4 py-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-600 hover:bg-red-50"
                  onClick={() => onDelete(expense.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={3}
              className="px-4 py-3 text-center text-gray-500"
            >
              No expenses to display.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
