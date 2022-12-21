import { combineReducers, createStore } from "redux";
import happinessReducer from "./reducers/happinessReducer";
import sadnessReducer from "./reducers/sadnessReducer";

export interface Moment {
  intensity: number;
  when: Date;
}
// export interface State {
//   happy: HappyState;
//   sad: SadState;
// }

// const initialState: State = {
//   happy: initialHappyState,

//   sad: initialSadState,
// };

// reducer has to be non-mutating
// reducer has to be a pure function

const reducer = combineReducers({
  sad: sadnessReducer,
  happy: happinessReducer,
  
});

export type State = ReturnType<typeof reducer>

// const reducer = (currentState = initialState, action: AnyAction): State => {
//   return {
//     happy: happinessReducer(currentState.happy, action),
//     sad: sadnessReducer(currentState.sad, action),
//   };
// };

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
