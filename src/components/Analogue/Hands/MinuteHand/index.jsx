import React from "react";
import "./styles.scss";
export const MinuteHand = ({ angle }) => {
  return (
    <div
      className="minute_hand"
      style={{
        transform: `rotateZ(${angle}deg)`,
      }}
    />
  );
};
