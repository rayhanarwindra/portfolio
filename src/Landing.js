import { Typography } from "@material-ui/core";
import useStyles from "./styles/landing.style";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";

function Landing({ executeScroll }) {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography className={classes.heading} variant="h2" paragraph>
        Hi! I'm Rayhan Arwindra 👋
      </Typography>
      <Typography paragraph variant="h3" className={classes.subtitle}>
        Student, and Aspiring Software Engineer
      </Typography>
      <div className={classes.prompt}>
        <Typography variant="h6">See My Works</Typography>
        <IconButton onClick={executeScroll}>
          <ExpandMoreIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
}

export default Landing;
