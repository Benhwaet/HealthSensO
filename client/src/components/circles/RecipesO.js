import React from 'react';
import './circle.css';
import { Link } from '@mui/material';

export default function LogO(){
    return (
      <Link to ="/recipes">
      <div className="circle">
        <div className="circleText2">My Recipes</div>
      </div>
      </Link>
    );
    }