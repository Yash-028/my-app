"use client";

import styled from "styled-components";
import StyledComponentsRegistry from "./registry";
import Header from "../Components/Header";
import Main from "../app/Main";

// const Body = styled.body`
//   margin: 0;
//   * {
//     box-sizing: border-box;
//   }
// `;

// const Navbar = styled.nav`
//   height: 80px;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
//   background-color: black;
//   color: white;
// `;

// const Link = styled.a`
//   color: white;
//   text-decoration: none;
// `;

export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}
