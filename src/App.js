
import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import CalculateButton from './components/CalculateButton';
import AgeDisplay from './components/AgeDisplay';

function App() {
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const enteredYear = parseInt(birthYear);
    if (!isNaN(enteredYear) && enteredYear <= currentYear) {
      const calculatedAge = currentYear - enteredYear;
      setAge(`Your age is ${calculatedAge} years.`);
    } else {
      setAge('Please enter a valid birth year.');
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <InputField value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
      <CalculateButton onClick={calculateAge} />
      <AgeDisplay age={age} />
    </div>
  );
}

export default App;
