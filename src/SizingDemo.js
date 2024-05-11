import React from 'react';

function SizingDemo() {
    return (
        <div className="container mx-auto py-8 max-w-xs flex items-center justify-center">
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <div className="w-64 h-64 min-w-32 min-h-32 max-w-xs max-h-xs bg-blue-400 mb-4">
            <img src='product-image1.jpg' alt="Product" 
            className="w-64 h-64 min-w-32 min-h-32 max-w-xs max-h-xs mb-4" />
            </div>
            <h2 className="text-xl font-bold">Converse All Star Classic</h2>
            <p className="text-gray-700">Canvas sneaker with rubber sole.</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold">$150</span>
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }

export default SizingDemo;
