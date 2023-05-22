
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// // import PortfolioContainer2 from './pages/PortfolioContainer2';
import Portfolio from './pages/dashBoard/components/portfolio';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio-container2" component={PortfolioContainer2} />
        </Routes>
      </Router> */}
      <Portfolio />
    </div>
  );
}

export default App;
