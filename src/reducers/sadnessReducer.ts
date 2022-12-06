import { AnyAction } from "redux";
import { SAD_BUTTON_CLICKED } from "../action";
import { Moment } from "../store";

export interface SadState {
  sadMoment: Moment[];
}

export const initialSadState: SadState = {
  sadMoment: [],
};

const sadnessReducer = (currentSadState: SadState, action: AnyAction) => {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return {
        ...currentSadState,
        sadMoment: [
          ...currentSadState.sadMoment,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };

    default:
      return currentSadState;
  }
};
export default sadnessReducer;
