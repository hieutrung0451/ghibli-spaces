import "./Language.css";
import React, { useContext } from "react";
import ColorContext from "../../contexts/ColorContext";

const Language = (props) => {
  const color = useContext(ColorContext);

  const handleChangeLang = (e) => {
    props.setTrans.changeLanguage(e.target.value);
  };

  return (
    <div className="lang">
      <select
        value={color.color}
        style={{ backgroundColor: color.color }}
        onChange={handleChangeLang}
      >
        <option value="en">English</option>
        <option value="fr">France</option>
      </select>
    </div>
  );
};

export default Language;
