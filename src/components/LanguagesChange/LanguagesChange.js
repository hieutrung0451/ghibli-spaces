import React, { useContext } from "react";
import "./LanguagesChange.css";
import ColorContext from "../../contexts/ColorContext";

const LanguagesChange = (props) => {
  const color = useContext(ColorContext);

  function handleChangeLanguage(e) {
    props.setTrans.changeLanguage(e.target.value);
  }

  return (
    <nav>
      <select
        onChange={handleChangeLanguage}
        style={{ backgroundColor: color.color }}
      >
        <option value="en">en</option>
        <option value="vn">vn</option>
        <option value="jp">jp</option>
      </select>
    </nav>
  );
};

export default LanguagesChange;
