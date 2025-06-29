import React from 'react'

type TextInputProps = {
type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const TextInputs = ({type, placeholder, value, onChange}: TextInputProps) => {
    
  return (
    
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 mt-2 border rounded mb-2 w-full"
    />
  );
};

export default TextInputs