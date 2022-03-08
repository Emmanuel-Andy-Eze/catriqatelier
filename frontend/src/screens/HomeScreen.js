import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product'
import Landing from '../components/Landing'
import Services from '../components/Services'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Landing />
            <h1 className='title'><span>The latest. </span>Take a look at what's new, right now</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{ error }</Message> : 
                <div className="row_posters">
                    {products.map((product) => (
                        <Product product={ product }/>
                    ))}
                </div>
            }
            

            <h1 className='title'><span>The Catriq difference. </span>Even more reasons to shop with us.</h1>
            <div className="row_posters">
                <Services />
            </div>
        </>
    )
}

export default HomeScreen
