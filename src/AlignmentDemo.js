import React from 'react';

function AlignmentDemo() {
  return (
    // gap-{n}, justify-center, items-center, self-start, justify-self-start/end
      <div className="grid grid-cols-3 grid-rows-3 gap-4 justify-center items-center">
        <div className="bg-blue-400 flex justify-center items-center self-start">Item1</div>
        <div className="bg-green-400 flex justify-center items-center justify-self-end">Item2</div>
        <div className="bg-yellow-400 flex justify-center items-center">Item3</div>
        <div className="bg-red-400 flex justify-center items-center justify-self-start">Item4</div>
        <div className="bg-purple-400 flex justify-center items-center">Item5</div>
      </div>
  );
}

export default AlignmentDemo;
