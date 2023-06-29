import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import About from "../Components/About";
import HomePage from "../Components/HomePage";

const Main = () => {
  return (
    <div className="main">
      <HomePage />
      <About />
    </div>
  );
};

export default Main;
