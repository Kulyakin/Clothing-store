import React, { useContext } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { Card } from 'react-bootstrap'

const BrandBar = observer(() => {
    const { item } = useContext(Context)
    return (
        <div className="d-flex">
            {item.brands.map((brand) => (
                <Card
                    key={brand.id}
                    style={{ cursor: 'pointer' }}
                    className="p-3"
                    onClick={() => item.setSelectedBrand(brand)}
                    border={
                        brand.id === item.selectedBrand.id ? 'dark' : 'light'
                    }
                >
                    {brand.name}
                </Card>
            ))}
        </div>
    )
})

export default BrandBar
