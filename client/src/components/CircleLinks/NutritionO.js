import React from 'react';
import './circle.css';
import { Link } from 'react-router-dom';


export default function NutritionO() {
    return (
      <Link to ="/nutrition">
      <div className="circle">
        <div className="circleText2">Nutrition</div>
      </div>
      </Link>
    );
  }