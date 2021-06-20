import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  appbar: {
    border: "none",
    boxShadow: "none",
  },
  button: {
    marginRight: "25px",
    textTransform: "none",
    borderRadius: "15px",
    padding: "3px 14px",
    fontSize: "1.1rem",
    backgroundImage: "linear-gradient(to top right, #6A53FB, #6C86FA)",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
      padding: "0 8px",
      fontSize: "1.1rem",
    },
  },
}));

export default useStyles;
