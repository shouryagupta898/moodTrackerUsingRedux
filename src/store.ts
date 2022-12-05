import { Action, AnyAction, createStore } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./action";

export interface State {
  sadCount: number;
  happyCount: number;
}

const initialState = {
  sadCount: 0,
  happyCount: 0,
};

const reducer = (
  currentState: State = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return {
        ...currentState,
        happyCount: currentState.happyCount + action.payload,
      };
    case SAD_BUTTON_CLICKED:
      return {
        ...currentState,
        sadCount: currentState.sadCount + action.payload,
      };
    default:
      return currentState;
  }
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
