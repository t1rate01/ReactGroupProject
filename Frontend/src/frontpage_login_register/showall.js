import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Visual1 from "../Visual1/visual1.js"; 
import Visual2 from "../Visual2/visual2Chart";
import MyVisual3Chart from "../Visual3/visual3Chart";
import SectorChart from "../Visual5/sectorChart";

const ShowAll = () => {

    return (
        <div className="frontpage"> 
        <div><h1>Here is all visuals listed</h1>
        <p>In this page you can see all of the charts. More info and source links are 
            visible by clicking the "Info" button below every chart.</p></div>
            <Visual1 />
            <Visual2 />
            <MyVisual3Chart />
            <SectorChart />
            <Link to="/"><button id="backtofront">Back</button></Link>
        </div>
    )

}

export default ShowAll;