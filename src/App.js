import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult(result + Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear the input after adding
  }
  function subtract(e) {
    e.preventDefault();
    setResult(result - Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear the input after adding
  }
  function multiply(e) {
    e.preventDefault();
    setResult(result * Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear the input after adding
  }
  function divide(e) {
    e.preventDefault();
    setResult(result / Number(inputRef.current.value));
    inputRef.current.value = ""; // Clear the input after adding
  }
  function reset_Input(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }
  function reset_Result(e) {
    e.preventDefault();
    setResult((resault) => resault * 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <div>
          <p ref={resultRef}>{result}</p>
        </div>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />

        <button onClick={plus}>add</button>
        <button onClick={subtract}>subtract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={reset_Input}>reset Input</button>
        <button onClick={reset_Result}>reset Result</button>
      </form>
    </div>
  );
}

export default App;
