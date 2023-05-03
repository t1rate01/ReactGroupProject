import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation,} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


import { getToken, clearToken } from "../frontpage_login_register/tokenStorage";
import AlertDialog from "./shareview";
import baseURL from "../baseurl";
const BrowserBar = () => {
const [loggedIn, setLoggedIn] = useState(false);
const [returnData, setReturnData] = useState(null);
const [displayShareView, setDisplayShareView] = useState(false);
//const [viewString, setViewString] = useState(""); 
const [link, setLink] = useState('');
const navigate = useNavigate();
const location = useLocation();
const defaultViewCompareString = "0,0,0,0,0,0"; // ohjelma tallentaa näin
const defaultViewCompareString2 = "000000" // databasen default toiminto tallentaa näin
let Token = getToken();


// BROWSERBAR on kokoajan renderöitynä, valvoo muunmuassa onko käyttäjä kirjautunut sisään, pysyykö sallituilla sivuilla, ja näyttää oikeat napit tilanteen mukaan. 



useEffect(() => {
    if (Token !== null) {
        setLoggedIn(true);
    }
    else {
        setLoggedIn(false);
    }
}
, [Token]);  // tämän hookin täytyy olla riippuvainen getToken() haun tuloksen muuttumisesta


function createLink(viewID){
    return baseURL + "/api/shared/" + viewID.toString();
  }
  
const handleSaveShareClick = async(event) => {      // Tarkistaa viimeisimmän view:n käyttäjältä, sitten tallentaa savedviews tableen tietokantaan.
    let latestViewString = await updateDefaultViewString(); // ensin katotaan view ajantasalle varmasti
    let viewID = uuidv4();    // random id jota käytetään myös linkin luomiseen.
    console.log(viewID);
    console.log(" updaten jälkeen " + latestViewString);
    const response = await fetch(baseURL + '/api/savedviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + Token,
      },
        body: `viewID=${viewID}&viewstring=${latestViewString}`
    });

    if (response.status === 200) {
      console.log(response.status);
      setLink(createLink(viewID)); // linkki talteen
      setDisplayShareView(true); // linkkidialogi ikkunan muuttujan toggle
    }
    else {
      console.log(response.status);
    }
  }

  async function updateDefaultViewString() {  // palauttaa stringin handlesaveshareclickille
    try {
      const response = await fetch(baseURL + '/api/users/view', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + Token,
        },
      });
      const data = await response.text();
      //console.log("Updaten data on " + data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  

async function checkDefaultView(){   // tarkistaa onko käyttäjällä tallennettua näkymää ja ohjaa oikealle sivulle.
    fetch(baseURL + '/api/users/view', {
        method: 'GET',  
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + Token,
        },
    })
    .then(response => response.text())
    .then(data => {
        console.log(" Fethin data on " +data);
        if (data.toString() === defaultViewCompareString || data.toString() === defaultViewCompareString2){ 
            navigate("/menu");
        }
        else{
            navigate("/menu/view");
           // setViewString(data.toString());
        }
    })
    .catch((error) => {
        console.error('Error:', error); 
    });
}


useEffect(() => {     // Tarkistaa onko käyttäjä kirjautunut sisään ja onko jollain muulla sivulla kuin julkisella sivulla, tarvittaessa heittää etusivulle
    if(loggedIn === false && location.pathname !== "/" 
    && location.pathname !== "/showall" 
    && location.pathname !== "/register" 
    && location.pathname !== "/login"
    && !location.pathname.includes("shared")
    ) {      
        console.log("Redirected by browserbar") ;                             
        navigate("/");
    } 
    if (loggedIn === true && location.pathname === "/") {  // jos on kirjautunut sisään, niin heti näkymäntarkistus
        checkDefaultView();
    }
}, [loggedIn]);   // tämä testaamisen perusteella riittää että on riippuvainen tästä 


const handleLogoutClick = (event) => { //   logout nappulan toiminto
    clearToken();        // tokenin poisto
     // setLoggedIn(false);   // login tilan päivitys, todennäköisesti turha koska useEffect tarkistus enivei
    navigate("/");    // todennäkösesti turhaan tässä, koska aiempi useEffect on varmaan jo hoksannut muutoksen ja heittänyt etusivulle
}

const handleShareClick = (event) => {    // share dialogin nappulan toiminto
    handleSaveShareClick();
    setDisplayShareView(displayShareView => !displayShareView);  // toggle displayShareView
  };

const handleShareClose = (event) => {   // share dialogille annettava funktio
    setDisplayShareView(false);
    };

useEffect(() => {
if (loggedIn === false )  {   // näkymä ja napit jos ei ole kirjautunut sisään
    setReturnData(
    <div className='logobar'>
        <div className="buttons">
        <Link to ="/"><button data-testid="sign in" className="navbutton">Home</button></Link>
        <Link to ="/login"><button className="navbutton">Log in</button></Link>
        <Link to ="/register"><button className="navbutton">Sign in</button></Link>
        <Link to ="/showall"><button className="navbutton">Show all</button></Link>
        </div>
        </div>) 
    }
    else  {                 // sisäänkirjautuneen käyttäjän napit, kaksi if ehtoa näytetäänkö share view ja dialogiehto ja kyytiin open ja onClose sekä linkString
        setReturnData(
        <div className='logobar'>
            <div className="buttons">
                <Link to ="/menu"><button className="navbutton">Options</button></Link>
                <button className="navbutton" onClick={handleLogoutClick}>Log out</button>
                {location.pathname==="/menu/view" && (<button className="navbutton" onClick={handleShareClick}>Share view</button>)}
                {location.pathname==="/menu/view" && displayShareView && <AlertDialog open={displayShareView} onClose={handleShareClose} linkString={link} />}
            </div>
        </div>)
    }
}, [loggedIn, setReturnData, location.pathname, displayShareView, link]);    // riippuvainen näistä tiloista ja niiden muutoksista

return (
    <div>
        {returnData}
    </div>
    );

};

export default BrowserBar;
