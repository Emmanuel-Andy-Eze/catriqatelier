import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Container, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetail } from '../actions/productActions';

const ProductScreen = () => {
    const [qty, setQty] = useState(1)
    let navigate = useNavigate();
    const params = useParams()
    const dispatch = useDispatch()

    const productDetail = useSelector((state) => state.productDetail)
   
    
    useEffect(() => {
        dispatch(listProductDetail(params.id))
    }, [dispatch, params])

    const { loading, error, product } = productDetail


    const addToCartHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`)
    }


    return (
        <>
            <Container style={{backgroundColor: 'white', marginTop: '2rem', borderRadius: '2rem', padding: '1rem'}}>
                <Link className='btn btn-light my-3' to='/store'>Go to Store</Link>
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                    <Row>
                    <Col md={6}>
                        <Image style={{width: '80%', borderRadius: '2rem'}} src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Descrption: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card className='product-card' style={{borderRadius: '0', border: 'none'}}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${ product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                        {[...Array(product.countInStock).keys()].map(x => (
                                                            <option key={x+1} value={x+1}> {x+1}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler}
                                            className='btn-block'
                                            type='button'
                                            disabled={product.countInStock === 0}
                                            
                                        >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>

                        </Card>
                    </Col>
                </Row>
                )}
                
            </Container>
            
        </>
    )
};

export default ProductScreen;
