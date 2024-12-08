import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills'; // Importe o componente de Skills
import Contact from './pages/Contact';
const App = () => {
  return (
    <Router>
       <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/Contact" element={<Contact />} /> 

      </Routes>
    </Router>
  );
};

export default App;
