import { Typography } from "@material-ui/core";
import useStyles from "./styles/landing.style";

function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <Typography className={classes.heading} variant="h2" paragraph>
        Hi! I'm Rayhan Arwindra 👋
      </Typography>
      <Typography  variant="h3" className={classes.subtitle}>
          Student, and Aspiring Software Engineer
      </Typography>
    </div>
  );
}

export default Landing;
