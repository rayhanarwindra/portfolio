import useStyles from "./styles/app.style";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Theme from "./styles/theme.style";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.body}>
        <Navbar />
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
