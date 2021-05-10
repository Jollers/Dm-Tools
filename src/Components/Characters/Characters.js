import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import GetCharacter from './GetCharacter'

function Characters() {
    return (
        <div className="Characters">
            <h1>Characters</h1>
            <Container>
                <Row>
                    <Col>
                        <Link to="./Create">
                            <div>Create new NPC</div>
                        </Link>
                    </Col>
                    <Col>
                    List
                    <GetCharacter />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Characters;