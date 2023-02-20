import { combineReducers } from "redux";
import flightBookingReducer from "./flightBooking/flightBookingReducer";

const rootReducer = combineReducers({
  flightBookings: flightBookingReducer,
});

export default rootReducer;
