//import logo from './logo.svg';
import './App.css';
import Component from './Component';
import Navbar from "./Components/Navbar.jsx";
import navbarData from "./Props/NavbarProps.js";

function App() {
  return (
    <div className='App'>
      <Navbar
        image={navbarData.image}
        li1={navbarData.li1}
        li2={navbarData.li2}
        li3={navbarData.li3}
        li4={navbarData.li4}
        li5={navbarData.li5}
        a1={navbarData.li2}
        a2={navbarData.li2}
      />
    </div>
  );
}
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
