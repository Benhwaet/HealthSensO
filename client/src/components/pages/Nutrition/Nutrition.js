import React from 'react';
import { Row } from 'react-bootstrap';
import NutrientOC from './NutrientOC';
import ServingCounter from '../../Counters/ServingCounter';
import WaterTracker from '../../Counters/WaterTracker';

export default function Nutrition() {
    return (
        <div>
            <Row>
            <div>
            <ServingCounter />
            </div>
            <div>
            <NutrientOC />
            </div>
            <div>
            <WaterTracker/>
            </div>
            </Row>
        </div>
    )
}