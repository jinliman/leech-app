// Actions
export const SHOW_CANVAS = "SHOW_CANVAS";
export const HIDE_CANVAS = "HIDE_CANVAS";

// Show Canvas
export const showCanvas = () => ({
  type: SHOW_CANVAS,
  payload: {},
});

// Hide Canvas
export const hideCanvas = () => ({
  type: HIDE_CANVAS,
  payload: {},
});
