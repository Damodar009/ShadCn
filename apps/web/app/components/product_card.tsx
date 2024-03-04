import Image from 'next/image';
import React from 'react';
import Product from '../models/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleClick = () => {
    console.log(product);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <div>
          <Image
            src={product.imageUrl}
            alt="Product Image"
            width={256}
            height={352}
            className="hover-image"
          />
        </div>
      </div>
      <p className="product-title truncate">{product.title}</p>
      <p className="product-subtitle">{product.subtitle}</p>
      <p className="product-price">{product.price}</p>
    </div>
  );
};

export default ProductCard;
