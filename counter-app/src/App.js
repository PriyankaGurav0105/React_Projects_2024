// import logo from './logo.svg';
import React from "react";
// import usestate
import { useState } from "react";

function App() {
  // We initialize our state by calling useState in our function component.
  // useState accepts an initial state and returns two values:
  // count - The current state.
  // setcount - A function that updates the state.
const [count, setcount] = useState(0);

  return (
    <div>
      <h1>Welcome to the Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      <button onClick={() => setcount(0)}>Reset</button>
    </div>
  );
}

export default App;

