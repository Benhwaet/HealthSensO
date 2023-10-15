import React from 'react';
import RecipeOC from '../Recipes/RecipeOC';
import RecipeBook from '../Recipes/RecipeBook';
import CalCalculator from '../Nutrition/CalCalculator';
import ServingCounter from '../Nutrition/ServingCounter';

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