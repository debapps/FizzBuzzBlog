import { Types } from "mongoose";
import { useState } from "react";
import AlertContext from "./alertContext";

export default function AlertState(props) {
  // Alert State hook.
  const [alertObj, setAlertObj] = useState({
    show: false,
    type: "info",
    message: null,
  });

  // This function shows the alert.
  function showAlert(type, message) {
    setAlertObj({
      show: true,
      type: type,
      message: message,
    });

    // Fade the alert after 1.5s.
    setTimeout(() => {
      setAlertObj({
        show: false,
        type: "info",
        message: null,
      });
    }, 1500);
  }

  return (
    <AlertContext.Provider value={{ alertObj, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
}
