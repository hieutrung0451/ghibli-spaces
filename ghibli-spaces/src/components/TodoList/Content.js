import React, { useState } from "react";
import "./Content.css";

const Content = () => {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs ?? []);

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


  console.log(job);

  return (
    <div className="ListTodo">
      <input
        type="text"
        value={job}
        placeholder="Enter your work..."
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleAddTodoWork}>ADD</button>
      <hr />
      <ul>
        {jobs.map((item, index) => {
          return <li onClick={handleDelete} key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Content;
