import axios from "axios";
// let reservations = require("../../../server/routes/reservations");
const GET_RESERVATIONS = "GET_RESERVATIONS";

const getAllReservations = reservations => ({
  type: GET_RESERVATIONS,
  reservations
});
export const fetchReservations = (page = 1) => {
  return async dispatch => {
    try {
      const { data } = await axios.get("http://localhost:3000/reservations", {
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
