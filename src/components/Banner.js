import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Banner=()=> {
  return (
    <section className='banner-container'>
        <Container>
            <Row>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Gabriela`} <span className='wrap'>front end web developer</span></h1>
                    <button onClick={()=>console.log('connect')}>Let's Connect</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner