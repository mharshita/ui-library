import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomLightTheme from "./Theme";
import CustomButton from "./Components/CustomButton.js";

function App() {
  return (
    <ThemeProvider theme={CustomLightTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <CustomButton color="ghost" text="harshita" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
