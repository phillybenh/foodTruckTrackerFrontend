import React from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <header className="App-header">
          <p>App Header</p>
        </header>
        </Col>
      </Row>

      <section>
        <p>App Body</p>
        <Button>Btn Test</Button>
      </section>

    </Container>
  );
}

export default App;
