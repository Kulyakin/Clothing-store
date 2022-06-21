import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneItem } from '../http/itemAPI'

const ItemPage = observer(() => {

    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetchOneItem(id).then((data) => setItem(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image 
                        width={420} 
                        height={600} 
                        src={process.env.REACT_APP_API_URL + item.img}
                        ></Image>
                    <Image
                        className="mt-3"
                        width={420}
                        height={600}
                        src={process.env.REACT_APP_API_URL + item.img2}
                    ></Image>
                </Col>
                <Col md={4}>
                    <Image 
                        width={420} 
                        height={600} 
                        src={process.env.REACT_APP_API_URL + item.img3}
                        ></Image>
                    <Image
                        className="mt-3"
                        width={420}
                        height={600}
                        src={process.env.REACT_APP_API_URL + item.img4}
                    ></Image>
                </Col>
                <Col md={4}>
                    <Row className="gap-3">
                        <h2>{item.name}</h2>
                        <div>{item.rating + ' rating is there'}</div>
                        <h3>{item.price + ' rub'}</h3>
                        <div>{item.infoAboutItem}</div>
                        <div>Description</div>
                        <Button
                            onClick={() => alert('Work in progress')}
                            variant="outline-success"
                        >
                            Add to cart
                        </Button>
                        <Button
                            onClick={() => alert('Work in progress')}
                            variant="light"
                        >
                            Check availability in store
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
})

export default ItemPage
