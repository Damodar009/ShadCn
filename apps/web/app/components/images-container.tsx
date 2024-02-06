"use client"
import Image from "next/image";
import React, { useState } from 'react';

interface ProductImageProps {
  imageUrl: string;
}
const ImageComponent: React.FC<ProductImageProps> = ({ imageUrl }) => {
  const images = ["https://www.mrporter.com/variants/images/1647597325781297/ou/w764_q60.jpg", "https://www.mrporter.com/variants/images/1647597329322583/fr/w1200_q60.jpg", "https://www.mrporter.com/variants/images/43769801094895844/ou/w960_q60.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="flex">
      <div className="">
        {images.map((image, index) => (
          <div className=" p-3">
            <Image
              src={images[currentImage]}
              alt="Photo by Drew Beamer"
              height={25}
              width={30}
            />
          </div>

        ))}
      </div>
      <div className="flex relative w-[356px] h-[452px]">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <div className="bg-white p-2 rounded-full cursor-pointer" onClick={prevImage}>
            &larr;
          </div>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <div className="bg-white p-2 rounded-full cursor-pointer" onClick={nextImage}>
            &rarr;
          </div>
        </div>
        <div className={`w-[356px] h-[452px]`}>
          <Image
            src={images[currentImage]}
            alt="Photo by Drew Beamer"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
export { ImageComponent };

