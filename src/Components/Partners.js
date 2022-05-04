import React from 'react';
import { Container, Col } from 'react-bootstrap';

export default function Partners(){

    return (
        <Container >
            <Col style={{display:'flex', flexDirection:'row', justifyContent:"space-around", alignItems:'flex-start'}} >
            <img
          src='./images/client-databiz.svg'
          alt='logo-databiz'
        />
        <img
          src='./images/client-audiophile.svg'
          alt='logo-audiophile'
        />
        <img
          src='./images/client-meet.svg'
          alt='logo-meet'
        />
        <img
          src='./images/client-maker.svg'
          alt='logo-maker'
        />
            </Col>
        
      </Container>
    )
}