import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const logo = require('../../images/Owhite.png');

export default function Header() {
    return (
        <header style={{ backgroundColor: 'black', height: '125px', width: '100%'}}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={logo} style={{height: "125px"}}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </header>
    )
}