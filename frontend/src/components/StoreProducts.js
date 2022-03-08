import React from 'react';
import {Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Product = ({product}) => {
    return (
        <>
            <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}} className='store-row'>
                <Card style={{ color: 'black' }} className='store-card my-3 p-3'>
                    <Card.Title style={{fontSize: '1.2rem', fontWeight: '600', textDecoration: 'none'}}>{ product.name}</Card.Title>
                    <Card.Img variant="top" src={product.image} className='store-product-image' />
                    <Card.Text style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        ${product.price}
                        <LinkContainer to='/store' style={{marginTop: '1rem'}}>
                            <Button className='btn-sm' variant="primary" >Add to Cart</Button>
                        </LinkContainer>
                    </Card.Text>
                </Card>
                
                </Link>
        </>
    )
}

export default Product
