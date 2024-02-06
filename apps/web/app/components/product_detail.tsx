'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button
} from '@shadcn-next-skeleton/shared';
import ColorContainer from './color_container';
import TshirtSizes from './product-size-list';

const ProductDetail: React.FC = () => {

  return (
    <div className='h-screen flex-col items-center justify-center p-4 w-96'>
      <h1 className="text-2xl text-gray-800 mb-[2px]">TOM FORD </h1>
      <p className="text-sm text-gray-600 ">Garment-Dyed Cotton-Piqué Polo Shirt</p>
      <p className="text-[18px] font-semibold text-gray-600 my-5">NPR 3,263</p>
      <p className="text-sm text-gray-700">
        <span className='text-lg'>Colour:</span>
        <span > Pink</span>
      </p>
      <ColorContainer colors={['pink', 'blue', 'green', 'yellow']} />

      <p className="text-lg text-gray-700 mt-5">
        Size:
      </p>
      <TshirtSizes sizes={[233, 342, 422, 2332, 233, 342, 422, 2332, 233, 342, 422, 2332]} />
      <div className="my-5"></div>
      <Button
        className="mb-4"
        size={"xxl"}
      >
        Add to bag
      </Button>

      <div>
        <Button
          variant={"outline"}
          size={"xxl"}
          iconPrefix={<span >🚀</span>}
        >
          Add to Wishlist
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger className=' text-lg'>Editor's Note</AccordionTrigger>
          <AccordionContent className=' py-4'>
            TOM FORD understands the importance of dependable staples. Easy to dress up or down, this polo shirt is cut from breathable cotton-piqué and garment-dyed for softness.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className=' text-lg'>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className=' text-lg'>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

  );
}
export default ProductDetail




