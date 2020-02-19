import React, { useState, FormEvent } from "react";
import { convertBinaryStringToDecimal } from "./utils/bin2dec";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [decimalNumber, setDecimalNumber] = useState(0);

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (text.match(/^[0-1]+$/g) === null) {
      alert("Please enter a valid binary number");
      return;
    }
    setDecimalNumber(convertBinaryStringToDecimal(text));
  }

  return (
    <div className="container">
      <h1>Binary to Decimal Converter</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter the binary number"
          value={text}
          onChange={ev => setText(ev.target.value)}
        />

        <button type="submit">Convert</button>
      </form>

      <p>
        <b> The decimal number is: {decimalNumber}</b>
      </p>
    </div>
  );
}

export default App;
