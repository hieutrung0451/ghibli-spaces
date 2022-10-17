import { useContext, useEffect, useState } from "react";
import React from "react";
import "./Pomodoro.css";
import ColorContext from "../../contexts/ColorContext";

const STATUS = {
  pause: 0,
  start: 1,
  default: 2,
};

const Pomorodo = () => {
  const [minutes, setMinutes] = React.useState(25);
  const [seconds, setSeconds] = React.useState(0);
  const [displayMessage, setDisplayMessage] = React.useState(false);
  const [status, setStatus] = React.useState(STATUS.default);
  const intervalRef = React.useRef();
  const color = useContext(ColorContext);

  function countDown() {
    if (seconds === 0) {
      if (minutes !== 0) {
        setSeconds(59);
        setMinutes((min) => min - 1); // try using callback form to prevent stale data
      } else {
        let mins = displayMessage ? 24 : 4;
        let sec = 59;
        setSeconds(sec);
        setMinutes(mins);
        setDisplayMessage((value) => !value); // try using callback form to prevent stale data
      }
    } else {
      setSeconds((sec) => sec - 1); // try using callback form to prevent stale data
    }
  }

  React.useEffect(() => {
    if (status === STATUS.start) {
      intervalRef.current = setInterval(() => {
        countDown();
      }, 1000);
    } else if (status === STATUS.pause && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [minutes, seconds, status]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const start = () => setStatus(STATUS.start);
  const pause = () => setStatus(STATUS.pause);

  const Reset = () => {
    setSeconds(0);
    setMinutes(25);
  };

  return (
    <div className="container" style={{ backgroundColor: color.color }}>
      <div className="header">Timer</div>
      <div className="body">
        <div className="time">
          <p id="timer">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
        </div>
        <div className="option">
          <button
            onClick={start}
            className="btn-pomodoro btn-start"
            style={{ backgroundColor: color.color }}
          >
            Start
          </button>
          <div className="more-option">
            <button
              onClick={pause}
              className="btn-pomodoro"
              style={{ backgroundColor: color.color }}
            >
              Pause
            </button>
            <button
              onClick={Reset}
              className="btn-pomodoro"
              style={{ backgroundColor: color.color }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomorodo;
