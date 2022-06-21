import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../index'
import { createItem, fetchBrands, fetchItems, fetchTypes } from '../../http/itemAPI'
import {
    Button,
    Modal,
    Form,
    Dropdown,
    InputGroup,
    FormControl
} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'



const AddItem = observer(({ show, onHide }) => {
    const { item } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [file4, setFile4] = useState(null)
    const [info, setInfo] = useState('')

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems().then(data => item.setItems(data.rows))
    }, [])

    const selectFile = ( key ) => {
        setFile(key.target.files[0])
    }

    const selectFile2 = ( key ) => {
        setFile2(key.target.files[0])
    }

    const selectFile3 = ( key ) => {
        setFile3(key.target.files[0])
        console.log(key.target.files)
    } 
    
    const selectFile4 = ( key ) => {
        setFile4(key.target.files[0])
        console.log(key.target.files)
    }

    const addName = ( key ) => {
        setName(key.target.value)
        console.log(name)
    }
    const addPrice = ( key ) => {
        setPrice(Number(key.target.value))
        console.log(price)
    }

    const addInfo = ( key ) => {
        setInfo(key.target.value)
        console.log(info)
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('typeId', item.selectedType.id)
        formData.append('brandId', item.selectedBrand.id)
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('img2', file2)
        formData.append('img3', file3)
        formData.append('img4', file4)
        formData.append('infoAboutItem', info)
        console.log(formData)
        createItem(formData).then(data => onHide())
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
                        <Dropdown.Toggle>{item.selectedType.name || "Сhoose type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.types.map((type) => (
                                <Dropdown.Item 
                                    onClick={() => item.setSelectedType(type)}
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle className="mt-3">
                            {item.selectedBrand.name || "Сhoose brand"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {item.brands.map((brand) => (
                                <Dropdown.Item 
                                    onClick={() => item.setSelectedBrand(brand)}
                                    key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={addName}
                        placeholder="Enter item name"
                        className="mt-3"
                    ></Form.Control>
                    <InputGroup className="mt-3">
                        <InputGroup.Text>₽</InputGroup.Text>
                        <FormControl
                            value={price}
                            onChange={addPrice}
                            type="number"
                            placeholder="Enter item price"
                        />
                    </InputGroup>
                    <Form.Label className="mt-3">Add four images</Form.Label>
                    <Form.Control
                        placeholder="Enter item image"
                        type="file"
                        onChange={selectFile}
                    ></Form.Control>
                    <Form.Control
                        placeholder="Enter item image"
                        className="mt-3"
                        type="file"
                        onChange={selectFile2}
                    ></Form.Control>
                    <Form.Control
                        placeholder="Enter item image"
                        className="mt-3"
                        type="file"
                        onChange={selectFile3}
                    ></Form.Control>
                    <Form.Control
                        placeholder="Enter item image"
                        className="mt-3"
                        type="file"
                        onChange={selectFile4}
                    ></Form.Control>
                    <Form.Label className="mt-3">Info about item</Form.Label>
                    <Form.Control
                        placeholder="Enter item info"
                        as="textarea"
                        rows={3}
                        value={info}
                        onChange={addInfo}
                    ></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={addItem}>
                    Add
                </Button>
                <Button variant="light" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
})

export default AddItem
