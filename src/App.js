import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Banner from "../src/pages/Banner";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans";
import logo from "../src/Images/logog.png";
import Host from './pages/Host';
import Hoss from './pages/Hoss';
import "./App.css"
function App() {
  return (  
    <div className='main-section'>
       <BrowserRouter>
      <header className='Header-main'>
        <Link className="site-logo" to="/"><img src={logo} alt= "logo"className="logo" /></Link>
        <nav>
          <Link to="/About">About</Link>
          <Link to="/Vans">Vans</Link>
          <Link to="/Host">Host</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
        <Route path="/Host" element={<Host />} />
        <Route path="/Hoss" element={<Hoss />} />
      </Routes>

    </BrowserRouter>
    </div>
  )
};


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
  export default App;