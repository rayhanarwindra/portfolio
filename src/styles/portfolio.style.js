import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0 80px",
    margin: "20px 0",
    [theme.breakpoints.down('sm')]:{
      padding: "0 20px"
    }
  },
}));

export default useStyles;
