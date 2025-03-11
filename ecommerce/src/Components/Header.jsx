import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Globe } from 'lucide-react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const cartItems = useSelector(state=>state.cart.items)
  const totalItems = cartItems.reduce((total,item)=> total+item.quantity, 0)

  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Globe size={32} />
            <span>ShoppyGlobe</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-indigo-200">Home</Link>
   
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
