import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './pages/Footer';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  useEffect(() => {
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);  
  }, []);

  return (
    <Router>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
            // <Footer/> 

  );
}

export default App;
