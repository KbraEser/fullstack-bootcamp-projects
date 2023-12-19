import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions.js";

const initialState = {
  favorites: [
    {
      id: 0,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      metascore: 100,
      genre: "Drama",
      description:
        "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy.",
    },
  ],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      console.log("reducer Delete", action.payload, typeof action.payload);
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
