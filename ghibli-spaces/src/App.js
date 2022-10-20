import React, { useState } from "react";
import "./App.css";
import Spaces from "./components/Spaces/Spaces";
import Video from "./components/Video/Video";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Todo from "./components/TodoList/Todo";
import DarkMode from "./components/DarkMode/DarkMode";
import LanguagesChange from "./components/LanguagesChange/LanguagesChange";
import Homepage from "./components/Homepage/Homepage";
import ColorContext from "./contexts/ColorContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsArrowsFullscreen } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { useTranslation } from "react-i18next";
import { Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ghibli-spaces" element={<Main />} />
      </Routes>
    </div>
  );
};

const Main = () => {
  const [color, setColor] = useState("#1d2021");
  const handle = useFullScreenHandle();
  const { t, i18n } = useTranslation();
  return (
    <div>
      <FullScreen handle={handle}>
        <ColorContext.Provider value={{ color: color, setColor: setColor }}>
          <Spaces translation={t} />
          <Video />
          <Pomodoro translation={t} />
          <Todo translation={t} />
          <DarkMode />
          <button
            onClick={handle.enter}
            className="btn-fullscreen"
            style={{ backgroundColor: color }}
          >
            <BsArrowsFullscreen />
          </button>
          <button className="btn-exit" style={{ backgroundColor: color }}>
            <NavLink to="/">
              <ImExit />
            </NavLink>
          </button>
          <LanguagesChange setTrans={i18n} />
        </ColorContext.Provider>
      </FullScreen>
    </div>
  );
};

export default App;
