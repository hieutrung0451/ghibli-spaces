import React, { useState } from "react";
import "./App.css";
import Spaces from "./components/Spaces/Spaces";
import Video from "./components/Video/Video";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Todo from "./components/TodoList/Todo";
import DarkMode from "./components/DarkMode/DarkMode";
import ColorContext from "./contexts/ColorContext";

const App = () => {
  const [color, setColor] = useState("#1d2021");

  return (
    <div className="app">
      <ColorContext.Provider value={{ color: color, setColor: setColor }}>
        <Spaces />
        <Video />
        <Pomodoro />
        <Todo />
        <DarkMode />
        <Language />
      </ColorContext.Provider>
    </div>
  );
};

export default App;
