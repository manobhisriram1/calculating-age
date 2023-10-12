
import React, { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const today = new Date();
    const ageDiff = today - dobDate;
    const calculatedAge = new Date(ageDiff);
    setAge(Math.abs(calculatedAge.getUTCFullYear() - 1970));
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
        <label>Enter your date of birth: </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age && <h2>Your age is: {age} years</h2>}
    </div>
  );
}

export default App;
