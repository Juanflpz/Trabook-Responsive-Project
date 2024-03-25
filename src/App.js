import './App.css';
import Navbar from './Components/Navbar.jsx';
import NavbarProps from './Props/NavbarProps.js';
import Footer from './Components/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import FooterProps from './Props/FooterProps.js';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';


function App() {

  function ScrollToTopOnPageChange() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <div className='App'>
      <Router>
      <Navbar
        props = {NavbarProps}/>
        <ScrollToTopOnPageChange />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      <Footer
      props = {FooterProps}/>
      </Router>
     
    </div>
  );
}

export default App;


/*
<Navbar
        image={NavbarProps.image}
        li1={NavbarProps.li1}
        li2={NavbarProps.li2}
        li3={NavbarProps.li3}
        li4={NavbarProps.li4}
        li5={NavbarProps.li5}
        a1={NavbarProps.a1}
        a2={NavbarProps.a2}/>
*/
