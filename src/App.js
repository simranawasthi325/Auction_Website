// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AuctionPage from './Pages/AuctionPage';
import CreateAuction from './Pages/CreateAuction';
import Navbar from './Components/Navbar';
import BottomNavbar from './Components/BottomNavbar';

    function App() {
      return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auctions" element={<AuctionPage />} />
            <Route path="/create-auction" element={<CreateAuction />} />
            {/* <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
         <BottomNavbar/>
        </Router>
      );
    }

export default App;
