// // import React from "react";
// // import { useState } from "react";

// // const BookingForm = (props) => {
// //   const [date, setDate] = useState("");
// //   const [times, setTimes] = useState("");
// //   const [guests, setGuests] = useState("");
// //   const [occasion, setOccasion] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     props.SubmitForm(e);
// //   };
// //   const handleChange = (e) => {
// //     setDate(e);
// //     props.dispatch(e);
// //   };
// //   return (
// //     <header>
// //       <section>
// //         <form onSubmit={handleSubmit}>
// //           <fieldset>
// //             <div>
// //               <label htmlFor="book-date">Choose Date</label>
// //               <input id="book-date" value={date} type="date" required />
// //             </div>

// //             {/*for time selection */}
// //             {/* <div>
// //               <label htmlFor="book-time">Choose Time:</label>
// //               <select
// //                 id="book-time"
// //                 value={times}
// //                 onChange={(e) => setTimes(e.target.value)}
// //               >
// //                 <option value="">Select a Time</option>
// //                 {props.availableTimes.map((availableTimes) => {
// //                   return <option key={availableTimes}>{availableTimes}</option>;
// //                 })}
// //               </select>
// //             </div> */}
// //             <div>
// //               <label htmlFor="book-time">Choose Time:</label>
// //               <select id="book-time" value={times} onChange={handleChange}>
// //                 <option value="">Select a Time</option>
// //                 {props.availableTimes &&
// //                   props.availableTimes.map((time) => (
// //                     <option key={time}>{time}</option>
// //                   ))}
// //               </select>
// //             </div>

// //             {/*for Number of guests */}
// //             <div>
// //               <label htmlFor="book-guests">Number of Guests:</label>
// //               <input
// //                 type="text"
// //                 id="book-guests"
// //                 value={guests}
// //                 onChange={(e) => setGuests(e.target.value)}
// //               />
// //             </div>
// //             {/*for Ocassion field*/}
// //             <div>
// //               <label htmlFor="book-occasion">Occasion:</label>
// //               <select
// //                 id="book-occasion"
// //                 key={occasion}
// //                 value={occasion}
// //                 onChange={(e) => setOccasion(e.target.value)}
// //               >
// //                 <option value="">Birthday</option>
// //                 <option value="">Anniversary</option>
// //               </select>
// //             </div>
// //             {/*submit button */}
// //             <div className="btnReceive">
// //               <input
// //                 aria-label="On Click"
// //                 type="submit"
// //                 value={"Make Your Reservation"}
// //               />
// //             </div>
// //           </fieldset>
// //         </form>
// //       </section>
// //     </header>
// //   );
// // };

// // export default BookingForm;

// import React, { useState } from "react";

// const BookingForm = (props) => {
//   const [date, setDate] = useState("");
//   const [times, setTimes] = useState("");
//   const [guests, setGuests] = useState("");
//   const [occasion, setOccasion] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.SubmitForm(e);
//   };

//   const handleChange = (e) => {
//     setTimes(e.target.value); // Update the times state with the selected value
//   };

//   return (
//     <header>
//       <section>
//         <form onSubmit={handleSubmit}>
//           <fieldset>
//             <div>
//               <label htmlFor="book-date">Choose Date:</label>
//               <input
//                 id="book-date"
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="book-time">Choose Time:</label>
//               <select id="book-time" value={times} onChange={handleChange}>
//                 <option value="">Select a Time</option>
//                 {props.availableTimes &&
//                   props.availableTimes.map((time) => (
//                     <option key={time}>{time}</option>
//                   ))}
//               </select>
//             </div>

//             <div>
//               <label htmlFor="book-guests">Number of Guests:</label>
//               <input
//                 type="number"
//                 id="book-guests"
//                 value={guests}
//                 onChange={(e) => setGuests(e.target.value)}
//               />
//             </div>

//             <div>
//               <label htmlFor="book-occasion">Occasion:</label>
//               <select
//                 id="book-occasion"
//                 value={occasion}
//                 onChange={(e) => setOccasion(e.target.value)}
//               >
//                 <option value="">Select an Occasion</option>
//                 <option value="Birthday">Birthday</option>
//                 <option value="Anniversary">Anniversary</option>
//               </select>
//             </div>

//             <div className="btnReceive">
//               <input
//                 type="submit"
//                 value={"Make Your Reservation"}
//                 aria-label="Make Your Reservation"
//               />
//             </div>
//           </fieldset>
//         </form>
//       </section>
//     </header>
//   );
// };

// export default BookingForm;

import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setTimes(e.target.value);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={handleChange}>
                <option value="">Select a Time</option>
                {props.availableTimes &&
                  props.availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                type="number"
                id="book-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                type="submit"
                value={"Make Your Reservation"}
                aria-label="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
