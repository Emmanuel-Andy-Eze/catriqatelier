import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className='text-center py-2'>
                        Copyright &copy; Catriq Atelier 2022
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
