import { Action, AnyAction, createStore } from "redux";

export interface State {
  sadCount: number;
  happyCount: number;
}

const initialState = {
  sadCount: 0,
  happyCount: 0,
};

const reducer = (currentState: State = initialState, action: AnyAction): State => {
  if (action.type === "happy button clicked") {
    return { ...currentState, happyCount: currentState.happyCount + action.payload }; // obj {} return ho rha h
  } else if (action.type === "sad button clicked") {
    return { ...currentState, sadCount: currentState.sadCount + action.payload };
  }

  return currentState;
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
