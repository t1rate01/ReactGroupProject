import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import './App.css';
import {useState, useEffect} from 'react';
import SectorChart from './sectorChart';
import DemoData from './demoPiechart';
import SubSectorChart from './subSectorChart';
import BrokenSectorChart from './brokenSectorChart';






/*function App() {
  return (
    <div className="App">
      <h1>Sector Chart</h1>
      <SectorChart />
      <SubSectorChart />
      <BrokenSectorChart />
    </div>
  );
}*/
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h2>Sector Chart</h2>
        <SectorChart />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Sub-Sector Chart</h2>
        <SubSectorChart />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Broken Sector Chart</h2>
        <BrokenSectorChart />
      </div>
    </div>
  );
}


export default App;
