import React from "react";
import { useState, useEffect } from "react";
import { getToken, setToken, clearToken } from "../frontpage_login_register/tokenStorage";
import { Link, useNavigate } from "react-router-dom";



const DefaultMenu = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);

    const navigate = useNavigate();
    const [defaultView, setDefaultView] = useState([]);
    const [loggedIn , setLoggedIn] = useState();

    useEffect(() => {
        if (getToken() !== null) {
            setLoggedIn(true);
            console.log("logged in");
        }
        else {
            setLoggedIn(false);
            navigate("/");
        }
        if (loggedIn === false) {
            
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
            setDefaultView(data);
            console.log(data);
        })
    }, [])

    const handleChange1 = (event) => {
        setChecked1(event.target.checked);
    };
    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
    };
    const handleChange3 = (event) => {
        setChecked3(event.target.checked);
    };
    const handleChange4 = (event) => {
        setChecked4(event.target.checked);
    };
    const handleChange5 = (event) => {
        setChecked5(event.target.checked);
    };

    const callRender = async (event) => {
        event.preventDefault();
        let view = [0,0,0,0,0];
        if(checked1===true){
            view[0] = 1;
        }
        if(checked2 === true){
            view[1] = 1;
        }
        if(checked3 === true){
            view[2] = 1;
        }
        if(checked4 === true){
            view[3] = 1;
        }
        if(checked5 === true){
            view[4] = 1;
        }
        let viewString = view.toString();
        console.log(viewString);
        fetch('http://localhost:8080/users/view', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + getToken(),
            },
            body: `defaultview=${viewString}`
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            navigate("/menu/view");
        })
    }


  

   




// LISÄÄ LOGOUT NAPPI JA TOIMINTO

    return (
       <div className="viewoptions"> <div id="checkboxes">
            <h1>View options</h1>
            <p>Select charts you want to see on your personalized view:</p>
            <div><input type="checkbox" checked={checked1} onChange={handleChange1} />
            <label>Visual 1</label></div>

            <div><input type="checkbox" checked={checked2} onChange={handleChange2} />
            <label>Visual 2</label></div>

            <div><input type="checkbox" checked={checked3} onChange={handleChange3} />
            <label>Visual 3</label></div>

            <div><input type="checkbox" checked={checked4} onChange={handleChange4} />
            <label>Visual 4</label></div>

            <div><input type="checkbox" checked={checked5} onChange={handleChange5} />
            <label>Visual 5</label></div>
        </div>
        <p>Select layout:</p>
        <div id ="checkboxes">
        <div><input type ="radio"></input><label>Two side by side</label></div>
        <div><input type ="radio"></input><label>In a row</label></div>
        </div>
        <div id="buttongroup">
            <button onClick>Delete account</button>
            <button onClick>Delete view</button>
        </div>
        <div id="buttongroup">
            <button onClick={callRender}>Save view</button>
            <button onClick>Cancel</button>
        </div>
        </div>
    )
}

export default DefaultMenu;