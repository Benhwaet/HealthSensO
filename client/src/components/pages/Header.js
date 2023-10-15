import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AvatarImg from '../circleEl/Avatar';
const logo = require('../../images/Owhite.png');

export default function Header() {
    return (
        <header style={{ backgroundColor: 'black', height: '125px', width: '100%'}}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col style={{display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
                    <img src={logo} alt="logo" style={{height: "125px", zIndex: "-1"}}/>
                    <AvatarImg style={{zIndex: "2"}}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </header>
    )
}