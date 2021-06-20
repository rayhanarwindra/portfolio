import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    color: "white",
    marginTop: "12%",
    width: "100%",
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
  },
  heading: {
    fontWeight: "bold",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  },
  subtitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
    },
  },
  prompt: {
    textAlign: "center",
    marginTop: "11%",
  },
  icon: {
    color: "white",
  },
}));

export default useStyles;
