import LoginPage from './frontpage_login_register/loginpage';
import RegisterPage from './frontpage_login_register/registerpage';
import DefaultMenu from './menuviews/defaultmenu';
import ChartView from './menuviews/menuchartview';
import BrowserBar from './frontpage_login_register/browserbar';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FrontPage from './frontpage_login_register/frontpage';
import ShowAll from './frontpage_login_register/showall';
import SectorChart from './Visual5/sectorChart';
import ScrollButton from "./frontpage_login_register/scrollButton"



function App() {   // kutsutaan aluksi vain MainMenu, joka ohjaa logiikkaa
  return (
    <BrowserRouter>
    <div className='router'>
    
        <BrowserBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menu" element={<DefaultMenu />} />
        <Route path="/menu/view" element={<ChartView />} />
        <Route path="/showall" element={<ShowAll />} />
        </Routes>
    </div>
    
    </BrowserRouter>
    
  

  );
}


export default App;
