import './App.css';
import Navbar from './Components/Navbar.jsx';
import NavbarProps from './Props/NavbarProps.js';
import GetStarted from './Components/GetStarted.jsx';
import GetStartedProps from './Props/GetStartedProps.js'
import Needs from './Components/Needs.jsx';
import NeedsProps from './Props/NeedsProps.js';
import Deals from './Components/Deals.jsx';
import DealsProps from './Props/DealsProps.js';
import Vacation from './Components/VacationPlan.jsx';
import VacationProps from './Props/VacationPlanProps.js';
import Reviews from './Components/Reviews.jsx';
import ReviewsProps from './Props/ReviewsProps.js';
import Blog from './Components/Blog.jsx';
import BlogProps from './Props/BlogProps.js';
import Subscribe from './Components/Subscribe.jsx';
import SubscribeProps from './Props/SubscribeProps.js';
import Footer from './Components/Footer.jsx';
import FooterProps from './Props/FooterProps.js';
import React, { useState } from 'react';

function App() {
  /*const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };*/

  return (
    <div className='App'>
      <Navbar
        props = {NavbarProps}/>
      <GetStarted 
        props = {GetStartedProps}/>
      <Needs 
        cards = {NeedsProps}/>
      <Deals 
        cards = {DealsProps}/>   
      <Vacation
        cards = {VacationProps}/>
      <Reviews 
        cards = {ReviewsProps}/> 
      <Blog 
        cards = {BlogProps}/>
      <Subscribe
        props = {SubscribeProps}/>
      <Footer
        props = {FooterProps}/>
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
