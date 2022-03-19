import * as React from "react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { sha1Slice } from "../state/slice";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
      <Box sx={{ width: "100%", my: 2 }}>
        <Stack spacing={2} alignItems={"center"}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            value={url.toString()}
            sx={{ width: 300, mx: 2 }}
          />
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(url.toString());
              }}
            >
              Copy
            </Button>
            <Button
              onClick={() => {
                if (navigator.share)
                  navigator.share({
                    title: "My Answers to Math Books",
                    url: url.toString(),
                  });
              }}
            >
              Share
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Dialog>
  );
}
