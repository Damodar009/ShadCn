import Image from 'next/image';
import React from 'react';

interface ShopingCartItemProps {
  title: string;
}

const ShopingBagItem: React.FC<ShopingCartItemProps> = ({ title }) => {
  const handleClick = () => {
    console.log(title);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <div>
          <Image
            src={"https://www.mrporter.com/variants/images/1647597329765597/in/w300_a3-4_ccrop.jpg"}
            alt="Product Image"
            width={256}
            height={352}
            className="hover-image"
          />
        </div>
      </div>
    
    </div>
  );
};

export default ShopingBagItem;
