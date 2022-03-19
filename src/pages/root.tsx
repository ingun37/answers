import * as React from "react";
import Recursive from "./recursive";
import { Helmet } from "react-helmet";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Root() {
  const sha1 =
    new URLSearchParams(window.location.search).get("sha1") ??
    "dd8f38a85ee36fa036f3e298e265dd4bb35cad21";
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Answers to Math Books
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <Helmet defer={false}>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.js"
          integrity="sha384-0fdwu/T/EQMsQlrHCCHoH10pkPLlKA1jL5dFyUOvB3lfeT2540/2g6YgSi2BL14p"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Recursive sha1={sha1} />
    </div>
  );
}
