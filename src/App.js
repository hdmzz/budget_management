import { Button, Stack } from "react-bootstrap";
import  Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <>
      <Container className="mx-2">
        <Stack direction="horizontal" gap="2">
          <h1 className="me-auto">Budget</h1>
          <Button variant="primary">Ajouter un budget</Button>
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
        <BudgetCard gray name={"test1"} amount={1100} budgetMax={1000} />
      </div>
    </>
    );
}

export default App;
