import { combineReducers, createStore } from "redux";
import textsReducer from "./reducers/textsReducer";
import photoReducer from "./reducers/photoReducer";

let reducers = combineReducers({
  textsPage: textsReducer,
  photoPage: photoReducer,
});

let store = createStore(reducers);
export default store;
