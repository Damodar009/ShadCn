'use client'
import Image from "next/image";
import Product from "../models/product";


interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleClick = () => {
    console.log(product);
  };
  return (
    <div className='h-screen flex-col items-center justify-center p-4 w-[256px] '
    >
      <div className="relative w-[256px] h-[352px]" onClick={handleClick}>
        <div className="absolute inset-0 bg-muted"      
        >
          <Image
            src={product.imageUrl}
            alt="Photo by Drew Beamer"
            layout="fill"
            objectFit="cover"
            className="duration-300 ease-in-out hover:opacity-0"
          />
          <Image
            src={product.hoverImageUrl}
            alt="Photo by Drew Beamer"
            layout="fill"
            objectFit="cover"
            className="duration-300 ease-in-out hover:opacity-0"
          />
        </div>
      </div>
      {/* <ProductImage imageUrl={''}/> */}
      <p className="uppercase pt-2 max-w-xs truncate text-gray-950 dark:text-white">{product.title}</p>
      <p className=" uppercase text-[12px] text-gray-600 dark:text-white">{product.subtitle} </p>
      <p className=" uppercase pt-6 text-[14px]  text-gray-800 dark:text-white">{product.price}</p>
    </div>
  );
}
export default ProductCard