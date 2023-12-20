import {
  RESTORE_MOVIE,
  REMOVE_MOVIE,
  NEXT,
  PREV,
} from "../actions/movieAction";
import { movies } from "../../movies";

const initialState = {
  movies: movies,
  sira: 0,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        sira: state.sira + 1,
      };
    default:
      return state;
  }
}

export default movieReducer;
