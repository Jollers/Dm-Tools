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

  submitHandler(event)
  {
      const { //denna const gör bara att jag inte behöver skriva this.state.email etc i posten.
        npcName,
        npcDescription,
        npcAge
      } = this.state;
      axios.post("https://localhost:5001/api/characters", {

              npcName: npcName,
              npcDescription: npcDescription,
              npcAge: npcAge

      },
          { withCredentials: true } //jätteviktig. annars vet inte API:t att den får sätta cookien.
      )
          .then(response => {
              console.log("res from reg", response);
              if (response.statusText === 'Created') {
                  console.log("statusText created")
                  alert("Successfully created user!")
              }
          })
          .catch(error => {
              console.log("registration error", error);
          });
      event.preventDefault();
  }




/*submitHandler = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    const response = fetch("https://localhost:5001/api/character", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.setState({ isSubmitting: false });
    const data = response.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });
    console.log(this.state)
}*/

    render() {
        const {npcName, npcDescription, npcAge} = this.state;
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="npcName">
                        <Form.Label>NPC Name</Form.Label>
                        <input type="tect"
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
                    <Button variant="primary" type="submit" onSubmit={console.log(npcName)}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreateForm;