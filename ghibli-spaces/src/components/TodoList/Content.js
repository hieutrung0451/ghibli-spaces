import React, { useState, useContext } from "react";
import "./Content.css";
import ColorContext from "../../contexts/ColorContext";

const Content = (props) => {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs ?? []);
  const color = useContext(ColorContext);

  //Add a new job
  const handleAddTodoWork = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(newJob));
      return newJob;
    });
    setJob("");
  };

  //Delete the job when click on the tag li
  const handleDelete = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  };

  return (
    <div className="ListTodo">
      <input
        type="text"
        value={job}
        placeholder={props.transContent("placeholder.1")}
        onChange={(e) => setJob(e.target.value)}
        style={{ backgroundColor: color.color }}
      />
      <button
        onClick={handleAddTodoWork}
        style={{ backgroundColor: color.color }}
      >
        {props.transContent("add.1")}
      </button>
      <hr />
      <ul>
        {jobs.map((item, index) => {
          return (
            <li onClick={handleDelete} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;
