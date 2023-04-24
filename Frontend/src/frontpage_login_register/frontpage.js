import React from "react";
import { Link } from "react-router-dom";
import Render from "../menuviews/render.js";
import "./frontpage.css"

const FrontPage = () => {

    let array = [0, 0, 0, 0, 0];
    let randomindex = Math.floor(Math.random() * 5);
    array[randomindex] = 1;
    let arrayString = array.toString();


    return (
        <div className="frontpage">
            <h1>Group 3 global warming visualisations</h1>
            <p>This react app is made by students from Oulu University of Applied Sciences.
            This page contains visualized information about things that have influenced the 
            global warming. Sources to the data are listed in the info box under every chart.

            Please take a look at the charts and sign in, so you can make your on shareable
             view of the charts that are most important to you!
            </p>
            <div>
            <Render settings={[arrayString]}/>
            </div>
        </div>
    )
}

export default FrontPage;