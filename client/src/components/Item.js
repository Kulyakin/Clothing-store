import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ITEM_ROUTE } from '../utils/constatns'

const Item = ({ item }) => {
    const navigate = useNavigate()
    return (
        <Col
            md={3}
            className={'mt-3'}
            onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}
        >
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image width={150} height={150} src={item.img}></Image>
                <div className="d-flex justify-content-between align-items-center">
                    <div>Zara...</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <Image></Image>
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    )
}

export default Item