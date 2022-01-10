import { combineReducers } from "redux";
import { myDropdown } from "./actionReducer";

const reducers = combineReducers({
  show: myDropdown,
});

export default reducers;
