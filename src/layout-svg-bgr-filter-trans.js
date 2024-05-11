import React from 'react';

const ExampleComponent = () => {
  return (
    // container, columns, break after/before/inside
    // <div className="container w-1/2 mx-auto">
    //   <header className="bg-blue-500 text-white p-4 break-after-avoid">
    //     <h1>Header</h1>
    //   </header>
    //   <main className="columns-3 gap-4">
    //     <div className="p-4 border border-gray-400 break-inside-avoid">
    //       <h2>Column 1</h2>
    //       <p>This is some content for column 1.</p>
    //     </div>
    //     <div className="p-4 border border-gray-400 break-inside-avoid">
    //       <h2>Column 2</h2>
    //       <p>This is some content for column 2.</p>
    //     </div>
    //     <div className="p-4 border border-gray-400 break-inside-avoid">
    //       <h2>Column 3</h2>
    //       <p>This is some content for column 3.</p>
    //     </div>
    //   </main>
    //   <footer className="bg-blue-500 text-white p-4">
    //     <h3>Footer</h3>
    //   </footer>
    // </div>

    //box decortion break, box sizing, display
    // <div className="container mx-auto">
    //   <div className="box-border p-4 border-4 border-gray-400">
    //     <h2 className="mb-2">Box Decoration Break, Box Sizing, and Display</h2>
    //     <p className="box-decoration-clone bg-pink-500">I’m selfish, impatient and a little insecure.
    //       <span className="inline-block">
    //         I make mistakes, I am out of control and at times hard to handle. 
    //         But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best. 
    //       </span> 
    //     </p>
    //     <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500">
    //       Success is not final, failure is not fatal: It is the courage to continue that counts.
    //       <br/> The difference between a successful person and others is not a lack of strength, 
    //       not a lack of knowledge, but rather a lack in will.
    //     </span>
    //   </div>
    // </div>

    //float, clear, object fit, object position, overflow
    // <div className="container w-1/3 mx-auto overflow-hidden">
    //   <img class="float-left clear-right w-32 h-32 object-cover object-center" 
    //   src="../eximage.jpg" alt="eximage"></img>
    //   <img class="float-right w-48 h-48 object-cover object-right-top" 
    //   src="../eximage.jpg" alt="eximage"></img>
    //   <p className="clear-left">
    //   Maybe we can live without libraries, people like you and me. 
    //   Maybe. Sure, we're too old to change the world, 
    //   but what about that kid, sitting down, opening a book, 
    //   right now, in a branch at the local library and finding 
    //   drawings of pee-pees and wee-wees on the Cat in the Hat 
    //   and the Five Chinese Brothers? Doesn't HE deserve better? Look. 
    //   If you think this is about overdue fines and missing books, 
    //   you'd better think again. This is about that kid's right to read 
    //   a book without getting his mind warped! 
    //   Or: maybe that turns you on, Seinfeld; 
    //   maybe that's how y'get your kicks. 
    //   You and your good-time buddies.
    //   </p>
    // </div>

    //padding, margin, space between
    // <div className="container mx-auto">
    //   <div className="flex justify-between items-center bg-gray-200 p-4">
    //     <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
    //       Logo
    //     </div>
    //     <ul className="flex space-x-20">
    //       <li><a href="./home" className="text-gray-800">Home</a></li>
    //       <li><a href="./About" className="text-gray-800">About</a></li>
    //       <li><a href="./Store" className="text-gray-800">Store</a></li>
    //       <li><a href="./Contact" className="text-gray-800">Contact</a></li>
    //     </ul>
    //     <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
    //       Sign In
    //     </button>
    //   </div>
    // </div>

    //background
    // <div className="container w-1/2 mx-auto">
    //   <div className="h-screen bg-gradient-to-r from-blue-500
    //    to-purple-500 flex items-center justify-center">
    //     <div className="bg-white rounded-lg p-8">
    //       <p className=" text-gray-700">
    //       Maybe we can live without libraries, people like you and me. 
    //       Maybe. Sure, we're too old to change the world, 
    //       but what about that kid, sitting down, opening a book, 
    //       right now, in a branch at the local library 
    //       and finding drawings of pee-pees and wee-wees 
    //       on the Cat in the Hat and the Five Chinese Brothers? 
    //       Doesn't HE deserve better? Look. 
    //       If you think this is about overdue fines and missing books, 
    //       you'd better think again. This is about that kid's right to 
    //       read a book without getting his mind warped! 
    //       Or: maybe that turns you on, Seinfeld; 
    //       maybe that's how y'get your kicks. 
    //       You and your good-time buddies.</p>
    //     </div>
    //   </div>
    // </div>

    //filters
    // <div className="container mx-auto w-1/2">
    //   <img className="float-left w-64 h-64" src="../eximage.jpg" alt="normal"></img>
    //   <img className="float-right w-64 h-64 filter blur-none backdrop-brightness-75 
    //                   contrast-150 drop-shadow-2xl backdrop-invert"
    //   src="../eximage.jpg" alt="filters"></img>
    // </div>

    //transforms
    // <div class="container w-1/2 mx-auto">
    //   <img className="float-left w-64 h-64" src="../eximage.jpg" alt="normal"></img>
    //   <img class="float-right w-64 h-64 transform origin-top-left 
    //   scale-50 skew-x-12 rotate-45 translate-x-10" src="../eximage.jpg" alt="eximage"></img>
    // </div>

    //svg
    
    <svg class="w-48 h-48 fill-[#77a787] stroke-green-200 stroke-2"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
      <path stroke-linecap="round" stroke-linejoin="round" 
        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 
        0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
    </svg>
  );
};

export default ExampleComponent;
