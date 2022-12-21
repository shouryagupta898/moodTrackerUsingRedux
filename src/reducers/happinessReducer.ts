import produce from "immer";
import { AnyAction } from "redux";
import { HAPPY_BUTTON_CLICKED, HAPPY_CLEAR_BUTTON } from "../action";
import { Moment } from "../store";

export interface HappyState {
  happyMoment: Moment[];
}

export const initialHappyState: HappyState = {
  happyMoment: [],
};

const happinessReducer = (
  currentHappyState = initialHappyState,
  action: AnyAction
): HappyState => {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      // const newHappyMoment = {
      //   intensity: action.payload.count,
      //   when: action.payload.when,
      // };
      // return {
      //   ...currentHappyState,
      //   happyMoment: [
      //     ...currentHappyState.happyMoment,
      //     { intensity: action.payload.count, when: action.payload.when },
      //   ],
      // };

      return produce(currentHappyState, (draft) => {
        draft.happyMoment.push(action.payload);
      });

    case HAPPY_CLEAR_BUTTON:
      return { ...currentHappyState, happyMoment: [] };

    default:
      return currentHappyState;
  }
};
export default happinessReducer;
