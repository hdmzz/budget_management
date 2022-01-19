import React from 'react'
import { Form, Modal } from 'react-bootstrap'

export default function AddExpenseModal({ show, handleclose }) {
    return (
        <Modal show={show} onHide={handleclose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une dépense</Modal.Title>
                </Modal.Header>
            </Form>
        </Modal>
    )
}
