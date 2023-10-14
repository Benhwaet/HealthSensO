import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import serving from '../../../images/servings0.png';
import kcal from '../../../images/Kcal.png';
import './ServingCounter.css'
import WaterChart from "../../circles/waterchart";

export default function ServingCounter() {
    return (
    <div>
        <Container>
            <Row>
                <Col className="servContainer"> 
                <img className="servings" style={{ height: '400px', width: '400px' }} 
                src={serving} alt="center page logo" />
                <button className="serving-amount veg">v: 6</button>
                <button className="serving-amount fruit">f: 4</button>
                <button className="serving-amount grain">g: 5</button>
                <button className="serving-amount meat">m: 3</button>
                <button className="serving-amount sweet">s: 0</button>
                <button className="serving-amount fat">f: .25</button>
                <button className="serving-amount dairy">d: 2</button>
                </Col>
                <Col>
                <img style={{ height: '400px', width: '400px' }} 
                src={kcal} alt="center page logo" />
                 </Col>
                <Col> 
                <WaterChart />
                </Col>
            </Row>
        </Container>
    </div>
    )
}