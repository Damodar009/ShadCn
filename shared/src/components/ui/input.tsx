import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'; // Import the eye icons or use your preferred icon library
import * as React from "react";

import { cn } from "../../utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

export interface SearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> { }


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}

          ref={ref}
          {...props}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeNoneIcon /> : <EyeOpenIcon />}
        </button>
      </div>
    );
  }
);

const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ className, type = "search", ...props }, ref) => {
    return (
      <div className="relative">
        <div
          className="absolute inset-y-0 start-0 flex items-center ps-[10px] pointer-events-auto cursor-pointer"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input
          type={type}
          className={cn(
            "block w-full p-[10px] ps-7 text-md text-gray-500 border border-gray-300 focus:outline-none focus:border-gray-500 ",
            className
          )}
          ref={ref}
          {...props}
        />

        {/* <div
          className="absolute inset-y-0 end-0 flex items-center pe-[10px] pointer-events-auto cursor-pointer"
          onClick={() => { }}
        >
         
        </div> */}
      </div>
    );
  }
);

SearchBox.displayName = "SearchBox";




export { Input, PasswordInput, SearchBox };
