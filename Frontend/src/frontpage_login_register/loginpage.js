import React from "react";
import { useState } from "react";
import { setToken, getToken, clearToken } from "./tokenStorage";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        setToken(data);
        console.log("Token datassa on " +data);
        console.log("Token on "+ getToken());
    }


    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={loginBtn}>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}

export default LoginPage;