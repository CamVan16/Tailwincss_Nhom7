import React from 'react';
function AccessibilityDemo(){
    return (
        // sr-only, force-black
        <div className="bg-gray-200 p-4">
          {/* Text visible to screen readers */}
          <div className="sr-only">This text is only for screen readers</div>
          {/* Text visible to sighted users */}
          <div className="text-gray-900 force-black">This text will always be black</div>
        </div>
      );
}

export default AccessibilityDemo;
