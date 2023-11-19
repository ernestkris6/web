import React from 'react';
import Navbar from './Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App =() => {
  return (
    <div>

      <Navbar />
        <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;