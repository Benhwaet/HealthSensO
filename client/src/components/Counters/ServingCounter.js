import React from "react";
import { Row } from 'react-bootstrap';
import serving from './images/servings0.png';
import kcal from './images/Kcal.png';
import './ServingCounter.css'

import { Link } from "@mui/material";

export default function ServingCounter() {
    return (
        <div>
            <div className="servingPage">
                <Row className="rowSection">
                    <div className="column">
                        <img className="food group servings" style={{ height: '450px', width: '450px' }}
                            src={serving} alt="servings on plate" />
                        <div className="buttonGroup">
                <button className="serving-amount veg">veggie: 6</button>
                <button className="serving-amount fruit">fruit: 4</button>
                <button className="serving-amount grain">grain: 5</button>
                <button className="serving-amount meat">meat: 3</button>
                <button className="serving-amount dairy">dairy: 2</button>
                <button className="serving-amount fat">fat: 0.25</button>
                <button className="serving-amount sweet">sweet: 0</button>
                </div>
                    </div>

                 
                </Row>
            </div>
        </div>
    )
}