import { useState } from "react";
import {RecipeForm} from "./RecipeForm"
import {RecipeOResult} from "./RecipeOResult"

export default function RecipeOC(){
  const [results, setResults] = useState([]);

  return (
    <div>
      <RecipeForm setResults={setResults}></RecipeForm>
      <RecipeOResult results={results}></RecipeOResult>
    </div>
  );
}
