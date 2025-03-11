import React from "react";
import { ProductList } from "./ProductList";


export const Home = () => {
    return (
      <main>
        <div className="bg-indigo-600 text-white py-12 mb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to ShoppyGlobe</h1>
            <p className="text-xl">Discover amazing products at great prices</p>
          </div>
        </div>
        <ProductList />
      </main>
    );
}