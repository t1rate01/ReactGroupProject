import React from "react";
import { useState } from "react";
import { setToken, getToken, clearToken } from "./tokenStorage";
import { Link, useNavigate  } from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    const regBtn = async (event) => {
       event.preventDefault();   // event objektista löytyy, estää selaimen sekaantumisen formiin(?) ja sen sijaan mennään omilla toiminnoilla
       if(username === "" || password === "") {
              alert("Username or password missing");
              return;
         }
        register(username, password);
    }

    async function register(username, password) {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${username}&password=${password}`
        });
        const data = await response.text();
        if (data === username){
            alert("Registration successful");
            navigate("/login");
        }
        
    }


   


    return (
        <div className="frontpage">
            <h1>Register and make your own view!</h1>
            <div className="frontpage">
            <form onSubmit={regBtn}>
                <div id="checkboxes"><label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                </label></div>
                <div id="checkboxes"><label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                </label></div>
                <button id="buttons" type="submit">Register</button>
            </form>
            <Link to="/"><button id="buttons">Back</button></Link>
            </div>
        </div>
    )
}

export default RegisterPage;