import React, { useState } from "react";
import "./App.css";
import Spaces from "./components/Spaces/Spaces";
import Video from "./components/Video/Video";
import Tools from "./components/Tools/Tools";
import DarkMode from "./components/DarkMode/DarkMode";
import LanguagesChange from "./components/LanguagesChange/LanguagesChange";
import ColorContext from "./contexts/ColorContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const App = () => {
  const [color, setColor] = useState("#1d2021");
  const handle = useFullScreenHandle();
  const { t, i18n } = useTranslation();
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <div className="app">
      <FullScreen handle={handle}>
        <ColorContext.Provider value={{ color: color, setColor: setColor }}>
          <Spaces translation={t} />
          <Video />
          <Tools translation={t} />
          <DarkMode />
          <div
            onClick={() => {
              setFullscreen(!fullscreen);
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
          <LanguagesChange setTrans={i18n} />
        </ColorContext.Provider>
      </FullScreen>
    </div>
  );
};

export default App;
