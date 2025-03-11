import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import { Header } from './Components/Header';


const ProductList = React.lazy(() => import('./Components/Home').then(module => ({ default: module.Home })));
const ProductDetail = React.lazy(() => import('./Components/ProductDetail').then(module => ({ default: module.ProductDetail })));
const Cart = React.lazy(() => import('./Components/Cart').then(module => ({ default: module.Cart })));
const NotFound = React.lazy(() => import('./Components/NotFound').then(module => ({ default: module.NotFound })));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<ProductList />} />
   
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
