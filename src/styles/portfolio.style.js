import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0 80px",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  text : {
    margin: "15px 0 30px",
    color: "white",
    textAlign: "center"
  }
}));

export default useStyles;
