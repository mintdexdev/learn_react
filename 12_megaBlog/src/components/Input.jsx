import React, { useId } from 'react';

function Input(
  {
    label,
    type = 'text',
    className = '',
    ref,        // pull in the ref  
    ...props   // everything else  
  }
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        type={type}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default Input;