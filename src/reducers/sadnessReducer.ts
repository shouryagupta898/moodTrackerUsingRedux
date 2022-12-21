import produce from "immer";
import { AnyAction } from "redux";
import { SAD_BUTTON_CLICKED, SAD_CLEAR_CLICKED } from "../action";
import { Moment } from "../store";

export interface SadState {
  sadMoment: Moment[];
}

export const initialSadState: SadState = {
  sadMoment: [],
};

const sadnessReducer = (
  currentSadState = initialSadState,
  action: AnyAction
): SadState => {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      // const newSadMoment = {
      //   intensity: action.payload.count,
      //   when: action.payload.when,
      // };
      // return {
      //   ...currentSadState,
      //   sadMoment: [
      //     ...currentSadState.sadMoment,
      //     { intensity: action.payload.count, when: action.payload.when },
      //   ],
      // };

      return produce(currentSadState, (draft) => {
        draft.sadMoment.push(action.payload);
      });
    case SAD_CLEAR_CLICKED:
      return {
        ...currentSadState,
        sadMoment: [],
      };

    default:
      return currentSadState;
  }
};
export default sadnessReducer;
