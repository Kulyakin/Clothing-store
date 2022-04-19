import React from 'react'
import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'

const Shop = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={2}>
                    <TypeBar />
                </Col>
                <Col md={10}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop
