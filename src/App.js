//import logo from './logo.svg';
import './App.css';
import Component from './Component';
import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel.jsx';
import navbarData from './Props/NavbarProps.js';
import GetStarted from './Components/GetStarted.jsx';
import getStartedData from './Props/GetStartedProps.js'
import Needs from './Components/Needs.jsx';
import needsData from './Props/NeedsProps.js';
import Footer from './Components/Footer.jsx';
import footerProps from './Props/FooterProps.js';
import Deals from './Components/Deals.jsx';
import dealsProps from './Props/DealsProps.js';

function App() {
  const cards = [
    { id: 1, title: 'Card 1', content: 'Content of Card 1' },
    { id: 2, title: 'Card 2', content: 'Content of Card 2' },
    { id: 3, title: 'Card 3', content: 'Content of Card 3' },
  ];

  return (
    <div className='App'>
      <Navbar
        image={navbarData.image}
        li1={navbarData.li1}
        li2={navbarData.li2}
        li3={navbarData.li3}
        li4={navbarData.li4}
        li5={navbarData.li5}
        a1={navbarData.a1}
        a2={navbarData.a2}/>
      <GetStarted 
        image = {getStartedData.image1}/>
      <Needs
        image1 = {needsData.image1}
        image2 = {needsData.image2}
        image3 = {needsData.image3}
        image4 = {needsData.image4}/>
      <Deals 
        cards = {dealsProps}/>
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
