import './App.css';
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic to calculate and display the BMI and message

  let calcBmi = (event) => {
    event.preventDefault();
  
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      // Convert weight and height to numbers
      const weightInPounds = parseFloat(weight);
      const heightInInches = parseFloat(height);
  
      if (!isNaN(weightInPounds) && !isNaN(heightInInches)) {
        const bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
        setBmi(bmi.toFixed(1));
  
        // Logic for message
        if (bmi < 18.5) {
          setMessage('You are underweight');
        } else if (bmi >= 18.5 && bmi < 24.9) {
          setMessage('You are a healthy weight');
        } else if (bmi >= 25 && bmi < 29.9) {
          setMessage('You are overweight');
        } else {
          setMessage('You are obese');
        }
      } else {
        alert('Please enter valid numeric values for weight and height');
      }
    }
  };
  

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="mb-4">
            <label className="block text-gray-700">Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border rounded w-full px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Height (inches)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded w-full px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600" type="submit">Submit</button>
            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400" type="button" onClick={reload}>Reload</button>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Your BMI is: {bmi}</h3>
            <p className="text-gray-700">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
