import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContext';

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {
    const descriptionRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();
    const { addExpense, budgets } = useBudgets();
    function handleSubmit(e) {
        e.preventDefault();
        addExpense({
            description: descriptionRef.current.value,
            amount: amountRef.current.value,
            budgetId: budgetIdRef.current.value
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
                    <Form.Group controlId='description'>
                        <Form.Label>Description de la dépense</Form.Label>
                        <Form.Control type='text' required ref={descriptionRef}/>
                    </Form.Group>
                    <Form.Group controlId='amount'>
                        <Form.Label>Montant</Form.Label>
                        <Form.Control type='number' required ref={amountRef} min={0} step={0.01}/>
                    </Form.Group>
                    <Form.Group controlId='options'>
                        <Form.Label>Catégorie</Form.Label>
                        <Form.Select defaultValue={defaultBudgetId} required ref={budgetIdRef}>
                            <option>Hors catégorie</option>
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <div className='mt-3'>
                    <Button variant="primary" type="submit">Ajouter</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
