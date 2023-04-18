import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import './App.css';
import {useState, useEffect} from 'react';
import SectorChart from './Visual5/sectorChart.js';
import DemoData from './Visual5/demoPiechart';
import SubSectorChart from './Visual5/subSectorChart';
import BrokenSectorChart from './Visual5/brokenSectorChart';
import MyVisual3Chart from './Visual3/visual3Chart';

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
        <MyVisual3Chart />
      </div>
    </div>
  );
}


export default App;
