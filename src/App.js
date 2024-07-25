import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Banner from "../src/pages/Banner";
import About from "../src/pages/About";
import Vans from "../src/pages/Vans";
import Card from "./components/Database/Database.jsx"

function App() {

  const Aboutvans = Card.map(item => {
   
    return(

          <About
          
          image2={item.image2}
          button2={item.button2}
          backgroundcolor2={item.backgroundcolor2}
          color2={item.color2}
          description2={item.description2}
          text2={item.text2}
          textbottom={item.textbottom}
          
          />,

          <Vans
          image={item.image}
          type={item.type}
          price={item.price}
          button={item.button}
          color={item.color}
          day={item.day}

          />,


           <Banner
           image1={item.image1}
           description1={item.description1}
           text1={item.text1}
           button1={item.button1}
           color1={item.color1}

           />

          




    )

  })


  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/About">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
};


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

  export default App;