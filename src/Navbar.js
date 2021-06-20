import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from './styles/navbar.style';
import GetAppIcon from '@material-ui/icons/GetApp';
import Resume from './documents/resume.pdf';

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rayhan Arwindra
          </Typography>
          <Button href={Resume} target="_blank" endIcon={<GetAppIcon />} className={classes.button} color="primary" variant="contained">View Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
