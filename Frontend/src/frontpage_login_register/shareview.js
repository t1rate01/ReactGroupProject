import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  const { open, onClose, linkString } = props;
  const [linkCopiedMessage, setLinkCopiedMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkString).then(
      () => {
        console.log("Link copied to clipboard!");
        setLinkCopiedMessage("Link Copied!");
        setTimeout(() => {
          setLinkCopiedMessage("");
        }, 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="linkdialog">
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Here is your link to share your view: {linkString || "No link available"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={copyToClipboard} className="linkdialog button">
            Copy Link
          </Button>
          <span>{linkCopiedMessage}</span>
          <Button onClick={onClose} className="linkdialog button">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
