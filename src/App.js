import './App.css';
import Navbar from './Components/Navbar.jsx';
import NavbarProps from './Props/NavbarProps.js';
import GetStarted from './Components/GetStarted.jsx';
import GetStartedProps from './Props/GetStartedProps.js'
import Needs from './Components/Needs.jsx';
import NeedsProps from './Props/NeedsProps.js';
import Footer from './Components/Footer.jsx';
import FooterProps from './Props/FooterProps.js';
import Deals from './Components/Deals.jsx';
import Vacation from './Components/VacationPlan.jsx';
import VacationProps from './Props/VacationPlanProps.js';
import Reviews from './Components/Reviews.jsx';
import ReviewsProps from './Props/ReviewsProps.js';
import Blog from './Components/Blog.jsx';
import BlogProps from './Props/BlogProps.js';

function App() {
  /*
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  console.info('LN 33 | App.js | Deals: ', Deals);
  console.info('LN 34 | App.js | DealsProps: ', DealsProps);
  */

  return (
    <div className='App'>
      <Navbar
        image={NavbarProps.image}
        li1={NavbarProps.li1}
        li2={NavbarProps.li2}
        li3={NavbarProps.li3}
        li4={NavbarProps.li4}
        li5={NavbarProps.li5}
        a1={NavbarProps.a1}
        a2={NavbarProps.a2}/>
      <GetStarted 
        image = {GetStartedProps.image1}/>
      <Needs cards = {NeedsProps}/>
      <Deals />   
      <Vacation
        cards = {VacationProps}/>
      <Reviews 
        cards = {ReviewsProps}/> 
      <Blog 
        cards = {BlogProps}/>
      <Footer
        image1 = {FooterProps.image1}
        image2 = {FooterProps.image2}/>
    </div>
  );
}

export default App;

