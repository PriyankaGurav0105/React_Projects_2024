import React from 'react';
import { useState } from 'react'; //usestate hook used
import './App.css';

function App() {
  const [input, setInput] = useState(""); //tracks input value
  const [previousInput, setpreviousInput] = useState(""); // tracks previous input value
  const [operator, setOperator] = useState(""); //tracks operator

//handle button clicks: Adds the clicked value(1,2,3 etc) to the input.
  const handleButtonClick = (value) => {
    setInput(input + value);
  };
//handle operator clicks: When an operator is clicked, it stores the current
//  input as previousInput and clears the input to enter the next number.
  const handleOperatorClick = (op) => {
    setOperator(op);
    setpreviousInput(input);
    setInput("");// clear input for the next number
  };

//handle clear button: Clears the input, operator, and previous input.
const handleClear = () =>{
  setInput("");
  setpreviousInput("");
  setOperator("");
};

//handle equals button:Performs the calculation based on the selected operator and shows the result.
const handleEquals = () => {
  if (operator && previousInput){
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(previousInput) + parseFloat(input);
        
        break;
        case "-":
          result = parseFloat(previousInput) - parseFloat(input);
          
          break;
          case "*":
            result = parseFloat(previousInput) * parseFloat(input);
            
            break;
            case "/":
              result = parseFloat(previousInput) / parseFloat(input);
              
              break;
              
      default:
        return;
    }
    setInput(result.toString());
    setpreviousInput("");
    setOperator("");
  }
};

  return (
    <div className="App">
    <h1>Simple Calculator</h1>
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  </div>
  );
}

export default App;
