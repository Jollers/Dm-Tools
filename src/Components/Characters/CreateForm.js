import React, { Component } from 'react';
import {Form, Button, }from 'react-bootstrap'
import axios from 'axios';

class CreateForm extends Component {

constructor(props) {
    super(props)

    this.state = {
        npcName: '',
        npcDescription: '',
        npcAge: ''
    }
}

changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = e => {
      e.preventDefault();
      const data = {
        npcName: this.state.npcName,
        npcDescription: this.state.npcDescription,
        npcAge: this.state.npcAge
      };
      axios.post("https://localhost:5001/api/characters", data)
          .then(response => {
              console.log("res from reg", response);
              if (response.statusText === 'Created') {
                  console.log("statusText created")
                  alert("Successfully created character!")
              }
          })
          .catch(error => {
              console.log("registration error", error);
          });
  };

    render() {
        const {npcName, npcDescription, npcAge} = this.state;
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="npcName">
                        <Form.Label>NPC Name</Form.Label>
                        <Form.Control type="text"
                                name="npcName"
                                id="npcName"
                                placeholder="Name"
                                value={this.state.npcName}
                                onChange={this.changeHandler}
                             />
                        {/* <Form.Control id={npcName} type="text" placeholder="Enter NPC name" defaultValue={npcName} onChange={this.changeHandler} /> */}
                    </Form.Group>
                    <Form.Group controlId="npcDescription">
                        <Form.Label>NPC Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter NPC description"  defaultValue={npcDescription} onChange={this.changeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="npcAge">
                        <Form.Label>NPC Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter NPC age" defaultValue={npcAge} onChange={this.changeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={console.log(npcName, npcDescription, npcAge)}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreateForm;