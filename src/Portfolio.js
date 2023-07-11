import Pilar from "./images/pilar.png";
import MyWeather from "./images/myweather.png";
import Growcery from "./images/growcery.png";
import BeliGrosir from "./images/beligrosir.png";
import Calculator from "./images/calculator.png"
import Project from "./Project";
import { Grid } from "@material-ui/core";
import useStyles from "./styles/portfolio.style";

function Portfolio({ refProp }) {
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
    {
      image: Growcery,
      title: "Growcery",
      description:
        "An e-commerce website for users to buy produce directly from farmers.",
      techStack: "Next.js, Sass, Material UI",
      codeUrl: "https://github.com/decompile-growcery/decompile-fe",
      appUrl: "https://growcery-decompile.vercel.app/",
    },
    {
      image: BeliGrosir,
      title: "BeliGrosir",
      description:
        "An e-commerce website for users to buy items in bulk. Created for GarudaHacks Hackathon 2021.",
      techStack: "Next.js, React Bootstrap",
      codeUrl: "https://github.com/BeliGrosir/frontend",
      appUrl: "https://beligrosir.vercel.app/",
    },
    {
      image: Calculator,
      title: "Calculator App",
      description:
        "A calculator app to compare between options and composition API in Vue 3",
      techStack: "Vue 3, Options API, Composition API",
      codeUrl: "https://github.com/rayhanarwindra/option-composition",
      appUrl: "https://options-composition.netlify.app/",
    },
  ];

  return (
    <>
      <h1 ref={refProp} className={classes.text}>My Projects</h1>
      <Grid container className={classes.body}>
        {projects.map((p, i) => (
          <Grid key={i} item md={6} xs={12}>
            <Project {...p} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Portfolio;
