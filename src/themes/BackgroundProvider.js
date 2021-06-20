import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
const darkTheme = createMuiTheme({
  palette: {
    background: {
      default: "#030A15",
    },
  },
});

function BackgroundProvider({ children }) {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default BackgroundProvider;
