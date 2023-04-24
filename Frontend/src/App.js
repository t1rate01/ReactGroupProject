import LoginPage from './frontpage_login_register/loginpage';
import RegisterPage from './frontpage_login_register/registerpage';
import DefaultMenu from './menuviews/defaultmenu';
import ChartView from './menuviews/menuchartview';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FrontPage from './frontpage_login_register/frontpage';
import ShowAll from './frontpage_login_register/showall';



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
        <Route path="/menu" element={<DefaultMenu />} />
        <Route path="/menu/view" element={<ChartView />} />
        <Route path="/showall" element={<ShowAll />} />
        </Routes>
    </div>

    </BrowserRouter>
  );
}


export default App;
