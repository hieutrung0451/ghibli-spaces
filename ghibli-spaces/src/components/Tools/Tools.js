import React, { useContext } from "react";
import "./Tools.css";
import Pomodoro from "../Pomodoro/Pomodoro";
import Todo from "../TodoList/Todo";
import ColorContext from "../../contexts/ColorContext";
import ToolsItem from "./ToolsItem";
import { BiTime } from "react-icons/bi";
import { BsListCheck } from "react-icons/bs";

const Tools = (props) => {
  const color = useContext(ColorContext);
  return (
    <div className="container-tools" style={{ backgroundColor: color.color }}>
      <ToolsItem icon={<BiTime />} title="Timer">
        <Pomodoro translation={props.translation} />
      </ToolsItem>
      <ToolsItem icon={<BsListCheck />} title="Todo">
        <Todo translation={props.translation} />
      </ToolsItem>
    </div>
  );
};

export default Tools;
