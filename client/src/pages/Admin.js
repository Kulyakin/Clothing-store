import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import AddBrand from '../components/modals/AddBrand'
import AddItem from '../components/modals/AddItem'
import AddType from '../components/modals/AddType'

const Admin = () => {
    const [typeVisable, setTypeVisable] = useState(false)
    const [brandVisable, setBrandVisable] = useState(false)
    const [itemVisable, setItemVisable] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant="light"
                className="mt-3 p-3"
                onClick={() => setTypeVisable(true)}
            >
                Add type
            </Button>
            <Button
                variant="light"
                className="mt-3 p-3"
                onClick={() => setBrandVisable(true)}
            >
                Add brand
            </Button>
            <Button
                variant="light"
                className="mt-3 p-3"
                onClick={() => setItemVisable(true)}
            >
                Add item
            </Button>
            <AddType show={typeVisable} onHide={() => setTypeVisable(false)} />
            <AddBrand
                show={brandVisable}
                onHide={() => setBrandVisable(false)}
            />
            <AddItem show={itemVisable} onHide={() => setItemVisable(false)} />
        </Container>
    )
}

export default Admin
