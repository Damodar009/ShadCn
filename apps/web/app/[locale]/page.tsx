"use client";
import { useTranslations } from 'next-intl';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from 'shared/src/components/ui/pagination';
import { Filter } from '../components/filter-product';
import { ICategoryDetail, ICategoryItem } from '../models/category-items';


export default function Index() {
  const t = useTranslations('Index');
  const categoryItems: ICategoryItem[] = Array.from({ length: 5 }, (_, index) => ({
    imageUrl: "https://www.mrporter.com/variants/images/1647597330232440/ou/w764_q60.jpg",
    categoryTitle: `Product ${index + 1}`,
  }));

  const categoryDetails: ICategoryDetail = {
    title: 'Best of bags',
    subTitle: 'Pants',
    description: 'Build your new-season wardrobe with the latest designer coats & jackets, knitwear, sweats and smart tailoring, with everyday essentials such as T-shirts, casual shirts, trousers and denim jeans. Don’t forget to check out our shoe selection, too, where you’ll find loafers, boots, sneakers and more.',
    categoryItems: categoryItems,
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling behavior
    });
  };
  return (
    <div className="bg-background w-full h-full flex justify-center ">
      <div >
        <Filter />

        <div className="border-t w-full border-gray-300 my-4"></div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

      </div>
      {/* <div className=' pt-90'>
        <CategoryDetail categoryDetails={categoryDetails} />
        <div>
          <ProductList />
        </div>
      </div> */}
    </div>
  );
}






