import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";

export default function ShareDialogue(props: {
  closeHandler: () => void;
  open: boolean;
  sha1: string;
}) {
  const { open, closeHandler } = props;

  const url = new URL(window.location.origin);
  url.searchParams.append("sha1", props.sha1);

  return (
    <Dialog onClose={closeHandler} open={open}>
      <DialogTitle>Set backup account</DialogTitle>

      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={url.toString()}
      />
    </Dialog>
  );
}
