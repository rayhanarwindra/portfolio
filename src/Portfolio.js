import Pilar from "./images/pilar.png";
import MyWeather from "./images/myweather.png";
import Project from "./Project";
import { Grid } from "@material-ui/core";
import useStyles from "./styles/portfolio.style";

function Portfolio() {
  const classes = useStyles();  
  const projects = [
    {
      image: Pilar,
      title: "Pilar Admin Website",
      description:
        "An administrator website for industri pilar, displaying from and sending data to a REST API server.",
      techStack: "React.js, Material UI, React Context API, React Router",
      codeUrl: "",
      appUrl: "https://www.industripilar.com/",
    },
    {
      image: MyWeather,
      title: "My Weather",
      description:
        "A personal project to create a website which displays weather data from a city or country.",
      techStack: "React.js, React Bootstrap, Open Weather API",
      codeUrl: "https://github.com/rayhanarwindra/myweather",
      appUrl: "https://myweatherwebsite.netlify.app/",
    },
  ];

  return (
    <Grid container className={classes.body}>
      {projects.map((p, i) => (
        <Grid key={i} item md={6} xs={12}>
          <Project {...p} />
        </Grid>
      ))}
    </Grid>
  );
}
export default Portfolio;
