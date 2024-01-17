import { combineReducers } from "@reduxjs/toolkit";
import boardReducer from "../features/board/boardSlice";

const rootReducer = combineReducers({
  board: boardReducer,
});

export default rootReducer;
