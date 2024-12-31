import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing-page';
import MainContent from './components/main-content';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainContent />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
