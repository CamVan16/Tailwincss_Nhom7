import React from 'react';

function ProductCard(){
    return (
        // shadow-*, opacity-*, mix-blend-g*, bg-blend-*
        <div className="container mx-auto py-8 flex justify-center items-center h-screen">
          <div className="bg-gray-200 p-4 rounded-lg
           shadow-lg shadow-gray-500 opacity-80 mix-blend-overlay bg-blend-multiply">
            <div className="w-64 h-64 min-w-32 min-h-32 max-w-xs max-h-xs bg-blue-400 mb-4">
            <img src='product-image.jpg' alt="Product" 
            className="w-64 h-64 min-w-32 min-h-32 max-w-xs max-h-xs mb-4" />
            </div>
            <h2 className="text-xl font-bold">Air Jordan 1</h2>
            <p className="text-gray-700">Jordan 1 Shattered Backboard</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold">$250</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }
export default ProductCard;

