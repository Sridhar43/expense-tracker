import { useEffect, useState } from "react";
import API from "./services/api";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/expenses");
      setExpenses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Personal Expense Tracker
        </h1>

        <ExpenseForm fetchExpenses={fetchExpenses} />

        <TotalExpense total={total} />

        <ExpenseList
          expenses={expenses}
          fetchExpenses={fetchExpenses}
        />
      </div>
    </div>
  );
}

export default App;
