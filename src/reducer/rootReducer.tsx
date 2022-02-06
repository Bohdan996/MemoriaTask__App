import { combineReducers } from "redux";
import { studentsReducer } from "./studentsReducer";
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  studentsReducer,
  appReducer,
});

export type RootState = ReturnType<typeof rootReducer>