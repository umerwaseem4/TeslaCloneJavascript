import React, { useState, useEffect } from "react";

export const LogoSVG = ({ ...props }) => {
  const [show, setShow] = useState(true);
  console.log(show);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, []);
  return (
    <a href="/#">
      <img
        src={require("./logo.png")}
        style={{ width: "15%", marginTop: "10px" }}
        alt=""
      />
    </a>
  );
};
