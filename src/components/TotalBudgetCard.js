import React from 'react';
import { useBudgets } from '../contexts/BudgetContext';
import BudgetCard from './BudgetCard';

export default function TotalBudgetCard() {
    const { expenses, budgets } = useBudgets();
    const amount = expenses.reduce(
        (total, expense) => total + parseFloat(expense.amount), 0
    )
    const max = budgets.reduce((total, budget) => total + budget.max, 0)
    return (
        <BudgetCard amount={amount} budgetMax={max} name="Total" gray/>
    )
}
