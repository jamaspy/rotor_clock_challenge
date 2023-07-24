import React from "react";
import "./styles.scss";

export const NumbersFace = () => {
  const radius = 50;
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="numbers_container">
      {hours.map((hour) => {
        // Convert the hour to angle
        const angle = (hour / 12) * 2 * Math.PI;
        const x = radius + radius * Math.sin(angle);
        const y = radius - radius * Math.cos(angle);

        return (
          <p
            key={hour}
            className="hour"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            {hour}
          </p>
        );
      })}
    </div>
  );
};
