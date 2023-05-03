import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // tällä saa urlista parametrin

import Render from "../menuviews/render";

// vastaanottaa urlista parametrin, joka on tallennetun viewn id, jonka perusteella haetaan databasesta. Database palauttaa näkymän tehneen käyttäjän nimen sekä viewstringin esim 0,1,0,1,1,1, erotettuna "&&"


const SharedView = () => {
    const { id } = useParams();  // tämä on parametri urlista
    const [viewString, setViewString] = useState("");
    const [viewName, setViewName] = useState("");
    const [settings , setSettings] = useState("");

    
    useEffect(() => {
       // console.log("SharedView.js: ", id);
        fetch('http://localhost:8080/savedviews/' + id, {  // haku avoimeen polkuun urlista saadun id:n kanssa
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => response.text())
        .then(data => {
            setViewName(data.split("&&")[0]);  // nimi on ensin
            //console.log("viewname on " + data.split("&&")[0]); // backend palauttaa stringin joka jaettu && merkillä
            setViewString(data.split("&&")[1]);
            //console.log("viewstring on " + data.split("&&")[1]);
        }
        );
    }
    , [id]);

    useEffect(() => {    // jos viewstring on muuttunut, päivitetään settings
        if (viewString !== "") {
            setSettings(viewString);
        }
    }
    , [viewString]);




    

    return (
        <div className="frontpage">
            <h1>Here is a shared view by: {viewName}</h1>
          {viewString && <Render settings={settings} />}
        </div>
      );
    };

export default SharedView;