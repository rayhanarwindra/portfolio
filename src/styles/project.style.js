import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    margin: "10px 50px",
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none"
  },
  codeBtn: {
    textTransform: "none",
    borderRadius: "15px",
    padding: "3px 14px",
    fontSize: "1.1rem",
    backgroundImage: "linear-gradient(to top right, #6A53FB, #6C86FA)",
  },
  appBtn: {
    textTransform: "none",
    borderRadius: "15px",
    padding: "3px 14px",
    fontSize: "1.1rem",
    backgroundImage: "linear-gradient(to top right, #D201F4, #BD0071)",
  },
  title: {
      fontWeight: "bold",
  }
});

export default useStyles;
