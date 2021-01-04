import React from "react";
import { useTransform } from "framer-motion";

import useWrapperScroll from "../Model/useWrapperScroll";

import { Container, Header, Logo, Footer } from "./styles";

// importing navbar
import Navbar from "./Navbar/Navbar";

const UniqueOverlay = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Navbar />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="/">Tesla 2021</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Legal Contact</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
