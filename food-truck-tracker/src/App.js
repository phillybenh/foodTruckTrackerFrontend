import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Components
import LoginPage from './components/LoginRegister/LoginPage';


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

      <Switch>
        {/* <PrivateRoute path="/main" component={Main} />
        <PrivateRoute path="/truckOperator" component={TruckOperator} />
        <PrivateRoute path="/dinerProfile" component={DinerProfile} />
        <PrivateRoute path="/userProfile" component={UserProfile} /> */}
        <Route path="/" component={LoginPage} />
      </Switch>


    </Container>
  );
}

export default App;
