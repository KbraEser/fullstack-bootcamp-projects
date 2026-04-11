import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from '../actions/favoritesActions';
import { DELETE_MOVIE } from '../actions/movieActions.js';

const favoritesInitialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case ADD_FAVORITE:
      const alreadyExists = state.favorites.some(
        (item) => item.id === action.payload.id
      );
      if (alreadyExists) {
        return { ...state, isFavorite: true };
      } else {
        return {
          ...state,

          favorites: [action.payload, ...state.favorites],
        };
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    case DELETE_MOVIE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
