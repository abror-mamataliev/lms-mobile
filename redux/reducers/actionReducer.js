import { ActionTypes } from "../constants/action-types";

const show = {
  showDropdown: false,
};


export const myDropdown = (state = show, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW:
      return { showDropdown: payload };
    default:
      return state;
  }
};