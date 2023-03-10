import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HOMEPAGE_ROUTE } from './constants/routes';

import { Collections, ContentTypeBuilder, Login } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path={HOMEPAGE_ROUTE} />
          <Route element={<ContentTypeBuilder />} path={'/contentTypes'} />
          <Route element={<Collections />} path={'/collections/:contentTypeId'} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
