import React from 'react';
import {Card} from 'react-bootstrap'

const Services = () => {
    return (
        <>
            <div className='product-card' style={{ display: 'flex'}}>
                <Card style={{ width: '20rem', padding: '1rem' }} className='card'>
                    <Card.Body>
                        <Card.Title><i className="fas fa-shopping-bag" style={{ color: '#3F6EB8', fontSize: '2.5rem' }}></i></Card.Title>
                        <Card.Text className='service-text'>
                        <span className='service-text-span' style={{ color: '#3F6EB8' }}>Convenient Pick up options </span> that fit into your everyday schedule.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', padding: '1rem' }} className='card'>
                    <Card.Body>
                        <Card.Title><i class="fas fa-box" style={{ color: '#FF0053', fontSize: '2.5rem' }}></i></Card.Title>
                        <Card.Text className='service-text'>
                        Choose fast, free delivery or<span className='service-text-span' style={{ color: '#FF0053' }}> two-hour courier delivery.</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', padding: '1rem' }} className='card'>
                    <Card.Body>
                        <Card.Title><i class="fas fa-grin-hearts" style={{ color: '#007AFF', fontSize: '2.5rem' }}></i></Card.Title>
                        <Card.Text className='service-text'>
                        <span className='service-text-span' style={{ color: '#007AFF' }}>Customize </span> your wears and create your own style.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', padding: '1rem' }} className='card'>
                    <Card.Body>
                        <Card.Title><i class="fas fa-toolbox" style={{ color: '#AC39FF', fontSize: '2.5rem' }}></i></Card.Title>
                        <Card.Text className='service-text'>
                        On each product bought,<span className='service-text-span' style={{ color: '#AC39FF' }}> get 3-month waranty</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        </>
  )
};

export default Services;
