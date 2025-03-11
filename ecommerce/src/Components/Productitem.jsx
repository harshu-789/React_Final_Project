import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart , removeFromCart } from "../Store/cartSlice";
import {Star, ShoppingCart} from "lucide-react"


export const ProductItem = ({product}) => {
    const dispatch = useDispatch()

return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 fill-current" size={16} />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}