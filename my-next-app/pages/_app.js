import "@/styles/globals.css";




export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
// function App() {
//   return (
//     <div>
//       <EventRegistration />
//       <EventsList />
//       <ContactUs />
//       <Gallery />
//       <UpcomingEvents />
//     </div>
//   );
// }

// // import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EventRegistration from "./components/EventRegistration";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<EventRegistration />} />
//         <Route path="/payments" element={<h2>Payments Page</h2>} /> 
//         <Route path="/" element={<EventRegistration />} />
//         <Route path="/thanks" element={<Thanks />} />
//       </Routes>
//     </Router>
//   );

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EventRegistration from "./components/EventRegistration";
// import Thanks from "./components/thankshanks";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<EventRegistration />} />
//         <Route path="/thanks" element={<Thanks />} />
//       </Routes>
//     </Router>
//   );
// }


// // import React from "react";
// import UpcomingEvents from "./components/UpcomingEvents";

// function App() {
//   return (
//     <div>
//       <UpcomingEvents />
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <EventsList />
//     </div>
//   );
// }
// export default App;
// function App() {
//   return (
//     <div>
//       <ContactUs />
//     </div>
//   );
// }

// import React from "react";
// import Gallery from "./components/Gallery";

// function App() {
//   return (
//     <div>
//       <Gallery />
//     </div>
//   );
// }

// export default App;
