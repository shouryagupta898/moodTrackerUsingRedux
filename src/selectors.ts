import { State } from "./store";

export const happyMomentsSelector = (state: State) => {
  return state.happy.happyMoment;
};

export const sadMomentsSelector = (state: State) => {
  return state.sad.sadMoment;
};
