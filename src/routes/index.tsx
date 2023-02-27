import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../component/layout/navigation';
import HomePage from '../pages/home';

const Router: React.FC = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  </BrowserRouter>
)

export default Router;