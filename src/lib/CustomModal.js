import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomLightTheme from "./Theme";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function isValid(str) {
  str = str.trim();

  if (str.length > 0) {
    return true;
  }

  return false;
}

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const CustomModal = ({ open, handleClose, header, content, buttonText }) => {
  return (
    <ThemeProvider theme={CustomLightTheme}>
      <CssBaseline />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        aria-labelledby="draggable-dialog-title"
        PaperComponent={PaperComponent}
      >
        <DialogTitle>{header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        {buttonText && isValid(buttonText) ? (
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              {buttonText}
            </Button>
          </DialogActions>
        ) : (
          ""
        )}
      </Dialog>
    </ThemeProvider>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
};

export default CustomModal;
