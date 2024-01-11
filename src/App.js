import React from 'react';
import Navbar from './Component/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';

const App =() => {
  return (
    <div>
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>Home</Route>
          <Route path='/create' element={<Create />}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;     