import { Box, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";

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
      <Box
      boxSizing="border-box"
      >
      <Navbar />
      </Box>
  </ThemeProvider>
  );
}

export default App;
