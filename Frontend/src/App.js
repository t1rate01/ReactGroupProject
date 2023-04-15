import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import './App.css';
import {useState, useEffect} from 'react';
import SectorChart from './Visual5/sectorChart.js';
import DemoData from './Visual5/demoPiechart';
import SubSectorChart from './Visual5/subSectorChart';
import BrokenSectorChart from './Visual5/brokenSectorChart';
import Visual1 from './Visual1/visual1';
import Visual2 from './Visual1/vis1chartmonthly';






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
      
      <div>
        <h2>Visual 1</h2>
        <Visual1/>
    </div>
</div>

  );
}


export default App;
