import React from 'react';

const GridExample = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <div className="bg-blue-500 p-4 text-white">Column 1</div>
          <div className="bg-red-500 p-4 text-white">Column 2</div>
          <div className="bg-green-500 p-4 text-white">Column 3</div>
        </section>
      );
};
    
export default GridExample;