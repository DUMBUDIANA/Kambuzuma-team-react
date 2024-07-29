import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Banner from "../src/pages/Banner";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans";
import "./App.css"
function App() {
  return (  
    <div className='main-section'>
       <BrowserRouter>
      <header className='Header-main'>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/About">About</Link>
          <Link to="/Vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
      </Routes>

    </BrowserRouter>
    </div>
  )
};


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
  export default App;