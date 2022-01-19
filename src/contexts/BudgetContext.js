import React, { useContext, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetContext);
}


export const BudgetProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", []);
    const [expenses, setExpenses] = useLocalStorage("expense", []);

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId !== budgetId)
    }
    function addBudget({ name, max}) {
        setBudgets(prevBudget => {
            if (prevBudget.find(budget => budget.name === name)) {
                return prevBudget
            }
            return [...prevBudget, { id: uuidv4(), name, max }]
        })
    }
    
    function addExpense({description, amount, budgetId }) {
        setExpenses(prevExpense => {
            return [...prevExpense, { id: uuidv4(), description, amount, budgetId }]
        })
    }
    function deleteBudget({ id }) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    function deleteExpense({id}) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }
    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetContext.Provider>
    )
}