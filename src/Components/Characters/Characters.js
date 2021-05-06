import React from "react";
import { Link } from 'react-router-dom';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Create from "./Create";

function Characters() {
    return (
        <div class="Characters">
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