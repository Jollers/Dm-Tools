
import React from 'react';
import axios from 'axios';
import {ListGroup, action}from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom';

export default class CharacterList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/characters/all`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (

<ListGroup>
    <Link to={`./Character/${2}`}>test</Link>
  { this.state.persons.map(person => <ListGroup.Item key={person.id} value={person.id} action href={`./Character/${person.id}`}>{person.name}</ListGroup.Item>)}
</ListGroup>
    )
  }
}