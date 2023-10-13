import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";
import Infrastructure from "./components/Infrastructure";

function App() {
const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(353, 100%, 62%)",
      dark: "hsl(356, 100%, 66%)",
      light: "hsl(13, 100%, 72%)"
    },
    secondary: {
      dark: "hsl(237, 23%, 32%)",
      main: "hsl(237, 17%, 21%)",
      light: "hsl(207, 13%, 34%)"
    }

  }
})


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box
      boxSizing="border-box"
      >
      <Hero/>
      <About/>
      <Infrastructure/>
      </Box>
  </ThemeProvider>
  );
}

export default App;
