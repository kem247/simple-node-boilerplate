import axios from "axios";

const GET_RESERVATIONS = "GET_RESERVATIONS";

const getAllReservations = reservations => ({
  type: GET_RESERVATIONS,
  reservations
});
export const fetchReservations = (page = 1) => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/", {
        params: { page }
      });
      dispatch(getAllReservations(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export default function reservationsReducer(state = [], action) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.reservations;
    default:
      return state;
  }
}
