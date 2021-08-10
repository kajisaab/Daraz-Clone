import React from "react";
import styled from "@emotion/styled";

export const Secondnavigation = styled.div`
  height: 55vh;
  width: 200px;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 200.2px;
  top: 0px;
  right: 0;
  bottom: 0;
  z-index: -1;
  cursor: pointer;
  border: 1px solid lightgray;
  p {
    height: 21px;
    padding: 4px;
    font-size: 0.8rem;
  }
  p:hover {
    color: #1e9cb7;
    background-color: #d8d5d5;
    text-indent: 10px;
  }
`;

export const Thirdnavigation = styled.div`
  height: 55vh;
  width: 200px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 402.4px;
  top: 0px;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
