import { CANCELTICKET, RESERVINGTICKET } from "./actionTypes";

export const reservingTicket = ({ from, to, date, guests, ticketClass }) => {
  return {
    type: RESERVINGTICKET,
    payload: {
      id: Math.floor(Math.random() * 100) + Date.now(),
      from,
      to,
      date,
      guests,
      ticketClass,
    },
  };
};

export const cancleTicket = ({ id }) => {
  return {
    type: CANCELTICKET,
    payload: { id },
  };
};
