import React, { useContext, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ItemList from '../components/ItemList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrands, fetchItems, fetchTypes } from '../http/itemAPI'

const Shop = observer(() => {
    const { item } = useContext(Context)
    
    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems().then(data => item.setItems(data.rows))
    }, [])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={2}>
                    <TypeBar />
                </Col>
                <Col md={10}>
                    <BrandBar />
                    <ItemList />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
