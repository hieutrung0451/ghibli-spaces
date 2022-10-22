import React, { useState } from "react";
import "./ToolsItem.css";

const ToolsItem = (props) => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <div>
      <div
        className="tool-btn"
        onClick={() => {
          setShow(!show);
          setClick(!click);
        }}
      >
        <div className="tool-icon" style={{ color: click ? "wheat" : "#fff" }}>
          {props.icon}
        </div>
        <span>{props.title}</span>
      </div>

      {show && props.children}
    </div>
  );
};

export default ToolsItem;
