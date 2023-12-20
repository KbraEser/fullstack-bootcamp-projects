import { legacy_createStore as createStore, combineReducers } from "redux";

import movieReducer from "./reducers/movieReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const dukkanReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

const dukkan = createStore(dukkanReducer);

export default dukkan;
