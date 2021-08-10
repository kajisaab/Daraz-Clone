import React from "react";
import styled from "@emotion/styled";

// here the height is resposible for the height of the pictures

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: tranform-ease-in-out ${(props) => props.transition}s;
  height: 58vh;
  width: ${(props) => props.width}px;
  display: flex;
`;

export default SliderContent;
