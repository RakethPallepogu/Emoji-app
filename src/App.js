import React from "react";
import "./styles.css";

var likeCounter = 0;
export default function App() {
  function likeClickHandler() {
    likeCounter = likeCounter + 1; //processing
    console.log("clicked!", likeCounter); //output
  }

  return (
    <div className="App">
      <h1>Inside Outt!</h1>
      <button onClick={likeClickHandler}> Like Me! </button>
    </div>
  );
}

/**
 * onClick takes a function.
 * saving it as a function should remove the error.
 * event listener/event handler is not required, Apparently.
 */
