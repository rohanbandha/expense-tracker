import React, { useState, useEffect } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('Salary');
  const [amount, setAmount] = useState('');

  const categories = {
    income: ['Salary', 'Bonus', 'Freelance', 'Other'],
    expense: ['Rent', 'Food', 'Shopping', 'Bills', 'Other']
  };

  useEffect(() => {
    setCategory(categories[type][0]);
  }, [type]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      type,
      category,
      amount: parseFloat(amount)
    };

    onAddTransaction(newTransaction);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded w-full md:w-auto"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-full md:w-auto"
      >
        {categories[type].map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="border p-2 rounded w-full md:w-auto"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default TransactionForm;
