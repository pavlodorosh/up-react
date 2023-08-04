import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProductCard from './ProductCard';
import Error from './Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductCard/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  );
};

export default App;