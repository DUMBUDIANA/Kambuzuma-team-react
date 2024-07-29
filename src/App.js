import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Banner from "../src/pages/Banner";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans";

import HostTwo   from './pages/HostTwo';
import Host   from './pages/Host';



function App() {
  return (

    <div className='main-section'>
    <BrowserRouter>
      <header className='Header-main'>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/About">About</Link>
          <Link to="/Vans">Vans</Link>

          <Link to="/Host">Host</Link>
          <Link to="/HostTwo">HostTwo</Link>


        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vans" element={<Vans />} />

        <Route path="/Host" element={<Host />} />
        <Route path="/HostTwo" element={<HostTwo />} />


      </Routes>
    </BrowserRouter>
    </div>
  )
};


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

  export default App;