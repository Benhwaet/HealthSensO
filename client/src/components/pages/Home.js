import React from "react";
import "./circles/circle.css";
import NutritionO from '../CircleLinks/NutritionO';
import RecipesO from '../CircleLinks/RecipesO';
import LogO from '../CircleLinks/LogO';


function Home({currentPage, handlePageChange}) {
    return (
        <div className="row" style={{ display: "flex", flexDirection: "row", 
        justifyContent: "space-evenly", alignContent: "center",  
        textAlign: "center", marginTop: "180px", marginBottom: "180px"}}>
            <NutritionO 
            href="#nutrition"
            onClick={() => handlePageChange('Nutrition')}
            className={currentPage === 'Nutrition'}/>
            
            <RecipesO 
            href="#recipes"
            onClick={() => handlePageChange('Recipes')}
            className={currentPage === 'Recipes'}/>

            <LogO 
            href="#log"
            onClick={() => handlePageChange('Log')}
            className={currentPage === 'Log'}/>
        </div>
    )
}

export default Home;