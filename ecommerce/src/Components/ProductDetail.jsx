import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { useState } from "react"
import {addToCart} from "../Store/cartSlice"
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';






export const ProductDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [product , setProduct] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(null)


useEffect(()=>{
    const fetchProduct = async()=>{
        try{
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            if(!response.ok){
                throw new Error('Product Not Found')
            }
            const data = await response.json()
            setProduct(data)
        }catch (err){
            setError(err.message || 'An error occurred');
        } finally{
            setLoading(false);
        }
    }
    fetchProduct()
},[id])

if(loading){
    return(
        <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
}

if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 fill-current" size={20} />
              <span className="ml-2 text-gray-600">{product.rating} rating</span>
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
              <span className="ml-2 text-gray-500">In Stock: {product.stock}</span>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700"><strong>Brand:</strong> {product.brand}</p>
              <p className="text-gray-700"><strong>Category:</strong> {product.category}</p>
            </div>
            
            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }