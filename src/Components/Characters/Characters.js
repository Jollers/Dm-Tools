import React from "react";
import { Link } from 'react-router-dom';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Create from "./Create";

function Characters() {
    return (
        <div class="Characters">
            <h1>Characters</h1>
            <Link to="./Create">
                <div>Knapp Här</div>
            </Link>
        </div>
    );
};

export default Characters;