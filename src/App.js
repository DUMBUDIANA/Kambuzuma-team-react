import './App.css';
import React, {  useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Banner from "../src/pages/Banner";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans";
import logo from "../src/Images/logog.png";
import logIn from "../src/Images/User circle.png";
import VansDetails from './pages/VansDetails';
import HostVans from '../src/HostPage/Vans';
import Dashboard from '../src/HostPage/Dashboard';
import Income from '../src/HostPage/Income';
import Reviews from '../src/HostPage/Reviews';
// import PrivateRoutesLayout from '../src/layouts/PrivateRouteLayout';
// import Layout from './components/Layout.jsx'
import "./App.css";
// import Host from '../src/HostPage/Dashboard';
import Authentication from './pages/Authentication';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import ProtectedLink from './layouts/ProtectedLink';

function App() {
  // const [onVanspage, setonVansPage] = useState(false);

  return (  
    <div className='main-section'>
      <header className='Header-main'>
        <Link className="site-logo" to="/"><img src={logo} alt= "logo"className="logo" /></Link>
        <nav>
          
          {/* {onVanspage && ( */}
            <Link to="/Login" className='links'>Host</Link>
          {/* )} */}
          
        
          <Link to="/About" className='links'>About</Link>
          <Link to="/Vans" className='links'>Vans</Link>
          <Link to="/Login" className='links'><img src={logIn} alt="login"  className='sign-icon'/></Link>
        </nav>
      </header>

      <Routes>
        {/* <Route path="/" element = {<Layout />}> */}
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetails />} />
        
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/Login" element={<Login  />}/>
        <Route path="/SignUp" element={<SignUp/>}/>
       

        {/* <Route element={<PrivateRoutesLayout />}> */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Hostvans" element={<HostVans />} />
      {/* </Route> */}
          {/* </Route> */}
      </Routes>
    </div>
  )
};
export default App;