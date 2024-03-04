'use client';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ICategoryDetail } from '../models/category-items';

interface ICategoryDetailProps {
  categoryDetails: ICategoryDetail
  onCategoryItemClick?: () => void;
}

const CategoryDetail: React.FC<ICategoryDetailProps> = ({ categoryDetails, onCategoryItemClick }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
<div className='flex  flex-col justify-center items-center'>
    <div className='w-full md:p-16'>
      <h1>
        {categoryDetails.title} {categoryDetails.subTitle}
      </h1>
      <h3 className=' lg:w-[40%] mt-3'>
        {categoryDetails.description} </h3>
      <div className='hidden md:flex mt-7'>
        {categoryDetails.categoryItems?.map((categoryDetail, index) => (
          <div key={index} className=' flex flex-col items-center mr-8' onClick={onCategoryItemClick}>
            <Image
              key={index}
              src={'https://www.mrporter.com/variants/images/1647597327244661/in/w1200_q60.jpg'}
              alt="Product Image"
              width={200}
              height={300}
              className="hover-image"
            />
            <div className=' mt-5'>
              {categoryDetail.categoryTitle}
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden mt-7">
        <Carousel
          responsive={responsive}
          autoPlay={false}
        >
          {categoryDetails.categoryItems?.map((categoryDetail, index) => (
            <div key={index} className=' flex flex-col items-center ml-3' onClick={onCategoryItemClick}>
              <Image
                key={index}
                src={'https://www.mrporter.com/variants/images/1647597327244661/in/w1200_q60.jpg'}
                alt="Product Image"
                width={200}
                height={300}
              />
              <div className=' mt-5'>
                {categoryDetail.categoryTitle}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
    </div>
  );
};

export default CategoryDetail;