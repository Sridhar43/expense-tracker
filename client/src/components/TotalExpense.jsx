function TotalExpense({ total }) {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide opacity-90">
            Total Expense
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{Number(total).toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="text-5xl">
          💰
        </div>
      </div>
    </div>
  );
}

export default TotalExpense;