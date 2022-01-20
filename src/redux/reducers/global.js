/* eslint-disable import/no-anonymous-default-export */
import {
  SHOW_CANVAS,
  HIDE_CANVAS,
} from "../actions";

const initialState = {
  showCanvas: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_CANVAS:
      return {
        ...state,
        showCanvas: true,
      };
    case HIDE_CANVAS:
      return {
        ...state,
        showCanvas: false,
      };
    default:
      return state;
  }
}