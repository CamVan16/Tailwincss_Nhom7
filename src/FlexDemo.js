import React from 'react';

function FlexDemo() {
    return (
        // flex, flex-col, flex-row, flex-wrap, flex-grow
      <div className="flex flex-col md:flex-row md:flex-wrap">
        <div className="bg-red-500 p-4 flex justify-center items-center">
          Item 1
        </div>
        <div className="flex-grow bg-green-500 p-4 flex justify-center items-center ">
          Item 2
        </div>
        <div className="bg-blue-500 p-4 flex justify-center items-center">
          Item 3
        </div>
      </div>
    );
  }
  

export default FlexDemo;
