import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Work Sans",
  },
});

function FontProvider({ children }) {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default FontProvider;
