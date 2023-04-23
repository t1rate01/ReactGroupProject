import React from "react";
import { Link } from "react-router-dom";
import Render from "../menuviews/render.js";

const FrontPage = () => {

    let array = [0, 0, 0, 0, 0];
    let randomindex = Math.floor(Math.random() * 5);
    array[randomindex] = 1;
    let arrayString = array.toString();


    return (
        <div>
            <Render settings={[arrayString]}/>
            <h1>Choose</h1>
            <Link to="login"><button>Log in</button></Link>
            <Link to="register"><button>Register</button></Link>
        </div>
    )
}

export default FrontPage;