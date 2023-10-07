import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomLightTheme from "../Theme";
import PropTypes from "prop-types";

const CustomButton = ({ text, color, isLoading, onClick, fullWidth, size }) => {
  return (
    <ThemeProvider theme={CustomLightTheme}>
      <CssBaseline />
      <Button
        color={color}
        variant="contained"
        disableElevation="true"
        onClick={onClick}
        fullWidth={fullWidth}
        size={size}
      >
        {isLoading ? <CircularProgress color="inherit" size="2em" /> : text}
      </Button>
    </ThemeProvider>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default CustomButton;
