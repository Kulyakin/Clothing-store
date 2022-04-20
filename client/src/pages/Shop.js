import React from 'react'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ItemList from '../components/ItemList'

const Shop = () => {
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
}

export default Shop
