import * as React from "react";
import { useEffect, useState } from "react";
import Recursive from "./recursive";
import { Helmet } from "react-helmet";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareDialogue from "./share-dialogue";
import { ThemeProvider } from "@mui/material";
import { commonTheme } from "../theme";
import { fetchSha1, openSha1, relURL } from "../util";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TreeTemT } from "../decoders";
import About from "./about";

const rootSha1 = "dd8f38a85ee36fa036f3e298e265dd4bb35cad21";
export default function Root() {
  const [rootTem, setRootTem] = useState<TreeTemT | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  let sha1 = "";
  if (typeof window !== "undefined") {
    sha1 = new URLSearchParams(window.location.search).get("sha1") ?? rootSha1;
  }

  useEffect(() => {
    fetchSha1(sha1).then(setRootTem);
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {sha1 !== rootSha1 && (
            <IconButton
              color="inherit"
              // variant={"outlined"}
              component="span"
              onClick={() => {
                if (rootTem) openSha1(rootTem.parentSha1);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => (window.location.href = relURL().toString())}
            style={{ cursor: "pointer" }}
          >
            {sha1 === rootSha1
              ? "My Answers to Math Books"
              : rootTem?.item.title ?? ""}
          </Typography>
          <Button color="inherit" onClick={() => setAboutOpen(true)}>
            About
          </Button>
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
      <ThemeProvider theme={commonTheme}>
        <Recursive sha1={sha1} />
        <ShareDialogue />
        <About open={aboutOpen} onClose={() => setAboutOpen(false)} />
      </ThemeProvider>
    </div>
  );
}
