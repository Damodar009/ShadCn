'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../../../shared/src/components/ui/accordion";
import { CheckBoxItems, FilterItemAccordian } from "./filter-accordian-item";


export function Filter() {
  const items: CheckBoxItems[] = [
    {
      value: "recents",
      label: "Recents",
      color: "blue",
    },
    {
      value: "home",
      label: "Home",
      color: "white",
    },
    {
      value: "applications",
      label: "Applications",
      color: "yellow",
    },
    {
      value: "desktop",
      label: "Desktop",
      color: "red",
    },
    {
      value: "downloads",
      label: "Downloads",
      color: "orange",
    },
    {
      value: "documents",
      label: "Documents",
      color: "blue",
    },
  ];

  return (
    <div className="w-[432px] pt-20 sticky top-0">
      <Accordion type="single" collapsible>
        <FilterItemAccordian
          title={"Clothing"}
          subTitle={"All"}
          items={items}
          hasSearchBox
          checkBoxType="grid"
          onSearchChange={(e) => {
            console.log(e)
          }}
          onCheckBoxClick={() => {
            console.log("it is clicked")
           }}
          onTextClick={() => { 
            console.log("it is clicked")
          }}
        />

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
