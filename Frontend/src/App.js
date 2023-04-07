import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {useState, useEffect} from 'react';
import SectorChart from './Visual5/sectorChart.js';
import MainMenu from './controller/mainmenu.js';





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
function App() {   // kutsutaan aluksi vain MainMenu, joka ohjaa logiikkaa
  return (
        <MainMenu />
  );
}


export default App;
