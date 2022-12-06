import { AnyAction } from "redux";
import { HAPPY_BUTTON_CLICKED, HAPPY_CLEAR_BUTTON } from "../action";
import { Moment } from "../store";

export interface HappyState {
  happyMoment: Moment[];
}

export const initialHappyState: HappyState = {
  happyMoment: [],
};

const happinessReducer = (currentHappyState: HappyState, action: AnyAction) => {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return {
        ...currentHappyState,
        happyMoment: [
          ...currentHappyState.happyMoment,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };

    case HAPPY_CLEAR_BUTTON:
      return { ...currentHappyState, happyMoment: [] };

    default:
      return currentHappyState;
  }
};
export default happinessReducer;
