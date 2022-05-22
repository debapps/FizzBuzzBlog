import React from "react";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";

export default function ToastAlert(props) {
  // De-structure the alert properties.
  const { show, type, message } = props.alert;

  return (
    show && (
      <Collapse in={`${show}`}>
        <Alert severity={`${type}`}>{message}</Alert>
      </Collapse>
    )
  );
}
