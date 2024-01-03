import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './Components/Homepage.js';
import About from './Components/About.jsx';
import Work from './Components/Work.jsx';
import Contact from './Components/Contact.jsx';
import PricingPlan from './Components/Pricing.jsx';
import Footer from './Components/Footer.jsx';
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js';
import Services from './Components/Services.jsx';
import './App.css';
import Navbar from './Components/Navbar.js';
import Pricing from './Components/Pricing.jsx';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login></Login>} ></Route>
      <Route path="/Signup" element={<SignUp></SignUp>} ></Route>
      <Route path="/" element={<Homepage></Homepage>} ></Route>
      {/* <Route path="/Home" element={<About />} ></Route>
      <Route path="/Contact" element={<Contact />} ></Route>
      <Route path="/Home" element={<Work />} ></Route>
      <Route path="/Home" element={<Pricing />} ></Route>
    <Route path="/Home" element={<Footer />} ></Route> */}
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
