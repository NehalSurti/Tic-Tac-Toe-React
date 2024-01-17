import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  player: 1,
  gameOver: false,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setMarks: (state, action) => {
      state.marks = action.payload;
    },
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setGameOver: (state, action) => {
      state.gameOver = action.payload;
    },
  },
});

export const { setMarks, setPlayer, setGameOver } = boardSlice.actions;

export default boardSlice.reducer;
