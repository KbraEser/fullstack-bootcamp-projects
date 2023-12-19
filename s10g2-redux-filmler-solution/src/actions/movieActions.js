export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id) => {
  // console.log("actionCreator Delete", id, typeof id);
  return { type: DELETE_MOVIE, payload: Number(id) };
};
