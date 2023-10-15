import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import avatar from '../../images/avatar.png';
import './pages.css';
const logo = require('../../images/Owhite2.png');

export default function Header() {
    return (
        <header style={{ backgroundColor: 'black', height: '150px', width: '100%'}}>
            <Container>
                <Row>
                    <Col className="logout">
                        <a className="logoutText" href="Login">Log Out</a>
                        </Col>
                    <Col style={{display: "flex", marginTop: "15px", justifyContent: "center", alignItems: "center", position: "relative"}}>
                    <img  className="top-logo" src={logo} alt="logo" style={{height: "125px"}}/>
                    <Avatar className="avatar" src={avatar} alt="default avatar" />
                    </Col>
                    <Col className="help">
                        <a className="helpText" href="Help">Help</a>
                        </Col>
                </Row>
            </Container>
        </header>
    )
}