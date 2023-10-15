import React from "react";
import "../circles/circle.css";
import NutritionO from '../circles/NutritionO';
import RecipesO from '../circles/RecipesO';
import SleepO from '../circles/SleepO';
import LogO from '../circles/LogO';


export default function Home() {
    return (
        <div className="row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", 
        textAlign: "center", marginTop: "200px", marginBottom: "200px" }}>
            <NutritionO />
            <RecipesO />
            <SleepO />
            <LogO />
        </div>
    )
}