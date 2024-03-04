import { AccordionContent, AccordionItem, AccordionTrigger, SearchBox } from "@shadcn-next-skeleton/shared";
import CheckBoxWithTitle from "./checkbox-with-title";
import ClickableText from "./underline-text";


export interface CheckBoxItems {
    value: string,
    label: string,
    color?: string,
}
interface IFilterItemAccordianProps {
    title: string;
    subTitle: string;
    items: CheckBoxItems[];
    hasSearchBox?: boolean;
    checkBoxType?: "grid" | "list";
    onCheckBoxClick?: () => void;
    onTextClick?: () => void;
    onSearchChange?: (e: string) => void;
}

export const FilterItemAccordian: React.FC<IFilterItemAccordianProps> = ({
    title,
    subTitle,
    items,
    hasSearchBox,
    checkBoxType,
    onCheckBoxClick,
    onTextClick,
    onSearchChange
}) => {
    return (
        <AccordionItem value="item-1">
            <AccordionTrigger>
                <div className=' flex flex-col items-start '>
                    <label className="text-18">
                        {title}
                    </label>
                    <label className="text-14 text-gray-600">
                        {subTitle}
                    </label>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                {hasSearchBox &&
                    <div className=''>
                        <SearchBox onChange={(e) => {
                            onSearchChange!(e.target.value)
                        }} className=" mb-5" />

                    </div>}
                <ClickableText onClick={() => {
                    onTextClick
                }}
                    text={"Unselect all"} />

                    
               
                {
                    (!!checkBoxType && checkBoxType == "grid") ?
                        <div className=" grid grid-cols-2">
                            {
                                items.map((item) => (
                                    <div key={item.label} className=" mt-4">
                                        <CheckBoxWithTitle onCheckedChange=
                                            {(e) => {
                                                onCheckBoxClick
                                            }}
                                            color={item.color}
                                            label={item.label}
                                        />
                                    </div>
                                ))}
                        </div> :
                        <div>
                            {items.map((item) => (
                                <div key={item.label} className=" mt-4">
                                    <CheckBoxWithTitle onCheckedChange=
                                        {(e) => {
                                            onCheckBoxClick
                                        }}
                                        color={item.color}
                                        label={item.label}
                                    />
                                </div>
                            ))}
                        </div>
                }
            </AccordionContent>
        </AccordionItem>
    )
}