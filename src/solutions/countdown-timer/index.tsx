import { useRef, useState } from "react";
import { getFormattedNumber } from "./utils";

const TIMER_DELAY = 1000;

const CountDownTimer = () => {
  const [inputMinutes, setInputMinutes] = useState(0);
  const currentSecondRef = useRef<number>(0);
  const currentMinuteRef = useRef<number>(0);
  const currentHourRef = useRef<number>(0);
  const intervalIdRef = useRef<number>(0);
  const [timer, setTimer] = useState(getCurrentTime());
  const [isTimerActive, setIsTimerActive] = useState(false);

  return (
    <div className="flex m-4">
      <div className="flex flex-col">
        <p className="text-6xl">CountDownTimer</p>
        <input
          type="number"
          onChange={onChangeInputMinutes}
          className="mt-10 text-6xl border rounded-xl"
          value={inputMinutes || ""}
        />
        <button
          onClick={onClickPlay}
          className="p-2 mt-10 text-6xl border disabled:bg-slate-200 rounded-xl"
          disabled={isTimerActive}
        >
          Play
        </button>
        <button
          onClick={onClickPause}
          className="p-2 mt-10 text-6xl border disabled:bg-slate-200 rounded-xl"
          disabled={!isTimerActive}
        >
          Pause
        </button>
        <button
          onClick={onClickReset}
          className="p-2 mt-10 text-6xl border rounded-xl"
        >
          Reset
        </button>

        <p className="mt-10 text-6xl">{timer}</p>
      </div>
    </div>
  );

  function onChangeInputMinutes(event: React.ChangeEvent<HTMLInputElement>) {
    const inputMinutes = Number(event.target.value);
    setInputMinutes(inputMinutes);
    currentMinuteRef.current = inputMinutes % 60;
    currentHourRef.current = Math.floor(inputMinutes / 60);
    setTimer(getCurrentTime());
  }

  function onClickPlay() {
    intervalIdRef.current = setInterval(updateTimer, TIMER_DELAY);
    setIsTimerActive(true);
  }

  function onClickPause() {
    clearInterval(intervalIdRef.current);
    setIsTimerActive(false);
  }

  function onClickReset() {
    currentSecondRef.current = 0;
    currentMinuteRef.current = 0;
    currentHourRef.current = 0;
    setTimer(getCurrentTime());
    setInputMinutes(0);
  }

  function getCurrentTime() {
    return `${getFormattedNumber(currentHourRef.current)}:${getFormattedNumber(
      currentMinuteRef.current
    )}:${getFormattedNumber(currentSecondRef.current)}`;
  }

  function updateTimer() {
    if (currentSecondRef.current === 0) {
      if (currentMinuteRef.current > 0) {
        currentMinuteRef.current = currentMinuteRef.current - 1;
        currentSecondRef.current = 59;
      } else if (currentMinuteRef.current === 0) {
        if (currentHourRef.current > 0) {
          currentHourRef.current = currentHourRef.current - 1;
          currentMinuteRef.current = 59;
          currentSecondRef.current = 59;
        } else if (currentHourRef.current === 0) {
          clearInterval(intervalIdRef.current);
        }
      }
    } else {
      currentSecondRef.current = currentSecondRef.current - 1;
    }
    setTimer(getCurrentTime());
  }
};

export default CountDownTimer;
