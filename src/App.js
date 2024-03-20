//import logo from './logo.svg';
import './App.css';
import Component from './Component';
import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel.jsx';
import navbarProps from './Props/NavbarProps.js';
import GetStarted from './Components/GetStarted.jsx';
import GetStartedProps from './Props/GetStartedProps.js'
import Needs from './Components/Needs.jsx';
import NeedsProps from './Props/NeedsProps.js';
import Footer from './Components/Footer.jsx';
import footerProps from './Props/FooterProps.js';
import Deals from './Components/Deals.jsx';
import dealsProps from './Props/DealsProps.js';
import Vacation from './Components/VacationPlan.jsx';
import vacationProps from './Props/VacationPlanProps.js';
import Reviews from './Components/Reviews.jsx';
import reviewsProps from './Props/ReviewsProps.js';
import React, { useState } from 'react';


function App() {
  const cards = [
    { id: 1, title: 'Card 1', content: 'Content of Card 1' },
    { id: 2, title: 'Card 2', content: 'Content of Card 2' },
    { id: 3, title: 'Card 3', content: 'Content of Card 3' },
  ];

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
        image={navbarProps.image}
        li1={navbarProps.li1}
        li2={navbarProps.li2}
        li3={navbarProps.li3}
        li4={navbarProps.li4}
        li5={navbarProps.li5}
        a1={navbarProps.a1}
        a2={navbarProps.a2}/>
      <GetStarted 
        image = {GetStartedProps.image1}/>
      <Needs cards = {NeedsProps}/>
      <Deals 
        cards = {dealsProps}/>   
      <Vacation
        cards = {vacationProps}/>
      <Reviews 
        cards = {reviewsProps}/>      
      <Footer
        image1 = {footerProps.image1}
        image2 = {footerProps.image2}/>
    </div>
  );
}

/**
 *  <h1>Dynamic Carousel</h1>
      <Carousel cards={cards}/>
 */
/*
<h1>Dynamic Carousel</h1>
      <Carousel cards={cards} />
      */
//<img src={logo} className="App-logo" alt="logo" />

/*
<div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component/>
      </header>
    </div>
*/
export default App;

