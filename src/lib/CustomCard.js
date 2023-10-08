import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { customTheme } from "./Theme";
import PropTypes from "prop-types";

const CustomCard = ({ header, content, footer, variant }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Card
        raised={variant === "elevated" ? true : false}
        sx={{ width: "fit-content", maxWidth: "20em" }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
        >
          <Typography variant="h4" component="div">
            {header}
          </Typography>
          <Typography variant="body2">{content}</Typography>
          <Typography variant="body2" color="text.secondary">
            {footer}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

CustomCard.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string,
  variant: PropTypes.oneOf(["elevated", "flat"]),
};

export default CustomCard;
