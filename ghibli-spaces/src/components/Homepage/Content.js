import React from "react";
import "./Content.css";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <div className="desc">
        <h1>All-in-one workspace</h1>
        <p>
          Your digital place for focus. Mix different sounds and create your
          perfect sound environment to work and relax. Control your work with
          Todo and Timer.
        </p>
        <button>
          <NavLink to="/ghibli-spaces">Try Now</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Content;
