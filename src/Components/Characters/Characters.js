import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

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
                        list
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Characters;