
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Navigation from './Components/Navbar';
import Partners from './Components/Partners';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Container>
      <Row xs lg={2} style={{display:"flex", flexDirection:'row-reverse'}}>
      <Col>
          <img
            src='./images/image-hero-desktop.png'
            alt="homme avec ordi"
            width='80%'
          />
        </Col>
        <Col className="info" xs={{order : 2}} lg={6}>
          <h1 style={{ fontSize: 80, fontWeight: 700 }}>Make <br />
            remote work</h1>
          <Col className="text">
            <p style={{ fontSize: 18 }}>Get your team in sync, no matter your location. <br />
              Streamline processes, create team rituals, and watch productivity soar.</p>
          </Col>
          <Col className="learn-more">
            <Button 
            variant='dark' size="lg" style={{ borderRadius: 15, fontSize: 18, width:150, padding:15 }}
           >
              Learn more
            </Button>
          </Col>
          <Col className="info-partners">
            <Partners />
          </Col>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
