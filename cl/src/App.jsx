import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./componants/Home'));
import AddProduct from './componants/AddProduct';
import UpdateProduct from './componants/UpdateProduct';
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-product' element={<AddProduct/>} />
          <Route path='/updateProduct/:id' element={<UpdateProduct/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
