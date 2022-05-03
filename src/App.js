
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Navigation from './Components/Navbar';

function App() {

  return (
    <Container className="App">
      <Navigation />
      <Row className="content" style={{ marginTop: 35 }}>
        <Col>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and watch productivity soar.</p>
          <Button variant="dark" size="lg" style={{ borderRadius: 15 }}>Learn more</Button>
          <div style={{marginTop:55}}>
            <img
              src='./images/client-databiz.svg'
              alt='logo-databiz'
              style={{marginRight:30}}
            />
            <img
              src='./images/client-audiophile.svg'
              alt='logo-audiophile'
              style={{marginRight:30}}
            />
            <img
              src='./images/client-meet.svg'
              alt='logo-meet'
              style={{marginRight:30}}
            />
            <img
              src='./images/client-maker.svg'
              alt='logo-maker'
              style={{marginRight:30}}
            />
          </div>
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
