import React from "react";
import "./styles.scss";
export const DigitalDisplay = ({ seconds, minutes, hours }) => {
  return (
    <div className="digital_display">
      <p>{hours}:</p>
      <p>{minutes}:</p>
      <p>{seconds}</p>
    </div>
  );
};
