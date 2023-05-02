import React, { useState } from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import AnnualChart from "../Visual1/vis1chart";
import MonthlyChart from "../Visual1/vis1chartmonthly";
import Popup from 'reactjs-popup';
import "./visual1.css";


function Visual1() {

  const [toggle, setToggle] = useState("Annual");

  const toggleOptionChange = e =>{
    setToggle(e.target.value)
  
}

    return (<div className="visual1">
        <div id="inputs"><input
        type="radio"
        name="toggle"
        value="Annual"
        id="annual"
        checked={toggle === "Annual"}
        onChange={toggleOptionChange}
        />
        <label>Annual</label>

        <input
        type="radio"
        name="toggle"
        value="Monthly"
        id="monthly"
        checked={toggle === "Monthly"}
        onChange={toggleOptionChange}/>
        <label>Monthly</label></div>

<div id="toggles">
  {toggle === "Annual"&&(<div><AnnualChart/></div>)}
  {toggle === "Monthly"&&(<div><MonthlyChart/></div>)}
</div>
  </div>
  
    );
  }
  export default Visual1;