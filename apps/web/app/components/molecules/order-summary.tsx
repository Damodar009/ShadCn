import React from 'react';

interface OrderSummaryProps {
  title: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ title }) => {
  const handleClick = () => {
    console.log(title);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <div>
          {/* <Image
            src={"https://www.mrporter.com/variants/images/1647597329765597/in/w300_a3-4_ccrop.jpg"}
            alt="Product Image"
            width={256}
            height={352}
            className="hover-image"
          /> */}
        </div>
      </div>
    
    </div>
  );
};

export default OrderSummary;
