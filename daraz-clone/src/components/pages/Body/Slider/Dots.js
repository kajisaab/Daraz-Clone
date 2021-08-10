import React from "react";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import "./Dots.css";

const Dot = styled.div`
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50px;
  background: ${(props) => (props.active ? "black" : "white")};
`;

const Dots = ({ slides, activeIndex }) => (
  <div className="dots__container">
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
);

export default Dots;
