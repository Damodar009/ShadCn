import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@shadcn-next-skeleton/shared';
export default async function Index() {
  return (
    <>
      <div className="bg-indigo-500 p-2 font-mono">Hello!</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
