import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyDetails from './pages/CompanyDetails';
import Properties from './pages/Properties';
import Rates from './pages/Rates';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
    </Router>
  );
}

export default App;
