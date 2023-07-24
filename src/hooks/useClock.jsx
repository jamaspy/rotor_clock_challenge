import { useState, useEffect } from "react";

export const useClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Digital Clock
  const seconds =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();

  // Analogue Clock
  const secondsRatio = seconds / 60;
  const minutesRatio = (secondsRatio + minutes) / 60;
  const hoursRatio = (minutesRatio + hours) / 12;

  const secondsAngle = secondsRatio * 360;
  const minutesAngle = minutesRatio * 360;
  const hoursAngle = hoursRatio * 360;

  return {
    seconds,
    minutes,
    hours,
    secondsAngle,
    minutesAngle,
    hoursAngle,
  };
};
