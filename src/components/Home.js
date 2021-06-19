import React from "react";
import { name, city } from "../data/data.js";

// create style element
const fontType ={
  font:'firebrick'
}

function Home() {
  // update the JSX being returned!
  return(
    <div id="home">Home
        <h1 style={fontType}> Your {name}is a Web Developer from Your{city} </h1>
    </div>
  ); 
}

export default Home;
