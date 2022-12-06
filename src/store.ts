import { AnyAction, createStore } from "redux";
import happinessReducer, {
  HappyState,
  initialHappyState,
} from "./reducers/happinessReducer";
import sadnessReducer, {
  initialSadState,
  SadState,
} from "./reducers/sadnessReducer";

export interface Moment {
  intensity: number;
  when: Date;
}
export interface State {
  happy: HappyState;

  sad: SadState;
}

const initialState: State = {
  happy: initialHappyState,

  sad: initialSadState,
};

// reducer has to be non-mutating
// reducer has to be a pure function

const reducer = (currentState = initialState, action: AnyAction): State => {
  return {
    happy: happinessReducer(currentState.happy, action),
    sad: sadnessReducer(currentState.sad, action),
  };
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
