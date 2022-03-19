import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { sha1Slice } from "../state/slice";

export default function ShareDialogue() {
  const shareSha1 = useAppSelector((state) => state.sha1.sha1);
  const dispatch = useAppDispatch();

  const url = new URL(window.location.origin);
  url.searchParams.append("sha1", shareSha1);

  return (
    <Dialog
      open={shareSha1 !== ""}
      onClose={() => dispatch(sha1Slice.actions.setSha1(""))}
    >
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
