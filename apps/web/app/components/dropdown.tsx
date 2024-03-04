
import { useState } from 'react';

interface ICustomSelectProps {
    options: string[];
    onOptionSelect: (option: any) => void;
}
const CustomSelect: React.FC<ICustomSelectProps> = ({ options, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" border border-gray-500 w-[200px]">
            <div className=' flex justify-between items-center' onClick={handleToggle}>
                <div
                    className={`bg-white text-gray-500 py-2 px-4  cursor-pointer`}
                >
                    {isOpen ? "Sort By" : selectedOption}
                </div>
                <div className={` pr-2`}>
                    {isOpen ?
                        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        : <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    }
                </div>
            </div>
            {isOpen && (
                <div className=" bg-white">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => {
                                setIsOpen(false);
                                setSelectedOption(option);
                                onOptionSelect(option)
                            }}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CustomSelect;

// const handleOptionSelect = (option: any) => {
//     console.log(option)
// };
{/* <CustomSelect onOptionSelect={handleOptionSelect} options={['Recommended', 'Price hight to low', "Price low to high", 'New in']} /> */ }