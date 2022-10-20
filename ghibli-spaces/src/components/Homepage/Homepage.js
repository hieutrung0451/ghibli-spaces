import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Content />
    </div>
  );
};

export default Homepage;
