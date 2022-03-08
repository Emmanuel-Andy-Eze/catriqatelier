import React from 'react';
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <>
            <Link to={`/product/${product._id}`} className='product-card'>
                <Card style={{ width: '20rem' }} className='card'>
                    <Card.Body>
                        <Card.Title className='product-title'>{ product.name}</Card.Title>
                        <Card.Text className='product-text'>
                        It's magic, remastered
                        </Card.Text>
                        <Card.Text className='product-price'>
                        ${product.price}
                        </Card.Text>
                        <Card.Text className='product-price'>
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Img className='product-image' variant="top" src={product.image} />
                </Card>
                
            </Link>
        </>
    )
}

export default Product
