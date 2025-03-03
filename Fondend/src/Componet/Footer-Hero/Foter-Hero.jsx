import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'
import './footer-hero.scss'
import img1  from '../../assets/footerImg.png'

const FoterHero = () => {
  return (
    <Container>
      <Row className="footer-section">
     
        <Col  sm={12} md={6}  lg={6}>
        <div className='leftSite'>
            <p className='fast-p'>Subscription</p>
            <h6>Join our exclusive beauty community</h6>
            <p>Elevate your beauty journey with personalized recommendations and 
                stay connected with a community that shares your
                 passion for self-care. Subscribe now and embark on 
                 a beauty adventure with us!"</p>

                 <div className="subscrip-section">
<input type="text" placeholder='Email Address' />
<button className='my-btn'>Subscribe </button>

                 </div>
        </div>
        
        </Col> 

        <Col sm={12} md={6} lg={6}>
        <div> 
            <img src={img1} className='image-fluid' alt="Footer hero" />
        </div>
        </Col> 


        
      
      </Row>
    </Container>
  )
}

export default FoterHero
