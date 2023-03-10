import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HOMEPAGE_ROUTE } from './constants/routes';

import { Homepage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path={HOMEPAGE_ROUTE} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
