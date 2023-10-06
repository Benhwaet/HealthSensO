import React from "react";
import "../elements/circle.css";
import NutritionO from '../elements/NutritionO';
import RecipesO from '../elements/RecipesO';
import SleepO from '../elements/SleepO';
import LogO from '../elements/LogO';
import AvatarImg from "../elements/Avatar";


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