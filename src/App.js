import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NB from './Components/NB';
import Home from './Components/Home';
import About from './Components/About';
import Galery from './Components/Galery';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <Router>
        <NB />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
