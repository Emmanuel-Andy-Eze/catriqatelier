import React, { useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
    // STATES
	const productId = match.params.id
	const qty = location.search ? Number(location.search.split('=')[1]) : 1
	const dispatch = useDispatch()

	// USE EFFECT
	useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
	}, [dispatch, productId, qty])

    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default CartScreen;
