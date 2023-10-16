import React from 'react';
import Nutrient from './NutrientOC';
import ServingCounter from '../../Counters/ServingCounter';
import Water from '../../Counters/WaterTracker';

export default function Nutrition() {
    return (
        <div>
            <ServingCounter />
            <Nutrient />
            <Water/>
        </div>
    )
}