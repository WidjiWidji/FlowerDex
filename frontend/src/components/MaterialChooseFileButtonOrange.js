import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialChooseFileButtonOrange(props) {
  return (
    <Container {...props}>
      <ChooseFile>Choose file</ChooseFile>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(251,154,53,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 1px 5px  0.56px #000 ;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`;

const ChooseFile = styled.button`
  font-family: Rubik;
  color: rgba(255,255,255,1);
  font-size: 24px;
  margin: 0px;
  width: 141px;
  height: 33px;
  font-weight: 800;
`;

export default MaterialChooseFileButtonOrange;
