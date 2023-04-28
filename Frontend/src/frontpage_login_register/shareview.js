 import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 as uuidv4 } from 'uuid';
import { getToken } from "../frontpage_login_register/tokenStorage";

export default function AlertDialog(props) {  // Vaihdoin ottamaan tätä kutsuvasta ikkunasta funktiot
  const {open, onClose, viewString} = props;
  const [showLink , setShowLink] = useState(false);
  const [link, setLink] = useState("");

  function createLink(viewID){
    return "http://localhost:3000/shared/" + viewID.toString();
  }
  
  const handleSaveShareClick = async(event) => { 
    let viewId = uuidv4(); // Tämä tallennusnappi olis hyvä olla tässä, eka painetaan tallennusnappia ja sitten printataan linkki
    const response = await fetch('http://localhost:8080/savedviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken(),
      },
      body: JSON.stringify({
        viewId: viewId,
        viewstring: viewString,
      })
    });
    if (response.status === 200) {
      console.log(response.status);
      setShowLink(true); // linkki esiin
      setLink(createLink(viewId)); // linkki talteen
    }
    else {
      console.log(response.status);
    }
  }



  // esimerkki linkin laittamisesta esiin
  // {showLink !== "" &&(<div> <p> {link} </p> </div>)}
  // {showLink === "" &&(<Button onClick={handleSaveShareClick}>Save</Button>)}  

  // pitää tarkistaa että nollautuuko tila jos ikkunan sulkee ja avaa uudelleen
  // jos ei nollaudu niin pitää miettiä pidemmälle miten nollautuis
  // kans pitää tarkistaa että vaihtuu nappi pois ja tuleeko se linkki esille...
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Here is your link to share your view: 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

