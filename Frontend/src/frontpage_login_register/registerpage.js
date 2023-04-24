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
        <div>
            <h1>Log in</h1>
            <form onSubmit={regBtn}>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                </label>
                <button type="submit">Register</button>
            </form>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}

export default RegisterPage;