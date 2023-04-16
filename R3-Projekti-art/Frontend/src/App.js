import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';
import Visual4Chart from './Visual4Chart';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Visual 4</h2>
        <Visual4Chart />
      </div>
    </div>
  );
}

export default App;
