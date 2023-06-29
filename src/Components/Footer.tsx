import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="footer1" id="Contact">
        <Logo>
          <Link href="/">
            Preview
            <span className="ed">ED</span>
          </Link>
        </Logo>
        <Column1>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">Blog</Link>
            </li>
            <li>
              <Link href="/about">User Guide</Link>
            </li>
          </ul>
        </Column1>
        <Column2>
          <ul>
            <li>
              <Link href="/about">All Jobs</Link>
            </li>
            <li>
              <Link href="/about">Companies</Link>
            </li>
            <li>
              <Link href="/about">Candidates</Link>
            </li>
          </ul>
        </Column2>
        <Column3>
          <ul>
            <li>
              <Link href="/about">Privacy</Link>
            </li>
            <li>
              <Link href="/about">Term and Conditions</Link>
            </li>
            <li>
              <Link href="/about">Help</Link>
            </li>
          </ul>
        </Column3>
        <SearchBar>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </SearchBar>
      </div>
      <div className="footer2">
        <p>© 2023 PreviewED. All rights reserved.</p>
        <SocialMedia>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} style={{ color: " #3b5998" }} />{" "}
          </a>
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#00acee" }} />{" "}
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#e4405f" }} />{" "}
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0072b1" }} />
          </a>
        </SocialMedia>
      </div>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  .footer1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .footer2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
const Logo = styled.div`
  text-transform: capitalize;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;
const Column1 = styled.div`
  ul {
    list-style: none;
    li {
      margin: 10px 0;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 200;
        letter-spacing: 2px;
      }
    }
  }
`;
const Column2 = styled.div`
  ul {
    list-style: none;
    li {
      margin: 10px 0;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 200;
        letter-spacing: 2px;
      }
    }
  }
`;
const Column3 = styled.div`
  ul {
    list-style: none;
    li {
      margin: 10px 0;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 200;
        letter-spacing: 2px;
      }
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    padding: 10px 20px;
    margin: 0 2px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  button {
    padding: 10px 20px;
    outline: none;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 2px;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
    background-color: #333;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 2px;
    margin: 0 5px;
  }
`;

export default Footer;
