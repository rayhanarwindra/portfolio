import { Typography } from "@material-ui/core";
import useStyles from "./styles/footer.style";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import SocialMedia from "./SocialMedia";

function Footer() {
  const classes = useStyles();
  const socialMedias = [
    {
      icon: <EmailIcon />,
      url: "mailto:rayhan.arwindra@gmail.com",
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/rayhanarwindra",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/rayhan-arwindra/",
    },
  ];
  return (
    <footer className={classes.footer}>
      {socialMedias.map((s, i) => (
        <SocialMedia key={i} {...s} />
      ))}
      <Typography align="center" variant="h6">
        &#169; {new Date().getFullYear()} Rayhan Arwindra
      </Typography>
    </footer>
  );
}

export default Footer;
