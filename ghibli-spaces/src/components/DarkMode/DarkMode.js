import React, { useContext } from "react";
import "./DarkMode.css";
import ColorContext from "../../contexts/ColorContext";

const DarkMode = () => {
  const color = useContext(ColorContext);

  const handleChangeColor = (e) => {
    color.setColor(e.target.value);
  };

  return (
    <div className="darkmode-container">
      <select
        value={color.color}
        onChange={handleChangeColor}
        style={{ backgroundColor: color.color }}
      >
        <option value="#1d2021">Dark 🕶️</option>
        <option value="#d5c4a1">Light 💡</option>
        <option value="#79740e">Forest 🌳</option>
        <option value="#af3a03">Autumn 🍂</option>
      </select>
    </div>
  );
};

export default DarkMode;
