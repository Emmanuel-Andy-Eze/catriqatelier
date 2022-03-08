import React from 'react'
import products from '../products'

const Categories = () => {
    return (
         <>
            <div className='row-posters'>
                {products.map(product => (
                    <img src="{product.image}" alt="{product.name}" />
                ))}
            </div>
        </>
    )
}

export default Categories
