import React from "react";

interface ButtonProps {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    className?: string; 
  }
  const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', children, className = '' }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;