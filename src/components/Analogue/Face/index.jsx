import React from "react";
import { HourHand, MinuteHand, SecondsHand } from "../Hands";
import { NumbersFace } from "../Numbers";
import { CenterPin } from "../CenterPin";
import "./styles.scss";

export const Face = ({ hoursAngle, minutesAngle, secondsAngle }) => {
  return (
    <div className="clock_face">
      <HourHand angle={hoursAngle} />
      <MinuteHand angle={minutesAngle} />
      <SecondsHand angle={secondsAngle} />
      <NumbersFace />
      <CenterPin />
    </div>
  );
};
