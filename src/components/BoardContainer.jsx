import React, { useState } from "react";
import Block from "./Block";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setMarks,
  setPlayer,
  setGameOver,
} from "../redux/features/board/boardSlice";

export default function BoardContainer() {
  const dispatch = useDispatch();
  const [uiLoaded, setUiLoaded] = useState(false);
  const marks = useSelector((state) => state.board.marks);
  const player = useSelector((state) => state.board.player);
  const gameOver = useSelector((state) => state.board.gameOver);

  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let c of combinations) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        console.log("Player 1 wins");
        dispatch(setGameOver(true));
      }
      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        console.log("Player 2 wins");
        dispatch(setGameOver(true));
      }
    }
  }, [marks]);

  useEffect(() => {
    if (uiLoaded) {
      alert(`Game Over! Player ${player === 1 ? 2 : 1} wins`);
      window.location.reload();
    }
  }, [uiLoaded]);

  const changeMark = (i) => {
    const m = marks.slice();
    if (!gameOver) {
      if (m[i] === 0) {
        m[i] = player;
        dispatch(setMarks(m));
        dispatch(setPlayer(player === 1 ? 2 : 1));
      } else {
        alert("Please click on empty blocks");
      }
    }
  };

  useEffect(() => {
    if (gameOver) {
      setUiLoaded(true);
    }
  }, [gameOver]);

  return (
    <Container>
      <Wrapper>
        <Block mark={marks[0]} position={0} changeMark={changeMark}></Block>
        <Block mark={marks[1]} position={1} changeMark={changeMark}></Block>
        <Block mark={marks[2]} position={2} changeMark={changeMark}></Block>
      </Wrapper>
      <Wrapper>
        <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
        <Block mark={marks[4]} position={4} changeMark={changeMark}></Block>
        <Block mark={marks[5]} position={5} changeMark={changeMark}></Block>
      </Wrapper>
      <Wrapper>
        <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
        <Block mark={marks[7]} position={7} changeMark={changeMark}></Block>
        <Block mark={marks[8]} position={8} changeMark={changeMark}></Block>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border: solid 1px #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const Wrapper = styled.div``;
