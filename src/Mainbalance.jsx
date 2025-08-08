import React, { useState } from "react";
import TransactionForm from "./TransactionForm";
export default function Mainbalance () {
    const [transactions, setTransactions] = useState([]);
    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    }
    const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)
    const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)
    const balance =income-expense;
    return (
        <div className="bg-white p-6 rounded shadow">
            <TransactionForm onAddTransaction={handleAddTransaction} />

            <h2 className="text-xl font-semibold mt-4 mb-4">Balance: <span className="text-green-600">${balance.toFixed(2)}</span></h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-medium mb-2">Income</h3>
                    <table className="w-full text-left border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border-b">Category</th>
                                <th className="p-2 border-b">Amount ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {transactions
                            .filter(t => t.type === 'income')
                            .map(t => (
                            <tr key={t.id}>
                                <td className="p-2 border-b">{t.category}</td>
                                <td className="p-2 border-b">{t.amount.toFixed(2)}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-2">Expenses</h3>
                    <table className="w-full text-left border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border-b">Category</th>
                                <th className="p-2 border-b">Amount ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions
                            .filter(t => t.type === 'expense')
                            .map(t => (
                            <tr key={t.id}>
                                    <td className="p-2 border-b">{t.category}</td>
                                    <td className="p-2 border-b">{t.amount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    )
}