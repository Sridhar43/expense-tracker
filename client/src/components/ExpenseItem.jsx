import { useState } from "react";
import API from "../services/api";

function ExpenseItem({ expense, fetchExpenses }) {
  const [loading, setLoading] = useState(false);

  const deleteExpense = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      await API.delete(`/expenses/${expense._id}`);

      fetchExpenses();
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete expense.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-4 border border-gray-200 hover:shadow-lg transition">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-blue-600">
            ₹{Number(expense.amount).toLocaleString("en-IN")}
          </h2>

          <p className="text-gray-800 font-medium mt-1">
            {expense.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {expense.category}
            </span>

            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {new Date(expense.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <button
          onClick={deleteExpense}
          disabled={loading}
          className={`px-5 py-2 rounded-lg text-white font-medium transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;