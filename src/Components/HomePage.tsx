import React from "react";
import Header from "./Header";
import styled from "styled-components";
// import styles from "./Header.module.css";
import Image from "next/image";
import BgImage from "../../Images/Bg_image.webp";

const HomePage = () => {
  const handleclick = () => {
    window.location.href = "/#About";
  };

  return (
    <HomeDiv className="Home" id="Home">
      <div>
        <Background src={BgImage} alt="Picture of the author" />
      </div>
      <HomeDiva>
        <h2>
          Welcome to <br /> Previewed:
        </h2>
        <h1>
          Don’t Search For Job. Preview It! <br />
          with our cutting-edge
          <br /> video-based platform.{" "}
        </h1>
        <button onClick={handleclick}>Get Started</button>
      </HomeDiva>
      {/* <h1>My page</h1> */}
    </HomeDiv>
  );
};

const HomeDiv = styled.div`
  color: green;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 100px 40px;
  margin: 0;
  letter-spacing: 1px;
  /* left: 0; */
  color: #333;
  scroll-behavior: smooth;
  /* position: fixed; */
  /* background-color: #f5f5f5; */
`;

const HomeDiva = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  align-items: flex-start;
  background-color: transparent;
  h2 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0;
  }
  h1 {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 2px;
    /* margin: 0 20px; */
  }
  button {
    background-color: #0070f3;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 20px 0;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

const Background = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  object-fit: cover;
  /* opacity: 0.5; */
`;

export default HomePage;
