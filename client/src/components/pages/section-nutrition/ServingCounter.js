import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import serving from '../../../images/servings0.png';
import kcal from '../../../images/Kcal.png';
import './ServingCounter.css'
import water from "../../../images/Water.png";

export default function ServingCounter() {
    return (
    <div>
        <div className="servingPage">
            <Row className="rowSection">
                <div className="column"> 
                <img className="food group servings" style={{ height: '450px', width: '450px' }} 
                src={serving} alt="servings on plate" />
                {/* <span>
                <button className="serving-amount veg">v: 6</button>
                <button className="serving-amount fruit">f: 4</button>
                <button className="serving-amount grain">g: 5</button>
                <button className="serving-amount meat">m: 3</button>
                <button className="serving-amount sweet">s: 0</button>
                <button className="serving-amount fat">f: .25</button>
                <button className="serving-amount dairy">d: 2</button>
                </span> */}
                </div>
                <div className="column kcalBtn">
                <img style={{ height: '450px', width: '450px' }} 
                src={kcal} alt="center page logo" />
                 </div>
                <div className="column waterGlass"> 
                <img style={{ height: '450px', width: '450px' }} 
                src={water} alt="water glass" />
                </div>
            </Row>
        </div>
    </div>
    )
}