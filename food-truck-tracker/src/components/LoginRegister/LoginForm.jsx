import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const LoginForm = (props) => {
  return (
    <Container fluid="sm">
      <Form>
        <Col>
          <Form.Group controlId="userName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default LoginForm;
