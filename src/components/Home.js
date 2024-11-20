import React from "react";
import { name, city } from "../data/data.js";


const style = {
  color:'firebrick'
};

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={style}>{name} is a web Developer from {city}</h1>
  </div>;
}

export default Home;
