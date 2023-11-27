import React from 'react';
import Navbar from './Component/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App =() => {
  return (
    <div>
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;     