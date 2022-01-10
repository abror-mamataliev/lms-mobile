import { ActionTypes } from "../constants/action-types";

export const ShowDr = (bool) => {
  return {
    type: ActionTypes.SHOW,
    payload: bool,
  };
};
