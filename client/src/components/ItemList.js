import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import Item from './Item'

const ItemList = observer(() => {
    const { item } = useContext(Context)
    return (
        <Row className="d-flex">
            {item.items.map((key) => (
                <Item key={key.id} item={key}></Item>
            ))}
        </Row>
    )
})

export default ItemList
