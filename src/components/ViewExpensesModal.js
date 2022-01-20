import React from 'react';
import { Modal, Button, Stack } from "react-bootstrap";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContext';
import { currencyFormater } from '../utils';

export default function ViewExpensesModal({ budgetId, handleClose }) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();
    const expenses = getBudgetExpenses(budgetId);
    const budget = budgets.find(b => b.id === budgetId);
    return (
        <Modal show={budgetId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction='horizontal' gap={2}>
                        <div>Dépenses - {budget?.name}</div>
                        {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                            <Button 
                                onClick={() => {
                                    deleteBudget(budget)
                                    handleClose()
                                }}
                                variant='outline-danger'
                            >
                                Supprimer
                            </Button>)}
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction='vertical' gap={3}>
                    {expenses.map(expense => (
                        <Stack direction='horizontal' gap={2} key={expense.id}>
                            <div className='me-auto fs-4'>{expense.description}</div>
                            <div className='fs-5'>{currencyFormater.format(expense.amount)}</div>
                            <Button onClick={() => {
                                console.log(expense.id);
                                deleteExpense(expense)
                            }}
                            variant='outline-danger' size='sm'>
                                Supprimer cette dépense
                            </Button>
                        </Stack>
                    ))}
                </Stack>
            </Modal.Body>
        </Modal>

    )
}
