<<<<<<< HEAD
=======
import './App.css';
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Banner from "../src/pages/Banner";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans";
<<<<<<< HEAD
import "./App.css"
function App() {

 


  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/About">About</Link>
=======

function App() {
  return (

    <div className='main-section'>
    <BrowserRouter>
      <header className='Header-main'>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/About">About</Link>
          <Link to="/Vans">Vans</Link>
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Banner />} />
<<<<<<< HEAD
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  
  )
 
=======
        <Route path="/About" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
};


ReactDOM
  .createRoot(document.getElementById('root'))
<<<<<<< HEAD
  .render(<App/>);
 
=======
  .render(<App />);
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77

  export default App;