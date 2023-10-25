import { movies } from "../../movies";

const inialState = {
  movies: movies,
  order: 0,
};

function moviesReducer(state = inialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default moviesReducer;
