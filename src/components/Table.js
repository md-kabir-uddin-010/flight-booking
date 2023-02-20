import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

export default function Table() {
  const flightBookings = useSelector((state) => state.flightBookings);
  return (
    <div className="table-container">
      {flightBookings?.length > 0 && (
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {/* <!-- Row 1 --> */}
            {flightBookings?.map((item) => (
              <TableRow key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
