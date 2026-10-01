import { DELETE_MOVIE, ADD_MOVIE } from '../actions/movieActions.js';
import movies from '../../data.js';

const movieInitialState = {
  movies: movies,
  appTitle: 'IMDB Movie Database',
};

const reducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };

    case ADD_MOVIE:
      return {
        ...state,
        movies: [action.payload, ...state.movies],
      };
    default:
      return state;
  }
};

export default reducer;
