import React from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page4 from './Page4';
import Register from './Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
