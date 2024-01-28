import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";


//put data from the server
const restrautList = [
  //data will put here from live swiggy aap
];

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
