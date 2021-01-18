import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import $ from 'jquery';

export function CreateForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (evt) => {

    evt.preventDefault();

    let character = [{
      "name": name,
      "description": description,
      "age": age
    }];

    fetch('https://localhost:5001/api/character', {
      method: 'POST',
      body: character,
    });
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="characterName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="characterDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="characterAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CreateForm;