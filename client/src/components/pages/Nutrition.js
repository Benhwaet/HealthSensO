import React from 'react';
import RecipeOC from './section-nutrition/RecipeOC';
import RecipeBook from './section-nutrition/RecipeBook';
import CalCalculator from './section-nutrition/CalCalculator';
import ServingCounter from './section-nutrition/ServingCounter';

export default function Nutrition() {
    return (
        <div>
            <RecipeOC />
            <RecipeBook />
            <CalCalculator />
            <ServingCounter />
        </div>
    )
}