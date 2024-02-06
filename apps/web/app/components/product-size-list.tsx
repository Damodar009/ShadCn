import React from 'react';

interface TshirtSizesProps {
  sizes: number[];
}

const TshirtSizes: React.FC<TshirtSizesProps> = ({ sizes }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
      {sizes.map((size, index) => (
        <div
          key={index}
          className=" px-5 py-2 border border-black rounded-xs flex items-center justify-center m-2 text-sm"
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default TshirtSizes;