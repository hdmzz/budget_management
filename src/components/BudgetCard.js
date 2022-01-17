import React from 'react';
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap';
import { currencyFormater } from '../utils';

export default function BudgetCard({ name, amount, budgetMax, gray }) {
    const classNames = [];
    if (amount > budgetMax) {
        classNames.push('bg-danger', 'bg-opacity-10');
    } else if (gray) {
        classNames.push('bg-light');
    }
    return (
        <Card className={classNames.join(' ')}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between fw-normal mb-3'>
                    <div > {name} </div>
                    <div> {currencyFormater.format(amount)} 
                        <span className='text-muted ms-1'>
                            / {currencyFormater.format(budgetMax)} 
                        </span>
                    </div>
                </Card.Title>
                <ProgressBar variant={getVariantColor(amount, budgetMax)}
                min={0}
                max={budgetMax}
                now={amount}/>
                <Stack direction='horizontal' gap={3} className='mt-3'>
                    <Button variant='outline-primary' className='ms-auto'>Ajouter une dépense</Button>
                    <Button variant='outline-secondary'>Voir les dépenses</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

function getVariantColor(amount, budgetMax) {
    const ratio = amount/budgetMax;
    if (ratio < 0.5)return "primary";
    if (ratio < 0.75) return "warning";
    return "danger";
}