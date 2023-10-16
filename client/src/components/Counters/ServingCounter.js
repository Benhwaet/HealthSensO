import React, { useState } from "react";
import { Row } from 'react-bootstrap';
import serving from './images/servings0.png';
import './ServingCounter.css'

export default function ServingCounter() {

    let [count, setCount] = useState(0);

    const handleClick = () => {
    setCount((count + 1));
    }

    return (
        <>
            <div className="servingPage">
                <Row className="rowSection">
                    <div className="column">
                        <div className="buttonGroup">
                            <button className="serving-amount" onClick={handleClick}>veggie:{count}</button>
                            <button className="serving-amount" onClick={handleClick}>fruit:{count}</button>
                            <button className="serving-amount" onClick={handleClick}>grain:{count}</button>
                            <button className="serving-amount" onClick={handleClick}>meat:{count}</button>
                        </div>
                        <img className="food group servings" style={{ height: '450px', width: '450px' }}
                            src={serving} alt="servings on plate" />
                        <div className="buttonGroup">
                            <button className="serving-amount" onClick={handleClick}>sweet:{count}</button>
                            <button className="serving-amount" onClick={handleClick}>fat:{count}</button>
                            <button className="serving-amount" onClick={handleClick}>dairy:{count}</button>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    )
}