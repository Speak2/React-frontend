import React from 'react';
import './styles/main.css';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelDetails from './components/hotel-details/HotelDetails';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:slug" element={<HotelDetails />} />
  
        <Route path="*" element={<NotFound />} /> {/* Optional 404 Page */}
      </Routes>
    </Router>



  );
}

export default App;
