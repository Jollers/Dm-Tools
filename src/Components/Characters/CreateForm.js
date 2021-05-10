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
    this.setState({  [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value});
  }

  submitHandler = e => {
      e.preventDefault();
      const data = {
        Name: this.state.npcName,
        Description: this.state.npcDescription,
        Age: this.state.npcAge
      };

      console.log(data);

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
        const {Name: npcName, npcDescription, npcAge} = this.state;
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="npcName">
                        <Form.Label>NPC Name</Form.Label>
                        <Form.Control type="text"
                                name="npcName"
                                placeholder="Name"
                                value={npcName}
                                onChange={this.changeHandler}
                             />
                    </Form.Group>
                    <Form.Group controlId="npcDescription">
                        <Form.Label>NPC Description</Form.Label>
                        <Form.Control type="text" 
                            name ="npcDescription" 
                            placeholder="Enter NPC description"  
                            value={npcDescription} 
                            onChange={this.changeHandler}
                            />
                    </Form.Group>
                    <Form.Group controlId="npcAge">
                        <Form.Label>NPC Age</Form.Label>
                        <Form.Control type="number" 
                            name="npcAge"
                            placeholder="Enter NPC age" 
                            value={npcAge} 
                            onChange={this.changeHandler} 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={this.submitHandler}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreateForm;