import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Product from './component/Product';

function App() {
  return(
<Router>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/product' element={<Product />}/>
  
  </Routes>
</Router>
  );
}
export default App