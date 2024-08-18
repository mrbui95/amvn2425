import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/home.scss';
import './styles/phanhang.scss';

import MainPage from './pages/MainPage.jsx';


function App() {
  return (
    <Router basename="/">
      <div>
        <Routes>
          <Route index path="/" element={<MainPage />}>
          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;