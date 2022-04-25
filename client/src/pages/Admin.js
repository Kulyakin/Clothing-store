import React from 'react'
import { Container, Button } from 'react-bootstrap'
import AddBrand from '../components/modals/AddBrand'
import AddItem from '../components/modals/AddItem'
import AddType from '../components/modals/AddType'

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant="light" className="mt-3 p-3">
                Add type
            </Button>
            <Button variant="light" className="mt-3 p-3">
                Add brand
            </Button>
            <Button variant="light" className="mt-3 p-3">
                Add item
            </Button>
            <AddType show={true} />
            <AddItem />
            <AddItem />
        </Container>
    )
}

export default Admin
