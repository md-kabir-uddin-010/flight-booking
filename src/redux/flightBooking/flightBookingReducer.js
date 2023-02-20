import { CANCELTICKET, RESERVINGTICKET } from "./actionTypes";

const initialState = [];

const flightBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVINGTICKET:
      if (state.length >= 3) return state;
      return [...state, { ...action.payload }];

    case CANCELTICKET:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default flightBookingReducer;
