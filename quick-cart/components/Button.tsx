"use client";

import React from "react";

type ButtonProps = {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, label, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children || label}
    </button>
  );
};

export default Button;
