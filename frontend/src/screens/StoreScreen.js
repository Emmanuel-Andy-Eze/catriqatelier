import React, {useEffect, useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import StoreProducts from '../components/StoreProducts';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';

const StoreScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return (
        <>
            {loading ? <Loader /> : error ? <Message variant='danger'>{ error }</Message> : (
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <StoreProducts product={product} />
                    </Col>
                ))}
            </Row>)}
        </>
  )
};

export default StoreScreen;
