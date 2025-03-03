import React, { useEffect, useState } from 'react'
import './hero.scss'
import { Container,Row,Col} from 'react-bootstrap'
import axios from 'axios'
import { domain } from '../../env'



const Hero = () => {
    const [herodata, setherodata]  = useState(null)

    useEffect(()=>{
        const getdata = async()=>{
            await axios({
                method:'get',
                url: `${domain}/api/heroImageview/`
            }).then(res=>{
                // console.log(res.data[0] , 'hero images');
                setherodata(res.data[0])
                
            })
        }
        getdata()
    },[])
  return (
    <div className='hero-section'>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={6}>
                <div className='discription' data-aos="fade-right" >
                    <h1> {herodata?.titel} </h1>
                    <p>{herodata?.discription.substring(0, 140)}</p>
                    <button className='my-btn'>Read more</button>
                </div>
                </Col>

                <Col sm={12} md={6} lg={6}>
                <div >
                    <img className='imges' src={herodata?.image} alt="hero images" data-aos="fade-left" />
                </div>
                </Col>
            </Row>
        </Container>
  
    </div>
  )
}

export default Hero
