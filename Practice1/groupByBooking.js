const bookings = [
  { airline: "AI", price: 5000, passengers: 2 },
  { airline: "6E", price: 4500, passengers: 1 },
  { airline: "AI", price: 7000, passengers: 3 },
  { airline: "SG", price: 4000, passengers: 1 },
  { airline: "6E", price: 5500, passengers: 2 },
];
// Output
// {
//     totalRevenue:50500,
//     passengersByAirline:{"AI":5,"6E":3,"SG":1},
//     revenueByAirline:{"AI":31000,"6E":15500,"SG":4000},
//     highestBooking:{"airline":"AI","price":7000,"passengers":3}
// }

const groupByBookings = (bookings) => {
  const initial = {
    totalRevenue: 0,
    passengersByAirline: {},
    revenueByAirline: {},
    highestBooking: null,
  };
  const result = bookings.reduce((acc, curr) => {
    const { airline, price, passengers } = curr;
    // console.log({ airline, price, passengers });

    const revenue = price * passengers;
    acc.totalRevenue += revenue;

    acc.passengersByAirline[airline] =
      (acc.passengersByAirline[airline] || 0) + passengers;

    acc.revenueByAirline[airline] =
      (acc.revenueByAirline[airline] || 0) + revenue;
    if (
      !acc.highestBooking ||
      revenue > acc.highestBooking.price * acc.highestBooking.passengers
    ) {
      acc.highestBooking = curr;
    }

    //
    // console.log(acc);
    return acc;
  }, initial);
//   console.log("result",result);
return result
  
};
console.log(groupByBookings(bookings));
