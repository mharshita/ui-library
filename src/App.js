import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomLightTheme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={CustomLightTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">App</header>
      </div>
    </ThemeProvider>
  );
}

export default App;
