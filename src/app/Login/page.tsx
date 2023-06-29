"use client";

import React, { use } from "react";
import { styled } from "styled-components";

const Login = () => {
  return (
    <LoginDiv>
      <div>Main Login Page </div>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: transparent; */
  color: blue;
  height: 100vh;
  width: 100vw;
`;

export default Login;
