import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken, getToken, clearToken } from "../frontpage_login_register/tokenStorage";
import Render from "./render.js";
import baseURL from "../baseurl";

// KUN KÄYTTÄJÄLLÄ ON NÄKYMÄ TAI KÄYTTÄJÄ ON TEHNYT NÄKYMÄN
const ChartView = () => {

    const [viewArray, setViewArray] = useState([]);


    useEffect(() => {   // haetaan näkymä
        fetch(baseURL + '/api/users/view', {
            method: 'GET',  
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + getToken(),
            },
        })
        .then(response => response.text())
        .then(data => {
           // console.log(" Fethin data on " +data);
            setViewArray(data);
        })
        .catch((error) => {
            console.error('Error:', error); 
        });
    }, []);

    return (
        <div className="frontpage">
            <div><h1>Here is your individualized view of the charts</h1>
            <p>Feel free to share it to others by pressing "share"!</p></div>
            <Render settings={viewArray.toString()}/>
        </div>
    )
}

export default ChartView;
