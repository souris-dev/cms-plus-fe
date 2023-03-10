import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HOMEPAGE_ROUTE } from './constants/routes';

import { Homepage, Login } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path={HOMEPAGE_ROUTE} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
