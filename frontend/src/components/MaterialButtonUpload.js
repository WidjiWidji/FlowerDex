import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonUpload(props) {
  return (
    <Container {...props}>
      <Upload>Upload</Upload>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(251,154,53,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 4px;
  border-color: rgba(227,124,34,1);
  border-style: solid;
  box-shadow: 0px 1px 5px  0.35px #000 ;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`;

const Upload = styled.button`
  font-family: Rubik;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
`;

export default MaterialButtonUpload;
