import React from "react";
import styled from "@emotion/styled";

const Slide = styled.div`
  height: 100%;
  width: 80%;
  margin-right: -235px;

  background-image: url(${(props) => props.content});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.color};
`;

export default Slide;
