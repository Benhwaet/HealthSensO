import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';
import AvatarImg from '../circles/Avatar';
const logo = require('../../images/Owhite.png');

export default function Header() {
    return (
        <header style={{ backgroundColor: 'black', height: '125px', width: '100%'}}>
            <Container>
                <Row>
                    <Col className="logout">
                        <a className="logoutText" href="Login">Log Out</a>
                        </Col>
                    <Col style={{display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
                    <img src={logo} alt="logo" style={{height: "125px"}}/>
                    <AvatarImg/>
                    </Col>
                    <Col className="help">
                        <a className="helpText" href="Help">Help</a>
                        </Col>
                </Row>
            </Container>
        </header>
    )
}