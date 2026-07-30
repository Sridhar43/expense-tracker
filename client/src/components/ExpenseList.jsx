import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, fetchExpenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-xl p-8 text-center mt-6">
        <div className="text-5xl mb-4">💰</div>

        <h2 className="text-2xl font-bold text-gray-700">
          No Expenses Found
        </h2>

        <p className="text-gray-500 mt-2">
          Start by adding your first expense using the form above.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Expense History
      </h2>

      <div className="space-y-4">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense._id}
            expense={expense}
            fetchExpenses={fetchExpenses}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;