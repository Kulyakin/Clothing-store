import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createType, deleteType } from '../../http/itemAPI'

const AddType = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    const deleteType = () => {
        deleteType({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new type
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
                <Button variant="light" onClick={addType}>
                    Add
                </Button>
                <Button variant="light" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddType
