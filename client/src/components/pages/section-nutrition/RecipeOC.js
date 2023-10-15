import { useState } from "react";
import {RecipeForm} from "../../forms/RecipeForm"
import {RecipeOResult} from "./RecipeOResult"
import Header from "../Header.js"
import Footer from "../Footer.js"

export default function RecipeOC(){
  const [results, setResults] = useState([]);

  return (
    <div>
      <Header></Header>
      <RecipeForm setResults={setResults}></RecipeForm>
      <RecipeOResult results={results}></RecipeOResult>
      <Footer></Footer>
    </div>
  );
}
