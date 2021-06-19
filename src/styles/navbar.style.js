import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: "bold"
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
      backgroundImage: "linear-gradient(to top right, #6A53FB, #6C86FA)"
  }
}));

export default useStyles;