import { Face as AnalogueFace } from "./components/Analogue/Face";
import { DigitalDisplay } from "./components/Digital";
import { useClock } from "./hooks/useClock";
import "./App.scss";
const App = () => {
  const { seconds, minutes, hours, secondsAngle, minutesAngle, hoursAngle } =
    useClock();

  return (
    <div className="container">
      <AnalogueFace
        hoursAngle={hoursAngle}
        minutesAngle={minutesAngle}
        secondsAngle={secondsAngle}
      />

      <DigitalDisplay hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};

export default App;
