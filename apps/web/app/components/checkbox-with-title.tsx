import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@shadcn-next-skeleton/shared";
import React from "react";

interface ICheckBoxWithTitleProps {
    label: string;
    onCheckedChange: (e: CheckedState) => void;
    color?: string;
}

const CheckBoxWithTitle: React.FC<ICheckBoxWithTitleProps> = ({
    onCheckedChange,
    label,
    color,
}) => {
    return (
        <div className="flex items-center">
            <Checkbox onCheckedChange={onCheckedChange} />
            {!!color &&
                <div
                    className="border border-gray-300 w-4 h-4 ml-5"
                    style={{ backgroundColor: color }}
                ></div>}
            <label
                htmlFor="terms"
                className="text-sm font-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3"
            >
                {label}
            </label>
        </div>
    );
};

export default CheckBoxWithTitle;
