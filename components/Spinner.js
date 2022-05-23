import React from "react";
import { SpinnerDiamond } from "spinners-react";

export default function Spinner() {
  return (
    <div className="absolute top-1/2 left-1/2">
      <SpinnerDiamond
        size={70}
        thickness={130}
        speed={121}
        color="rgba(170, 57, 172, 1)"
        secondaryColor="rgba(81, 57, 172, 0.62)"
      />
    </div>
  );
}
