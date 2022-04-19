import React from 'react'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'

const Shop = () => {
    return (
        <Container>
            <div className="mt-3">
                <Col md={2}>
                    <TypeBar />
                </Col>
                <Col md={10}></Col>
            </div>
        </Container>
    )
}

export default Shop
