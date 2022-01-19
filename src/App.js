import { Button, Stack } from "react-bootstrap";
import  Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";
import { useBudgets } from "./contexts/BudgetContext";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets } = useBudgets();

  /* function openAddExpenseModal() {
    setShowAddBudgetModal(true)
  } */
  return (
    <>
      <Container className="mx-2">
        <Stack direction="horizontal" gap="2">
          <h1 className="me-auto">Budget</h1>
          <Button variant="primary" onClick={() => {setShowAddBudgetModal(true)}}>Ajouter un budget</Button>
          <Button variant="outline-primary">Ajouter une dépense</Button>
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
          return <BudgetCard gray name={budget.name} amount={0} budgetMax={budget.max} />
        })}
      </div>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    </>
    );
}

export default App;
