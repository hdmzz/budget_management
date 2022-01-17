import React, { useContext } from "react";
import { v4 as uuid } from "uuid";

const BudgetContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetContext);
}


export const BudgetProvider = ({ children }) => {
    
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = uEeState([])

    function getBudgetExpenses() {
    
    }

    function addExpense() {

    }

    function addBudget() {

    }

    function deleteBudget() {

    }

    function deleteExpense() {

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