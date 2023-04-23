
import Visual2 from './Visual2/visual2Chart';
import sectorChart from './Visual5/sectorChart'
import MainMenu from './menuviews/mainmenu';
import DemoData from './Visual5/demoPiechart';
import LoginPage from './frontpage_login_register/loginpage';
import RegisterPage from './frontpage_login_register/registerpage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FrontPage from './frontpage_login_register/frontpage';



function App() {   // kutsutaan aluksi vain MainMenu, joka ohjaa logiikkaa
  return (
    <BrowserRouter>
    <div>
      <div className='logobar'>
        <div>Group 3</div>
        <div>Hienosti</div>
      </div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </div>

    </BrowserRouter>
  );
}


export default App;
