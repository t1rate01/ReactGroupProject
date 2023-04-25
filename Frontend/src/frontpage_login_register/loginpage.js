import React from "react";
import { useState } from "react";
import { setToken, getToken, clearToken } from "./tokenStorage";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginBtn = async (event) => {
       event.preventDefault();   // event objektista löytyy, estää selaimen sekaantumisen formiin(?) ja sen sijaan mennään omilla toiminnoilla
       if(username === "" || password === "") {
              alert("Username or password missing");
              return;
         }
        login(username, password);
    }

    async function login(username, password) {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            },
        });
        const data = await response.text();
        if (data.lenght !== "Wrong/Missing username or password"){
        setToken(data);
        console.log("Token datassa on " +data);
        console.log("Token on "+ getToken());
        navigate("/menu");
    }
    }


    return (
        <div className="frontpage">
            <h1>Log in</h1>
            <form onSubmit={loginBtn}>
                <div id="checkboxes"><label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                </label></div>
                <div id="checkboxes"><label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                </label></div>
                <button id="buttons" type="submit">Login</button>
            </form>
            <Link to="/"><button id="buttons">Back</button></Link>
        </div>
    )
}

export default LoginPage;