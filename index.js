//import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

//Get a reference to the div with ID root
const el = document.getElementById("root");

//tel react to tak control of the element
const root = ReactDOM.createRoot(el);

//Create a component
function App() {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello There!";
  }
  const date = new Date();
  const time = date.toLocaleTimeString();
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}

//show the component on the screen
root.render(<App />);
