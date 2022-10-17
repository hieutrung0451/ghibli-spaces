import React, { useContext, useEffect, useState } from "react";
import ColorContext from "../../contexts/ColorContext";
import "./SpacesButton.css";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  audio.volume = 0.5;
  audio.loop = true;

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const SpacesButton = (props) => {
  const [playing, toggle] = useAudio(props.url);
  const color = useContext(ColorContext);

  return (
    <div>
      <button
        className="spaces-btn"
        value={props.value}
        onClick={toggle}
        style={{
          backgroundColor: playing ? "rgba(69, 70, 72, 0.95)" : color.color,
        }}
      >
        {playing}
        {props.icon}
      </button>
    </div>
  );
};

export default SpacesButton;
