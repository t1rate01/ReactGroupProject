import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken, getToken, clearToken } from "../frontpage_login_register/tokenStorage";
import Render from "./render.js";

const ChartView = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [viewArray, setViewArray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken() !== null) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
            navigate("/");
        }
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/users/view', {
            method: 'GET',  
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + getToken(),
            },
        })
        .then(response => response.text())
        .then(data => {
            console.log(" Fethin data on " +data);
            setViewArray(data);
        })
        .catch((error) => {
            console.error('Error:', error); 
        });
    }, []);

    return (
        <div>
            
            <Render settings={viewArray.toString()}/>
        </div>
    )
}

export default ChartView;
