import React from "react";

type ButtonProps = {
  className?: string;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ className, label }) => {
  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
