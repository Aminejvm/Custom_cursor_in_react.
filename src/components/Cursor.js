import React from "react";
import styled from "styled-components";
const Cursor = () => (
  <>
    <StyledCursor />
    <StyledCanvas />
  </>
);
const StyledCursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background-color: #1549f8;
`;
const StyledCanvas = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  z-index: 12000;
`;
