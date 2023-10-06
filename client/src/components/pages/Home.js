import React, {useEffect, useState} from "react";
import "../elements/circle.css";
import NutritionO from '../elements/NutritionO';
import RecipesO from '../elements/RecipesO';
import SleepO from '../elements/SleepO';
import LogO from '../elements/LogO';
import AvatarImg from "../elements/Avatar";


export default function Home() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("http://localhost:3001/message")
          .then((res) => res.json())
          .then((data) => setMessage(data.message));
      }, []);
    return (
        <div className="row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", 
        textAlign: "center", marginTop: "200px", marginBottom: "200px" }}>
            <AvatarImg />
            <NutritionO />
            <RecipesO />
            <SleepO />
            <LogO />
            <h1>{message}</h1>
        </div>
    )
}