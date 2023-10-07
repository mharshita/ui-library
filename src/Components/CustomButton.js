import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const CustomButton = ({ text, color, isLoading }) => {
  return (
    <Button color={color} variant="contained" disableElevation="true">
      {isLoading ? <CircularProgress color="inherit" size="2em" /> : text}
    </Button>
  );
};

export default CustomButton;
