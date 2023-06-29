"use client";

import React, { useState } from "react";
import { styled } from "styled-components";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your signup logic here

    return (
      <RegisterDiv>
        {/* <div>Main Register Page </div> */}
        {/* <div className="signup-page"> */}
        <Form className="signup-form">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </Form>
        {/* </div> */}
      </RegisterDiv>
    );
  };
};
const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: transparent; */
  /* color: blue; */
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #0056b3, #00b39c);
`;

const Form = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 400px;
  h2 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: none;
    background-color: #f5f5f5;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: none;
    background-color: #f5f5f5;
  }
`;

export default Register;
