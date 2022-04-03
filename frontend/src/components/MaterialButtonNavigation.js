import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonNavigation(props) {
  return (
    <Container {...props}>
      <Home>Home</Home>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: rgba(255,255,255,0);
`;

const Home = styled.span`
  font-family: Rubik;
  color: rgba(255,255,255,1);
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
`;

export default MaterialButtonNavigation;
