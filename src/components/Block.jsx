import React from "react";
import styled from "styled-components";
import cross from "../assets/cross.png";
import dot from "../assets/dot.png";

export default function Block({ mark, changeMark, position }) {
  return (
    <Container
      className={`mark${mark}`}
      onClick={() => changeMark(position)}
    ></Container>
  );
}

const Container = styled.div`
  width: 150px;
  height: 150px;
  border: 5px solid black;
  background-size: cover;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;

  &.mark1 {
    background-image: url(${cross});
    background-size: cover;
  }

  &.mark2 {
    background-image: url(${dot});
    background-size: cover;
  }
`;
