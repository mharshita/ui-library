import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CustomCard = ({ header, content, footer, variant }) => {
  return (
    <Card raised={variant === "elevated" ? true : false}>
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
  );
};

export default CustomCard;
