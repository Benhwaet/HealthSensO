import React from 'react';
import './circle.css';
import { Link } from 'react-router-dom';

export default function RecipesO(){
    return (
      <Link to ="/recipes">
      <div className="circle">
        <div className="circleText2">Recipes</div>
      </div>
      </Link>
    );
    }