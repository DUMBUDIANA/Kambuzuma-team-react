import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Banner from "../src/pages/Banner";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans";
import logo from "../src/Images/logog.png";
import logIn from "../src/Images/User circle.png";
import CreateAcc from "./pages/SignUp";
import LogIn from './pages/SignIn';
import Hoss from './pages/Hoss';
import "./App.css";

function App() {
  
  return (  
    <div className='main-section'>
       <BrowserRouter>
      <header className='Header-main'>
        <Link className="site-logo" to="/"><img src={logo} alt= "logo"className="logo" /></Link>
        <nav>
          <Link to="/About" className='links'>About</Link>
          <Link to="/Vans" className='links'>Vans</Link>
           <Link to="/SignIn" className='links'><img src={logIn} alt="login"  className='sign-icon'/></Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
        <Route path="/SignIn" element={<LogIn />} />
        <Route path="/SignUp" element={<CreateAcc />} />
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