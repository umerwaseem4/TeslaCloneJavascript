import React from "react";

import { Container, Heading, Buttons } from "./styles";


const DefaultOverlayContent = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      {label === "Accessories" ? (
        <Buttons>
          <button>Order Now</button>
        </Buttons>
      ) : (
        <Buttons>
          <button>Order Now</button>
          <button className="white">Learn More</button>
        </Buttons>
      )}
    </Container>
  );
};

export default DefaultOverlayContent;
