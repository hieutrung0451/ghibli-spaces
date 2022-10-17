import React, { useState } from "react";
import "./App.css";
import Spaces from "./components/Spaces/Spaces";
import Video from "./components/Video/Video";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Todo from "./components/TodoList/Todo";
import DarkMode from "./components/DarkMode/DarkMode";
import ColorContext from "./contexts/ColorContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const App = () => {
  const [color, setColor] = useState("#1d2021");
  const handle = useFullScreenHandle();

  return (
    <div className="app">
      <div>
        <FullScreen handle={handle}>
          <ColorContext.Provider value={{ color: color, setColor: setColor }}>
            <Spaces />
            <Video />
            <Pomodoro />
            <Todo />
            <DarkMode />
            <button
              onClick={handle.enter}
              style={{ position: "absolute", top: "1px", right: "12px" }}
            >
              Enter fullscreen
            </button>
          </ColorContext.Provider>
        </FullScreen>
      </div>
    </div>
  );
};

export default App;
