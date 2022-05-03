
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Navigation from './Components/Navbar';
import Partners from './Components/Partners';

function App() {

  return (
    <Container className="App">
      <Navigation />
      <Row className="content" style={{ marginTop: 35 }}>
        <Col style={{margin:20}}>
          <h1 style={{fontSize:80, fontWeight:700}}>Make <br />
          remote work</h1>
          <p style={{fontSize:18}}>Get your team in sync, no matter your location. <br />
            Streamline processes, create team rituals, and watch productivity soar.</p>
          <Button variant="dark" size="lg" style={{ borderRadius: 15 }}>Learn more</Button>
         <Partners />
        </Col>
        <Col>
          <img
            src='./images/image-hero-desktop.png'
            alt="homme avec ordi"
            width='80%'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
