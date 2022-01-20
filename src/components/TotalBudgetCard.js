import React from 'react';
import { useBudgets } from '../contexts/BudgetContext';
import BudgetCard from './BudgetCard';

export default function TotalBudgetCard() {
    const { getBudgetExpenses } = useBudgets();

    return (
        <BudgetCard></BudgetCard>
    )
}
