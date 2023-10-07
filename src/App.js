import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomLightTheme from "./Theme";

//------------------component imports------------------
// import CustomButton from "./Components/CustomButton.js";
import CustomCard from "./Components/CustomCard.js";

function App() {
  return (
    <ThemeProvider theme={CustomLightTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          {/* <CustomButton color="ghost" text="harshita" /> */}
          <CustomCard
            header="This is header"
            content="this is content"
            footer="this is footer"
            variant="flat"
          />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
