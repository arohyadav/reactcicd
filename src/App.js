import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1></h1>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
