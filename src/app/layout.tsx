"use client";

import styled from "styled-components";
import StyledComponentsRegistry from "./registry";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

const Body = styled.body`
  margin: 0;
  * {
    box-sizing: border-box;
  }
  scroll-behavior: smooth !important;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <Body>
          {/* <Navbar>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Sign in</Link>
          <Link href="#">Sign up</Link>
        </Navbar> */}
          <Header />
          {children}
          <Footer />
        </Body>
      </StyledComponentsRegistry>
    </html>
  );
}
