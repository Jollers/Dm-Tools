import React from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div class="container">
      <div class="content-align-center">
        <Form class="">
          <Col xs="4">
            <Form.Group>
              <Form.Label class="text-sm-left">Login</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button>Submit</Button>
          </Col>
        </Form>
      </div>
    </div>
  );
}

export default Login;
// alt + shift + f för formatting
// ctrl + k + c för comment
