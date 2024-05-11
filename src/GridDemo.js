import React from 'react';

function GridDemo() {
    return (
        // grid, grid-cols/rows-{n}, col/row-span-{n}
        <div className="grid grid-cols-3 grid-rows-3">
            <div className="col-span-2 row-span-2 bg-blue-200 flex justify-center items-center">
                Item1
            </div>
            <div className="col-start-3 col-end-4 row-start-1 row-end-3 bg-green-200 flex justify-center items-center">
                Item2
            </div>
            <div className="col-start-2 col-end-4 row-start-3 row-end-4 bg-yellow-200 flex justify-center items-center">
                Item3
            </div>
            <div className="col-start-1 col-end-2 bg-red-200 flex justify-center items-center">
                Item4
            </div>
        </div>
    );
}

export default GridDemo;
