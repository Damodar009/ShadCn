
interface ColorContainerProps {
    colors: string[];
}

const ColorContainer: React.FC<ColorContainerProps> = ({ colors }) => {
    const handleClick = (color: string) => {
    };
    return (
        <div className="flex">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`h-7 w-7 bg-${color}-500 rounded-sm m-2 cursor-pointer`}
                    onClick={() => handleClick(color)}
                >
                </div>
            ))}
        </div>
    );
};

export default ColorContainer;
