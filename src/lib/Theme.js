import { createTheme, alpha } from "@mui/material/styles";

const violetBase = "#7F00FF";
const blueBase = "#1a98ec";

const CustomLightTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "ghost" && {
              border: "2px solid #192036",
              color: "#192036",
              "&:hover": {
                color: "#FFF",
              },
            }),
        }),
      },
    },
  },
  palette: {
    contrastThreshold: 1,
    primary: {
      main: alpha(blueBase, 0.7),
      light: alpha(blueBase, 0.5),
      dark: alpha(blueBase, 1.0),
      contrastText: "#fff",
    },
    secondary: {
      main: alpha(violetBase, 0.5),
      light: alpha(violetBase, 0.3),
      dark: alpha(violetBase, 0.9),
    },
    ghost: {
      main: "#FFF",
      light: "#FFF",
      dark: "#192036",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
  },
});

export default CustomLightTheme;
