import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import styles from "./Header.module.css";
import Image1 from "../../Images/Previewed Platform info_.jpg";
import Image from "next/image";

const About = () => {
  return (
    <Aboutsection className="About" id="About">
      {/* <Headinga>
        <h1>About</h1>
      </Headinga> */}
      <Sectiona>
        <Headlinea>
          <h1>Our Mission</h1>
        </Headlinea>
        <Description>
          <p>
            Previewed is a video-based platform that allows job seekers to
            showcase their personality and soft skills to employers. We believe
            that the traditional resume is outdated and does not provide enough
            information for employers to make an informed decision. We are
            changing the way employers hire and job seekers apply.
          </p>
        </Description>
      </Sectiona>
      <Sectiona>
        <Headlinea>
          <h1>Job Seekers :</h1>
        </Headlinea>
        <Description>
          <p>
            Unleash your potential and discover your dream career with
            Previewed. Our revolutionary platform utilizes advanced AI
            algorithms and comprehensive job matching techniques to connect you
            with the perfect opportunities that align with your skills,
            preferences, and aspirations. Take control of your future and begin
            your journey towards professional fulfillment today!
          </p>
        </Description>
      </Sectiona>
      <Sectiona>
        <Headlinea>
          <h1>Employers :</h1>
        </Headlinea>
        <Description>
          <p>
            Unlock the power of talent acquisition with Previewed. Our
            innovative platform provides access to a vast pool of top-notch
            candidates, empowering you to streamline your hiring process and
            find the perfect fit for your organization. From comprehensive
            candidate profiles to advanced assessment tools, Previewed equips
            you with the insights you need to make informed hiring decisions and
            build a winning team.
          </p>
        </Description>
      </Sectiona>
      <Imagea>
        <Image
          src={Image1}
          alt="Job Details"
          style={{
            width: "70em",
            height: "15em",
            borderRadius: "10px",
            padding: "20px",
          }}
        />
      </Imagea>
      <Sectionb>
        <Headlineb>
          <h1>Empowering Careers, Transforming Organizations</h1>
        </Headlineb>
        <Descriptionb>
          <p>
            At Previewed, we believe in the power of human potential and the
            impact it can have on organizations. We are a dynamic team of
            innovators, dedicated to revolutionizing the recruitment landscape
            and creating meaningful connections between job seekers and
            employers.
          </p>
          <br />
          <p>
            Driven by our passion for excellence, we have developed an advanced
            platform that leverages cutting-edge AI technology, data analytics,
            and intuitive user experiences. Our mission is to empower
            individuals to unlock their true potential and help organizations
            thrive by finding the perfect talent.
          </p>
          <br />
          <p>
            With our comprehensive suite of tools and features, we are reshaping
            the future of recruitment. We are committed to delivering
            unparalleled value to both job seekers and employers, providing a
            seamless, efficient, and personalized experience that transforms
            careers and drives business success.
          </p>
          <br />
          <p>
            Join us on this journey as we redefine the way recruitment is done.
            Discover a world of opportunities, harness the power of data-driven
            insights, and embark on a transformative experience with Previewed.
            Together, we can shape a future where every career dream becomes a
            reality.
          </p>
        </Descriptionb>
      </Sectionb>
    </Aboutsection>
  );
};

const Headinga = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  /* background-color: transparent; */
  color: blue;
`;

const Headlinea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 20px;
  font-size: 30px;
`;

const Headlineb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 20px;
  font-size: 30px;
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;

const Descriptionb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  text-align: center;
  color: #40403f;
`;

const Aboutsection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: transparent;
  color: #212120;
  /* height: 100vh; */
  width: 100vw;
  padding: 50px 40px;
  margin: 0;
  letter-spacing: 1px;
  color: #333;
  scroll-behavior: smooth;
  background-color: #f5f5f5;
  p {
    font-size: 17px;
    font-weight: 200;
    letter-spacing: 1px;
    margin: 0 20px;
    text-align: justify;
  }
`;

const Imagea = styled.div`
  height: 100%;
  width: 10em;
  border-radius: 10px;
  mix-blend-mode: multiply;
`;

const Sectiona = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: transparent;
  color: #333;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  h1 {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
    text-align: center;
  }
`;

const Sectionb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  color: #ff4c4c;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  h1 {
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
    padding: 20px 20px;
    text-align: center;
  }
`;

export default About;
