import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Visual1Chart from "../Visual1/vis1chart"; 
import Visual2 from "../Visual2/visual2Chart";
import MyVisual3Chart from "../Visual3/visual3Chart";
import SectorChart from "../Visual5/sectorChart";

const ShowAll = () => {

    return (
        <div>
            <Visual1Chart />
            <Visual2 />
            <MyVisual3Chart />
            <SectorChart />
            <Link to="/"><button>Back</button></Link>
        </div>
    )

}

export default ShowAll;