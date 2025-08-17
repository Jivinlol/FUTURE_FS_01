import logo from './logo.svg';
import './App.css';
import Cards from './Card.js'
import Navbar from './Navbar.js';
import Start from './start.js';
import Skills from './skills.js';
import Contact from './contact.js'
import About from './about.js';
import Footer from './footer.js';
import { useRef } from 'react';
function App() {
  return (
    <div>
      <Navbar/>
      <Cards />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
