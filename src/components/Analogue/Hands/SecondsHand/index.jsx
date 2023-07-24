import React from "react";
import "./styles.scss";
export const SecondsHand = ({ angle }) => {
  return (
    <div
      className="seconds_hand"
      style={{
        transform: `rotateZ(${angle}deg)`,
      }}
    />
  );
};
