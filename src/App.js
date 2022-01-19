import { Button, Stack } from "react-bootstrap";
import  Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import { useState } from "react";
import { useBudgets } from "./contexts/BudgetContext";

function App() {
  //show modals 
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  //show expense modal with the budget id
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] = useState()
  
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setShowAddExpenseModalBudgetId(budgetId)
  } 
  return (
    <>
      <Container className="mx-2">
        <Stack direction="horizontal" gap="2">
          <h1 className="me-auto">Budget</h1>
          <Button variant="primary" onClick={() => {setShowAddBudgetModal(true)}}>Ajouter un budget</Button>
          <Button variant="outline-primary" onClick={() => openAddExpenseModal()}>Ajouter une dépense</Button>
        </Stack>
      </Container>
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
        alignItems: "flex-end"
      }}>
        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount, 0
          )
          return (
            <BudgetCard 
            gray 
            name={budget.name} 
            amount={amount} 
            budgetMax={budget.max} 
            key={budget.id}
            onAddExpenseClick={() => openAddExpenseModal(budget.id)}
            />
          )
        })}
      </div>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
      <AddExpenseModal show={showAddExpenseModal} handleClose={() =>setShowAddExpenseModal(false)} defaultBudgetId={showAddExpenseModalBudgetId}/>
    </>
    );
}

export default App;
