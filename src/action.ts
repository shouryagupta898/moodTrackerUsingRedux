import { Moment } from "./store";
import { AnyAction } from "redux";

export const HAPPY_BUTTON_CLICKED = "happy button clicked";
export const SAD_BUTTON_CLICKED = "sad button clicked";
export const HAPPY_CLEAR_BUTTON = "happy clear clicked";
export const SAD_CLEAR_CLICKED = "sad clear clicked";

type ActionCreator<T> = (...args: any) => { type: string; payload: T };

export const happyButtonClicked: ActionCreator<Moment> = (
  count: number,
  when: Date
) => ({
  type: HAPPY_BUTTON_CLICKED,
  payload: { intensity: count, when },
});

export const sadButtonClicked: ActionCreator<Moment> = (
  count: number,
  when: Date
) => ({
  type: SAD_BUTTON_CLICKED,
  payload: { intensity: count, when },
});

export const happyClearButton = () => ({
  type: HAPPY_CLEAR_BUTTON,
});

export const sadClearButton = () => ({
  type: SAD_CLEAR_CLICKED,
});
