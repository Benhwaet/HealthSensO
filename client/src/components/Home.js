import React from "react";
import "./circles/circle.css";
import NutritionO from './circles/NutritionO';
import RecipesO from './circles/RecipesO';
import SleepO from './circles/SleepO';
import LogO from './circles/LogO';


function Home({currentPage, handlePageChange}) {
    return (
        <div className="row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", 
        textAlign: "center", marginTop: "200px", marginBottom: "200px" }}>
            <NutritionO 
            href="#nutrition"
            onClick={() => handlePageChange('Nutrition')}
            className={currentPage === 'Nutrition'}/>
            
            <RecipesO 
            href="#recipes"
            onClick={() => handlePageChange('Recipes')}
            className={currentPage === 'Recipes'}/>

            <SleepO 
            href="#sleep"
            onClick={() => handlePageChange('Sleep')}
            className={currentPage === 'Sleep'}/>

            <LogO 
            href="#log"
            onClick={() => handlePageChange('Log')}
            className={currentPage === 'Log'}/>
        </div>
    )
}

export default Home;