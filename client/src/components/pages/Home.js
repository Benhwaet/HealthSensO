import React from "react";
import "../circleEl//circle.css";
import NutritionO from '../circleEl//NutritionO';
import RecipesO from '../circleEl//RecipesO';
import SleepO from '../circleEl//SleepO';
import LogO from '../circleEl//LogO';
import AvatarImg from "../circleEl//Avatar";


export default function Home() {
    return (
        <div className="row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", 
        textAlign: "center", marginTop: "200px", marginBottom: "200px" }}>
            <AvatarImg />
            <NutritionO />
            <RecipesO />
            <SleepO />
            <LogO />
        </div>
    )
}