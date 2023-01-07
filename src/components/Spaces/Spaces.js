import React, { useContext } from "react";
import "./Spaces.css";
import SpacesButton from "./SpacesButton";
import Media from "./Media";
import Clock from "./Clock";
import camp from "../../assets/sounds/camp.wav";
import study from "../../assets/sounds/study.wav";
import code from "../../assets/sounds/coding.wav";
import coffee from "../../assets/sounds/coffee.wav";
import train from "../../assets/sounds/train.wav";
import wind from "../../assets/sounds/wind.wav";
import windChimes from "../../assets/sounds/wind-chimes.wav";
import cat from "../../assets/sounds/cat.wav";
import art from "../../assets/sounds/art.wav";
import bird from "../../assets/sounds/bird.wav";
import tea from "../../assets/sounds/tea.wav";
import ocean from "../../assets/sounds/ocean.wav";
import ColorContext from "../../contexts/ColorContext";

const Spaces = (props) => {
  const color = useContext(ColorContext);

  return (
    <div className="spaces-container" style={{ backgroundColor: color.color }}>
      <div className="title-container">
        <span className="spaces-title">Spaces 🍁</span>
        <Clock />
      </div>
      <p className="spaces-desc">
        Click an emoji multiple times for more content
      </p>
      <div className="button-container">
        <SpacesButton icon="📚" url={study} type="audio/wav" />
        <SpacesButton icon="☕" url={coffee} type="audio/wav" />
        <SpacesButton icon="💻" url={code} type="audio/wav" />
        <SpacesButton icon="🚂" url={train} type="audio/wav" />
        <SpacesButton icon="️🎨" url={art} type="audio/wav" />
        <SpacesButton icon="⛺" url={camp} type="audio/wav" />
        <SpacesButton icon="🐈" url={cat} type="audio/wav" />
        <SpacesButton icon="🎐" url={windChimes} type="audio/wav" />
        <SpacesButton icon="🍃" url={wind} type="audio/wav" />
        <SpacesButton icon="🐦" url={bird} type="audio/wav" />
        <SpacesButton icon="🍵" url={tea} type="audio/wav" />
        <SpacesButton icon="🌊" url={ocean} type="audio/wav" />
      </div>
      <Media />
    </div>
  );
};

export default Spaces;
