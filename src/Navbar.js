import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from './styles/navbar.style';

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rayhan Arwindra
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
