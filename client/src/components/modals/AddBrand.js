import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { createBrand } from '../../http/itemAPI'

const AddBrand = ({ show, onHide }) => {
    const [value,setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={key => setValue(key.target.value)}
                        placeholder={'Enter type name'}
                    ></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={addBrand}>
                    Add
                </Button>
                <Button variant="light" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddBrand
