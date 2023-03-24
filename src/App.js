import React, { useState } from 'react';
import Paintings from './components/paintings';
import landingPage from './components/landingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import navigation from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <Router>
      <div>
        <navigation />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<landingPage />} />
          <Route path="navigation" element={<navigation/>} />
          <Route path="Paintings" element={<Paintings/>} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
