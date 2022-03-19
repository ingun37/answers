import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { relPath } from "../util";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
function openNewTab(link: string) {
  return () => window.open(link, "_blank");
}
export default function About(props: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="240"
          image={relPath("/profile.JPG")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hello, I'm Ingun
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm a developer living in Korea 🇰🇷. If you have questions please
            contact me. I love to communicate on mathematical topics.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            color="inherit"
            component="span"
            onClick={openNewTab("mailto:ingun37@gmail.com")}
          >
            <EmailIcon />
          </IconButton>

          <IconButton
            color="inherit"
            component="span"
            onClick={openNewTab("https://ingun37.github.io/portfolio/")}
          >
            <PersonIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="span"
            onClick={openNewTab("https://github.com/ingun37/")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component="span"
            onClick={openNewTab("https://www.instagram.com/ingun37/")}
          >
            <InstagramIcon />
          </IconButton>
          <Button
            size="small"
            color="inherit"
            onClick={openNewTab("https://ingun37.github.io/portfolio/")}
          >
            DEV.TO
          </Button>

          <Button
            size="small"
            color="inherit"
            onClick={openNewTab(
              "https://www.linkedin.com/in/ingun-jon-853aa41b2/"
            )}
          >
            LINKED.IN
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}
