import React from "react";
import BoardContainer from "../components/BoardContainer";
import styled from "styled-components";

export default function BoardPage() {
  return (
    <Container>
      <BoardContainer></BoardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
