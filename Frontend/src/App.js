
import Visual2 from './Visual2/visual2Chart';
import sectorChart from './Visual5/sectorChart'
import MainMenu from './controller/mainmenu';
import DemoData from './Visual5/demoPiechart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {   // kutsutaan aluksi vain MainMenu, joka ohjaa logiikkaa
  return (
    <BrowserRouter>
    <div>
      <h1>Projektiryhmä 3</h1>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/demo" element={<DemoData />} />
        </Routes>
    </div>

    </BrowserRouter>
  );
}


export default App;
