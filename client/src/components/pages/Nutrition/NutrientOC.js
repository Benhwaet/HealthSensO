import { useState } from "react";
import {NutrientForm} from "./NutrientForm.js"
import {NutrientOResult} from "./NutrientOResult.js"
// import Header from "./Header.js"
// import Footer from "./Footer.js"

export default function NutrientOC(){
  const [results, setResults] = useState([]);

  return (
    <div>
      {/* <Header></Header> */}
      <NutrientForm setResults={setResults}></NutrientForm>
	  <NutrientOResult results={results}></NutrientOResult>
      {/* <Footer></Footer> */}
    </div>
  );
}