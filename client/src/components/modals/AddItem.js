import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import { Button, Modal, Form, Dropdown } from 'react-bootstrap'

const AddItem = ({ show, onHide }) => {
    const { item } = useContext(Context)
    const [info, setInfo] = useState('')

    const addInfo = () => {
        setInfo()
    }
    console.log(item)
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Сhoose type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.types.map((type) => (
                                <Dropdown.Item key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle className="mt-3">
                            Сhoose brand
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {item.brands.map((brand) => (
                                <Dropdown.Item key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        placeholder="Enter item name"
                        className="mt-3"
                    ></Form.Control>
                    <Form.Control
                        placeholder="Enter item price"
                        className="mt-3"
                        type="number"
                    ></Form.Control>
                    <Form.Control
                        placeholder="Enter item image"
                        className="mt-3"
                        type="file"
                    ></Form.Control>
                    <Button className="mt-3" variant="light">
                        Add info
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>
                    Add
                </Button>
                <Button variant="light" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddItem
