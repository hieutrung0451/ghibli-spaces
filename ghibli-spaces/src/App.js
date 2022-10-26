import React, { useState } from "react";
import "./App.css";
import Spaces from "./components/Spaces/Spaces";
import Video from "./components/Video/Video";
import Tools from "./components/Tools/Tools";
import DarkMode from "./components/DarkMode/DarkMode";
import LanguagesChange from "./components/LanguagesChange/LanguagesChange";
import Homepage from "./components/Homepage/Homepage";
import ColorContext from "./contexts/ColorContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
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
  const [fullscreen, setFullsceen] = useState(true);
  return (
    <div>
      <FullScreen handle={handle}>
        <ColorContext.Provider value={{ color: color, setColor: setColor }}>
          <Spaces translation={t} />
          <Video />
          <Tools translation={t} />
          <DarkMode />

          <div
            onClick={() => {
              setFullsceen(!fullscreen);
            }}
          >
            {fullscreen ? (
              <button
                onClick={handle.enter}
                className="btn-fullscreen"
                style={{ backgroundColor: color }}
              >
                <BsArrowsFullscreen />
              </button>
            ) : (
              <button
                onClick={handle.exit}
                className="btn-fullscreenExit"
                style={{ backgroundColor: color }}
              >
                <BsFullscreenExit />
              </button>
            )}
          </div>

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
