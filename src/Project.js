import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles/project.style";

function Project({ image, title, description, techStack, codeUrl, appUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia style={{ height: "250px" }} image={image} />
      <CardContent>
        <Typography className={classes.title} paragraph variant="h4">
          {title}
        </Typography>
        <Typography paragraph variant="body2">
          {description}
        </Typography>
        <Typography paragraph variant="body2">
          Tools: {techStack}
        </Typography>
      </CardContent>
      <CardActions>
        {codeUrl && (
          <Button
            target="_blank"
            href={codeUrl}
            className={classes.codeBtn}
            variant="contained"
            color="primary"
          >
            View Code
          </Button>
        )}

        <Button
          target="_blank"
          href={appUrl}
          className={classes.appBtn}
          color="primary"
          variant="contained"
        >
          View App
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project;
