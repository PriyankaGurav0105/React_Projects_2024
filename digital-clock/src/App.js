import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

function App() {
  const[time, setTime]=useState(new Date().toLocaleTimeString());

  useEffect(() =>{
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    //cleanup timer when the component unmounts
    return() => clearInterval(timer);
  }, [] );// empty dependency array to sun effect once

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default App;
