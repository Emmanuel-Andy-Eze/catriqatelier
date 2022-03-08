import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Landing = () => {
  return (
    <>
      <Container>
      <div className="landing">
          <div className="landing-text">
            <h1>Catriq Atelier. <span>The best way to buy <br />the products you love.</span></h1>
            <div className='card-icons'>
              <Card className='card-icon' style={{ width: '4rem' }}>
                <Card.Img src="https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTEwMDF6aHV1R0wuX0FDX1NMMTUwMF8uanBn.jpg" />
              </Card>
              <Card className='card-icon' style={{ width: '4rem' }}>
                <Card.Img src="https://www.techinn.com/f/13736/137366742/lenovo-thinkpad-professional-15.6-laptop-bag.jpg" />
              </Card>
              <Card className='card-icon' style={{ width: '4rem' }}>
                <Card.Img src="https://images.vestiairecollective.com/cdn-cgi/image/q=80,f=auto,/produit/blue-leather-emporio-armani-backpack-13179722-1_1.jpg" />
              </Card>
              <Card className='card-icon' style={{ width: '4rem' }}>
                <Card.Img src="https://rlv.zcache.com/editable_background_color_canada_flag_souvenir_water_bottle-rc5766ebfe7fa45c1803189dcd4588434_zlojs_307.jpg?rlvnet=1" />
              </Card>
              <Card className='card-icon' style={{ width: '4rem' }}>
                <Card.Img src="https://www.ankara.com.ng/wp-content/uploads/2017/01/Ankara-Bag-black-and-blue-orange-design-pattern.jpg" />
              </Card>
            </div>
          </div>
          <div className="landing-actions">
            <div className="shopping-help mb-2">
              <h4>Need shopping help?</h4>
              <a href="https://whatsapp.com">Talk to Catherine ></a>
            </div>
            <div className="partner">
              <h4>Want to partner with us?</h4>
              <a href="https://whatsapp.com">Reach out to us</a>
            </div>
            <LinkContainer to='/store' style={{marginTop: '1rem'}}>
              <Button variant="primary" >Visit Store</Button>
            </LinkContainer>
            
          </div>
        </div>
      </Container>
    </>
  )
}

export default Landing
