import React from "react";

interface ClickableTextProps {
    onClick: () => void;
    text: string;
}

const ClickableText: React.FC<ClickableTextProps> = ({ onClick, text }) => {
    return (
        <a
            onClick={onClick}
            className="underline hover:underline cursor-pointer text-gray-500"
        >
            {text}
        </a>
    );
};

export default ClickableText;
