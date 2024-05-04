// //to fixed props issues
// import React from "react";
// import BookingForm from "./BookingForm";

// const Booking = (props) => {
//   return (
//     <BookingForm
//       aailableTimes={props.availableTimes}
//       dispatch={props.dispatch}
//       SubmitForm={props.SubmitForm}
//     />
//   );
// };

// export default Booking;
import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default Booking;
