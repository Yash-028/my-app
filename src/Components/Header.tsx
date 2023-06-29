import Link from "next/link";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
// import { Quicksand } from "@next/font/google";

const Header = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     if (scrollTop > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <Headline>
        <Logo>
          <Link href="/">
            Preview
            <span className="ed">ED</span>
            <span className="careers">.CAREERS</span>
          </Link>
        </Logo>
        <Leftbond>
          <Link href="#Home">Home</Link>
          <Link href="#About">About</Link>
          <Link href="#Contact">Contact</Link>
        </Leftbond>
        <Rightbond>
          <ButtonHeader>
            <Link href="/Login">Login</Link>
          </ButtonHeader>
          <ButtonHeader>
            <Link href="/Signup">Signup</Link>
          </ButtonHeader>
        </Rightbond>
      </Headline>
    </div>
  );
};

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e5e5;
  font-family: "Quicksand", sans-serif;
  /* font-weight: 700; */
  font-size: 20px;
  letter-spacing: 1px;
  color: #333;
  background-color: #fafafa;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  left: 0;
  scroll-behavior: smooth;
`;

const Logo = styled.div`
  text-transform: capitalize;
  a {
    text-decoration: none;
    color: #333;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .ed {
    color: #666666;
  }

  .careers {
    color: #0070f3;
    font-size: 15px;
  }
`;

const Leftbond = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #333;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 2px;
    margin: 0 20px;
  }
`;
const Rightbond = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 2px;
  }
`;

const ButtonHeader = styled.div`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 2px;
  padding: 10px 20px;
  margin: 0 20px;
  cursor: pointer;
`;

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Header = () => {
//   return (
//     <div>
//       <Headline>
//         <Logo>
//           <Link href="/">
//             Preview
//             <span className="ed">ED</span>
//             <span className="careers">CAREERS</span>
//           </Link>
//         </Logo>
//         <Leftbond>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>
//         </Leftbond>
//         <Rightbond>
//           <Link href="/login">Login</Link>
//           <Link href="/signup">Signup</Link>
//         </Rightbond>
//       </Headline>
//     </div>
//   );
// };

// const Headline = styled.div`
//   display: flex;
// `;
// const Logo = styled.div`
//   flex: 1;
// `;
// const Leftbond = styled.div`
//   flex: 1;
// `;
// const Rightbond = styled.div`
//   flex: 1;
// `;

// export default Header;
