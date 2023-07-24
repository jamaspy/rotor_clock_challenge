import React from "react";
import "./styles.scss";
export const HourHand = ({ angle }) => {
  return (
    <div
      className="hand hour_hand"
      style={{
        transform: `rotateZ(${angle}deg)`,
      }}
    />
  );
};
