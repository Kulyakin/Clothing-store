import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

const ItemPage = observer(() => {
    const item = {
        id: 14,
        name: 'Джинсы-бананы Умеренный синий деним',
        price: 8229,
        rating: 5,
        img: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_4_1.jpg',
        img2: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_5_1.jpg',
        img3: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_3_1.jpg',
        img4: 'https://www.terranovastyle.ru/ru_ru/media/catalog/product/cache/81c07efe08d5eb10dd5c992ecbfb2edf/d/z/dzhinsy-fasona-mom-mom-34-sab0052606001s350-kw-dzhinsy-dlinnye-kw-sinij_2_1.jpg',
        info: 'Укороченная женская футболка из хлопкового джерси с принтом спереди. Модель облегающего силуэта в рубчик с небольшими вырезами по бокам и декоративной шнуровкой по низу.'
    }
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={420} height={600} src={item.img}></Image>
                    <Image
                        className="mt-3"
                        width={420}
                        height={600}
                        src={item.img3}
                    ></Image>
                </Col>
                <Col md={4}>
                    <Image width={420} height={600} src={item.img4}></Image>
                    <Image
                        className="mt-3"
                        width={420}
                        height={600}
                        src={item.img2}
                    ></Image>
                </Col>
                <Col md={4}>
                    <Row className="gap-3">
                        <h2>{item.name}</h2>
                        <div>{item.rating + ' rating is there'}</div>
                        <h3>{item.price + ' rub'}</h3>
                        <div>About</div>
                        <div>{item.info}</div>
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
