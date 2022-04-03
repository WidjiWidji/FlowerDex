import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonSnapshot(props) {
  return (
    <Container {...props}>
      <Snapshot>Snapshot</Snapshot>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(120,191,62,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 5px;
  border-color: rgba(106,185,43,1);
  border-style: solid;
  box-shadow: 0px 1px 5px  0.35px #000 ;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`;

const Snapshot = styled.button`
  font-family: Rubik;
  color: #fff;
  font-size: 21px;
  font-weight: 800;
`;

export default MaterialButtonSnapshot;
