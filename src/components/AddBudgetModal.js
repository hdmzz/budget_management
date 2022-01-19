import { Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContext";
export default function AddBudgetModal({ show, handleClose }) {
    const nameRef = useRef()
    const maxRef = useRef()
    const {addBudget} = useBudgets()
    
    function handleSubmit(e) {
        e.preventDefault();
        addBudget({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        })
        handleClose();
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une dépense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group onSubmit={handleSubmit}>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                    </Form.Group>
                    <Form.Group controlId="max">
                        <Form.Label>Montant Maximum</Form.Label>
                        <Form.Control ref={maxRef} type="number" min={0}
                        step={0.01} required></Form.Control>
                    </Form.Group>
                    <div>
                        <Button variant="primary" type="submit">Ajouter</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
