export const happyButtonClicked = (count:number) => ({
  type: "happy button clicked",
  payload: count,
});

export const sadButtonClicked = (count:number) => ({
  type: "sad button clicked",
  payload: count,
});
