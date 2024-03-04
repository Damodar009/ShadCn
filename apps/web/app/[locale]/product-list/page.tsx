'use client';

import { Filter } from "../../components/filter-product";
import ProductCard from "../../components/product_card";
import Product from "../../models/product";

export const ProductList = () => {
    const baseImageUrl = 'https://www.mrporter.com/variants/images/1647597327244661/in/w1200_q60.jpg';

    const products: Product[] = Array.from({ length: 20 }, (_, index) => ({
        title: `Product ${index + 1}`,
        subtitle: `Subtitle ${index + 1}`,
        imageUrl: baseImageUrl,
        price: `$${(index + 1) * 10}`,
        hoverImageUrl: "https://www.mrporter.com/variants/images/1647597330232440/ou/w764_q60.jpg",
      }));


    return (
      <div className="w-full flex justify-center">
         <div >
          <Filter/>
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-screen-xl ">
        {products.map((product, index) => (
          <ProductCard 
          key={index}
          product={product}/>
         ))}
        </div>
      </div>
    );
  };