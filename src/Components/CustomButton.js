import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ text, color }) => {
  return (
    <Button color={color} variant="contained" disableElevation="true">
      {text}
    </Button>
  );
};

export default CustomButton;
