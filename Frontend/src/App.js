
import Visual2 from './Visual2/visual2Chart';
import sectorChart from './Visual5/sectorChart'
import MainMenu from './controller/mainmenu';
import DemoData from './Visual5/demoPiechart';
import LoginPage from './login_register/loginpage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';



function App() {   // kutsutaan aluksi vain MainMenu, joka ohjaa logiikkaa
  return (
    <BrowserRouter>
    <div>
      <div className='logobar'>
        <div>Group 3</div>
        <div>Hienosti</div>
        <Link to="demo"><button>Demodataan</button></Link>
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/demo" element={<DemoData />} />
        </Routes>
    </div>

    </BrowserRouter>
  );
}


export default App;
